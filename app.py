import os
import json
import time
import requests
from datetime import datetime, timezone
from flask import Flask, render_template, request, jsonify, Response
from dotenv import load_dotenv
from data import COUNTRIES, CHECKLIST_DATA
from utils import get_travel_info, translate_weather

load_dotenv()

app = Flask(__name__)

# 도시별 좌표 (data.js 기준)
CITY_COORDS = {
    'tokyo':     {'lat': 35.6762, 'lon': 139.6503, 'city': 'Tokyo'},
    'osaka':     {'lat': 34.6937, 'lon': 135.5023, 'city': 'Osaka'},
    'fukuoka':   {'lat': 33.5904, 'lon': 130.4017, 'city': 'Fukuoka'},
    'danang':    {'lat': 16.0544, 'lon': 108.2022, 'city': 'Da Nang'},
    'hochiminh': {'lat': 10.8231, 'lon': 106.6297, 'city': 'Ho Chi Minh City'},
    'bangkok':   {'lat': 13.7563, 'lon': 100.5018, 'city': 'Bangkok'},
    'taipei':    {'lat': 25.0330, 'lon': 121.5654, 'city': 'Taipei'},
    'hongkong':  {'lat': 22.3193, 'lon': 114.1694, 'city': 'Hong Kong'},
    'nyc':       {'lat': 40.7128, 'lon': -74.0060, 'city': 'New York'},
    'seoul':     {'lat': 37.5665, 'lon': 126.9780, 'city': 'Seoul'},
}

# 레스토랑 캐시 파일 경로
CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cache')
os.makedirs(CACHE_DIR, exist_ok=True)
CACHE_TTL = 7 * 24 * 3600  # 7일


def get_restaurant_cache_path(city_id):
    return os.path.join(CACHE_DIR, f'restaurants_{city_id}.json')


def is_cache_valid(path):
    """캐시 파일이 존재하고 7일 이내인지 확인"""
    if not os.path.exists(path):
        return False
    age = time.time() - os.path.getmtime(path)
    return age < CACHE_TTL


def fetch_restaurants_from_places(lat, lon, city_name):
    """Google Places API로 평점 4.0+ 식당 조회"""
    PLACES_KEY = os.getenv('PLACES_API_KEY', '')
    if not PLACES_KEY or PLACES_KEY == 'your_google_places_api_key_here':
        return []

    results = []
    # 아침/점심/저녁 카테고리별 키워드
    keywords = ['브런치 카페', '현지 맛집 점심', '저녁 레스토랑']

    try:
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
        params = {
            'location': f'{lat},{lon}',
            'radius': 3000,
            'type': 'restaurant',
            'key': PLACES_KEY,
            'language': 'ko',
            'rankby': 'prominence',
        }
        resp = requests.get(url, params=params, timeout=10).json()
        places = resp.get('results', [])

        for p in places:
            rating = p.get('rating', 0)
            reviews = p.get('user_ratings_total', 0)
            if rating >= 4.0 and reviews >= 100:
                results.append({
                    'name': p.get('name', ''),
                    'rating': rating,
                    'reviews': reviews,
                    'vicinity': p.get('vicinity', ''),
                    'types': p.get('types', []),
                })

        # 평점 높은 순 정렬, 상위 20개
        results.sort(key=lambda x: (x['rating'], x['reviews']), reverse=True)
        results = results[:20]

    except Exception as e:
        print(f"Places API error: {e}")

    return results


def get_restaurants(city_id):
    """캐시 확인 후 없으면 Places API 호출"""
    cache_path = get_restaurant_cache_path(city_id)

    if is_cache_valid(cache_path):
        with open(cache_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get('restaurants', []), data.get('updated_at', '')

    # 캐시 만료 or 없음 → API 호출
    city_data = CITY_COORDS.get(city_id)
    if not city_data:
        return [], ''

    restaurants = fetch_restaurants_from_places(
        city_data['lat'], city_data['lon'], city_data['city']
    )

    # 캐시 저장
    updated_at = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    cache_data = {'restaurants': restaurants, 'updated_at': updated_at, 'city_id': city_id}
    with open(cache_path, 'w', encoding='utf-8') as f:
        json.dump(cache_data, f, ensure_ascii=False, indent=2)

    return restaurants, updated_at


@app.route('/')
def index():
    selected_id = request.args.get('country', 'osaka')
    days = request.args.get('days', '1')
    hotel = request.args.get('hotel', '미설정 숙소')
    addr = request.args.get('addr', '주소 정보 없음')

    country_data = COUNTRIES.get(selected_id)
    info = get_travel_info(country_data['city'], country_data['currency'])
    info.update(country_data)

    if 'phrases' in info:
        for cat in info['phrases']:
            for p in info['phrases'][cat]:
                for key in ['ko', 'local']:
                    if key in p:
                        p[key] = p[key].replace("{days}", days).replace("{hotel}", hotel).replace("{addr}", addr)

    gemini_key = os.getenv("GEMINI_API_KEY", "")
    return render_template('index.html',
                           info=info, countries=COUNTRIES,
                           selected_id=selected_id, days=days, hotel=hotel, addr=addr,
                           checklist=CHECKLIST_DATA,
                           gemini_key=gemini_key)



def fetch_spas_from_places(lat, lon):
    """Google Places API로 평점 4.2+ 스파/마사지 조회 (가성비 위주)"""
    PLACES_KEY = os.getenv('PLACES_API_KEY', '')
    if not PLACES_KEY or PLACES_KEY == 'your_google_places_api_key_here':
        return []

    results = []
    try:
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
        params = {
            'location': f'{lat},{lon}',
            'radius': 5000,
            'type': 'spa',
            'key': PLACES_KEY,
            'language': 'ko',
            'rankby': 'prominence',
        }
        resp = requests.get(url, params=params, timeout=10).json()
        places = resp.get('results', [])

        for p in places:
            rating = p.get('rating', 0)
            reviews = p.get('user_ratings_total', 0)
            price_level = p.get('price_level', 2)  # 0~4, 3이하만 포함
            if rating >= 4.2 and reviews >= 50 and price_level <= 3:
                results.append({
                    'name': p.get('name', ''),
                    'rating': rating,
                    'reviews': reviews,
                    'vicinity': p.get('vicinity', ''),
                    'price_level': price_level,
                })

        results.sort(key=lambda x: (x['rating'], x['reviews']), reverse=True)
        results = results[:10]
    except Exception as e:
        print(f"Places spa API error: {e}")

    return results


def get_spa_cache_path(city_id):
    return os.path.join(CACHE_DIR, f'spas_{city_id}.json')


def get_spas(city_id):
    cache_path = get_spa_cache_path(city_id)
    if is_cache_valid(cache_path):
        with open(cache_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get('spas', [])

    city_data = CITY_COORDS.get(city_id)
    if not city_data:
        return []

    spas = fetch_spas_from_places(city_data['lat'], city_data['lon'])
    updated_at = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    cache_data = {'spas': spas, 'updated_at': updated_at}
    with open(cache_path, 'w', encoding='utf-8') as f:
        json.dump(cache_data, f, ensure_ascii=False, indent=2)

    return spas

@app.route('/api/restaurants/<city_id>')
def api_restaurants(city_id):
    """식당 목록 API - 캐시 7일, 자동 갱신"""
    restaurants, updated_at = get_restaurants(city_id)
    cache_path = get_restaurant_cache_path(city_id)
    age_days = 0
    if os.path.exists(cache_path):
        age_days = round((time.time() - os.path.getmtime(cache_path)) / 86400, 1)

    return jsonify({
        'restaurants': restaurants,
        'updated_at': updated_at,
        'cache_age_days': age_days,
        'count': len(restaurants)
    })


@app.route('/api/spas/<city_id>')
def api_spas(city_id):
    """스파/마사지 목록 API - 캐시 7일"""
    spas = get_spas(city_id)
    return jsonify({'spas': spas, 'count': len(spas)})


@app.route('/api/weather/<city_name>')
def api_weather(city_name):
    try:
        W_KEY = os.getenv("WEATHER_API_KEY")
        w_url = f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={W_KEY}&units=metric"
        w_data = requests.get(w_url, timeout=5).json()
        if w_data.get('main'):
            temp = round(w_data['main']['temp'])
            desc = translate_weather(w_data['weather'][0]['main'])
            return jsonify({'temp': temp, 'desc': desc})
    except Exception as e:
        print(f"Weather API error: {e}")
    return jsonify({'temp': '-', 'desc': '오류'})


@app.route('/data.js')
def serve_data_js():
    js_path = os.path.join(app.static_folder, 'data.js')
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()
    return Response(js_content, mimetype='application/javascript')


if __name__ == '__main__':
    app.run(debug=False)