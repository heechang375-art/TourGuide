import os
import requests
from dotenv import load_dotenv

load_dotenv()

WEATHER_MAP = {
    'Clear': '맑음', 'Clouds': '흐림', 'Rain': '비', 'Drizzle': '이슬비',
    'Thunderstorm': '뇌우', 'Snow': '눈', 'Mist': '안개', 'Smoke': '연무',
    'Haze': '실안개', 'Dust': '먼지', 'Fog': '짙은 안개', 'Sand': '황사',
    'Ash': '화산재', 'Squall': '돌풍', 'Tornado': '토네이도'
}

def translate_weather(weather_desc):
    return WEATHER_MAP.get(weather_desc, weather_desc)

def get_travel_info(city_name, base_currency):
    result = {'rate_display': 0, 'rate_calc': 0, 'temp': 0, 'weather_desc': '', 'update_time': '', 'rates': {}}

    # 1. 환율
    try:
        rate_data = requests.get(f"https://open.er-api.com/v6/latest/{base_currency}").json()
        result['rates'] = rate_data.get('rates', {})
        result['update_time'] = rate_data.get('time_last_update_utc', '최근')
        raw_rate = rate_data['rates']['KRW']
        result['rate_calc'] = raw_rate
        result['rate_display'] = round(raw_rate * 100, 2) if base_currency in ["JPY", "VND"] else round(raw_rate, 2)
    except Exception as e:
        print(f"Currency Error: {e}")
        result['rate_calc'] = 1.0
        result['rate_display'] = 1.0

    # 2. 날씨
    try:
        W_KEY = os.getenv("WEATHER_API_KEY")
        w_data = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={W_KEY}&units=metric"
        ).json()
        if w_data.get('main'):
            result['temp'] = round(w_data['main']['temp'])
            result['weather_desc'] = translate_weather(w_data['weather'][0]['main'])
        else:
            result['temp'] = "N/A"
            result['weather_desc'] = "정보 없음"
    except Exception as e:
        print(f"Weather Error: {e}")
        result['temp'] = "N/A"
        result['weather_desc'] = "오류"

    return result