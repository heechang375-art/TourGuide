import requests
import os
from dotenv import load_dotenv

load_dotenv()

def translate_weather(weather_desc):
    """날씨 설명을 한글로 변환"""
    weather_map = {
        'Clear': '맑음',
        'Clouds': '흐림',
        'Rain': '비',
        'Drizzle': '이슬비',
        'Thunderstorm': '뇌우',
        'Snow': '눈',
        'Mist': '안개',
        'Smoke': '연무',
        'Haze': '실안개',
        'Dust': '먼지',
        'Fog': '짙은 안개',
        'Sand': '황사',
        'Ash': '화산재',
        'Squall': '돌풍',
        'Tornado': '토네이도'
    }
    return weather_map.get(weather_desc, weather_desc)

def get_travel_info(city_name, base_currency):
    # 초기화
    result = {'rate_display': 0, 'rate_calc': 0, 'temp': 0, 'weather_desc': '', 'update_time': ''}
    
    # 1. 환율 정보 (무료 API)
    try:
        rate_url = f"https://open.er-api.com/v6/latest/{base_currency}"
        rate_data = requests.get(rate_url).json()
        
        # 1단위 환율 (실제 계산용: 1엔=9.32원)
        raw_rate = rate_data['rates']['KRW']
        result['rate_calc'] = raw_rate 
        
        # 업데이트 시간 기록
        result['update_time'] = rate_data.get('time_last_update_utc', '최근')
        
        # 표시용 환율 (일본, 베트남만 100단위로 뻥튀기해서 보여줌)
        if base_currency in ["JPY", "VND"]:
            result['rate_display'] = round(raw_rate * 100, 2)
        else:
            result['rate_display'] = round(raw_rate, 2)
            
    except Exception as e:
        print(f"Currency Error: {e}")
        result['rate_calc'] = 1.0
        result['rate_display'] = 1.0

    # 2. 실시간 날씨 (OpenWeatherMap API)

# utils.py 수정 부분
    # 2. 실시간 날씨 (OpenWeatherMap API)
    try:
        W_KEY = os.getenv("WEATHER_API_KEY")
        w_url = f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={W_KEY}&units=metric"
        w_data = requests.get(w_url).json()
        
        if w_data.get('main'):
            result['temp'] = round(w_data['main']['temp'])
            # 날씨 설명을 한글로 변환
            weather_main = w_data['weather'][0]['main']
            result['weather_desc'] = translate_weather(weather_main)
        else:
            result['temp'] = "N/A"
            result['weather_desc'] = "정보 없음"
    except:
        result['temp'] = "N/A"
        result['weather_desc'] = "오류"

    return result