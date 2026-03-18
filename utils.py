import os
import time
import requests
from datetime import datetime, timezone, timedelta
from dotenv import load_dotenv

load_dotenv()

WEATHER_MAP = {
    'Clear': '맑음', 'Clouds': '흐림', 'Rain': '비', 'Drizzle': '이슬비',
    'Thunderstorm': '뇌우', 'Snow': '눈', 'Mist': '안개', 'Smoke': '연무',
    'Haze': '실안개', 'Dust': '먼지', 'Fog': '짙은 안개', 'Sand': '황사',
    'Ash': '화산재', 'Squall': '돌풍', 'Tornado': '토네이도'
}

# ── 메모리 캐시 ──────────────────────────────────────────
# 환율: open.er-api 무료 플랜은 KST 09시 1회 갱신 → 24h TTL
# 날씨: 실시간성 필요, 30분 TTL
RATE_CACHE: dict = {}   # { currency: {rates, fetched_at, source_updated_at} }
WEATHER_CACHE: dict = {}  # { city_name: {temp, desc, fetched_at} }

RATE_TTL    = 24 * 3600   # 24시간
WEATHER_TTL = 30 * 60     # 30분
# ─────────────────────────────────────────────────────────


def translate_weather(weather_desc):
    return WEATHER_MAP.get(weather_desc, weather_desc)


def _kst_label(utc_ts: float) -> str:
    """UTC timestamp → 'KST HH:MM 기준' 문자열"""
    kst = datetime.fromtimestamp(utc_ts, tz=timezone(timedelta(hours=9)))
    return kst.strftime("KST %H:%M 기준")


def get_rates(base_currency: str) -> dict:
    """
    환율 딕셔너리 반환. 캐시 유효 시 캐시 사용, 만료 시 API 재호출.
    반환: { rates, fetched_at(float), source_updated_at(str), cached(bool) }
    """
    now = time.time()
    cached = RATE_CACHE.get(base_currency)
    if cached and (now - cached['fetched_at']) < RATE_TTL:
        return {**cached, 'cached': True}

    try:
        data = requests.get(
            f"https://open.er-api.com/v6/latest/{base_currency}", timeout=8
        ).json()
        entry = {
            'rates': data.get('rates', {}),
            'fetched_at': now,
            'source_updated_at': data.get('time_last_update_utc', ''),
            'cached': False,
        }
        RATE_CACHE[base_currency] = entry
        return entry
    except Exception as e:
        print(f"Currency Error: {e}")
        fallback = cached or {'rates': {}, 'fetched_at': now, 'source_updated_at': '', 'cached': True}
        return fallback


def get_weather(city_name: str) -> dict:
    """
    날씨 dict 반환. 30분 캐시.
    반환: { temp, desc, fetched_at(float), cached(bool) }
    """
    now = time.time()
    cached = WEATHER_CACHE.get(city_name)
    if cached and (now - cached['fetched_at']) < WEATHER_TTL:
        return {**cached, 'cached': True}

    try:
        W_KEY = os.getenv("WEATHER_API_KEY")
        w_data = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather"
            f"?q={city_name}&appid={W_KEY}&units=metric",
            timeout=6,
        ).json()
        if w_data.get('main'):
            entry = {
                'temp': round(w_data['main']['temp']),
                'feels_like': round(w_data['main'].get('feels_like', 0)),
                'humidity': w_data['main'].get('humidity', '-'),
                'wind': round(w_data.get('wind', {}).get('speed', 0), 1),
                'desc': translate_weather(w_data['weather'][0]['main']),
                'fetched_at': now,
                'cached': False,
            }
        else:
            entry = {'temp': 'N/A', 'desc': '정보 없음', 'fetched_at': now, 'cached': False}
        WEATHER_CACHE[city_name] = entry
        return entry
    except Exception as e:
        print(f"Weather Error: {e}")
        return cached or {'temp': 'N/A', 'desc': '오류', 'fetched_at': now, 'cached': True}


def get_travel_info(city_name, base_currency):
    """기존 index 라우트용 — 내부적으로 캐시 함수 사용"""
    result = {'rate_display': 0, 'rate_calc': 0, 'temp': 0, 'weather_desc': '', 'update_time': '', 'rates': {}}

    rate_data = get_rates(base_currency)
    result['rates'] = rate_data['rates']
    result['update_time'] = rate_data.get('source_updated_at', '')
    krw_rate = rate_data['rates'].get('KRW', 1.0)
    result['rate_calc'] = krw_rate
    result['rate_display'] = round(krw_rate * 100, 2) if base_currency in ["JPY", "VND"] else round(krw_rate, 2)

    weather_data = get_weather(city_name)
    result['temp'] = weather_data.get('temp', 'N/A')
    result['weather_desc'] = weather_data.get('desc', '오류')

    return result