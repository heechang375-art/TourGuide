import os
import json
import time
import requests
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime

from flask import Flask, render_template, request, jsonify, Response, abort
from dotenv import load_dotenv

from data import COUNTRIES
from utils import get_travel_info, get_rates, get_weather, _kst_label

load_dotenv()

app = Flask(__name__)

# 도시별 좌표 (static/data.js와 동일하게 유지)
CITY_COORDS = {
    'tokyo':     {'lat': 35.6762, 'lon': 139.6503},
    'osaka':     {'lat': 34.6937, 'lon': 135.5023},
    'fukuoka':   {'lat': 33.5904, 'lon': 130.4017},
    'danang':    {'lat': 16.0544, 'lon': 108.2022},
    'hochiminh': {'lat': 10.8231, 'lon': 106.6297},
    'bangkok':   {'lat': 13.7563, 'lon': 100.5018},
    'taipei':    {'lat': 25.0330, 'lon': 121.5654},
    'hongkong':  {'lat': 22.3193, 'lon': 114.1694},
    'nyc':       {'lat': 40.7128, 'lon': -74.0060},
    'seoul':     {'lat': 37.5665, 'lon': 126.9780},
}

CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cache')
os.makedirs(CACHE_DIR, exist_ok=True)
CACHE_TTL = 7 * 24 * 3600  # 7일

PLACES_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'


# ── 캐시 헬퍼 ─────────────────────────────────────────────
def _cache_path(kind, city_id):
    return os.path.join(CACHE_DIR, f'{kind}_{city_id}.json')


def _cache_age_days(path):
    if not os.path.exists(path):
        return None
    return round((time.time() - os.path.getmtime(path)) / 86400, 1)


def _read_cache(path):
    """캐시가 7일 이내면 dict 반환, 아니면 None."""
    if not os.path.exists(path):
        return None
    if time.time() - os.path.getmtime(path) >= CACHE_TTL:
        return None
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def _write_cache(path, payload):
    payload['updated_at'] = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    return payload


# ── Google Places ────────────────────────────────────────
def _places_key():
    key = os.getenv('PLACES_API_KEY', '')
    if not key or key == 'your_google_places_api_key_here':
        return None
    return key


def _fetch_places(lat, lon, place_type, radius, min_rating, min_reviews, limit):
    """Places nearbysearch 공통 호출. 실패 시 빈 리스트."""
    key = _places_key()
    if not key:
        return []
    try:
        resp = requests.get(PLACES_URL, params={
            'location': f'{lat},{lon}',
            'radius': radius,
            'type': place_type,
            'key': key,
            'language': 'ko',
            'rankby': 'prominence',
        }, timeout=10).json()
    except Exception as e:
        print(f"Places API error ({place_type}): {e}")
        return []

    results = []
    for p in resp.get('results', []):
        rating = p.get('rating', 0)
        reviews = p.get('user_ratings_total', 0)
        if rating < min_rating or reviews < min_reviews:
            continue
        results.append({
            'name': p.get('name', ''),
            'rating': rating,
            'reviews': reviews,
            'vicinity': p.get('vicinity', ''),
            'price_level': p.get('price_level', 2),
        })
    results.sort(key=lambda x: (x['rating'], x['reviews']), reverse=True)
    return results[:limit]


def get_places(city_id, kind):
    """kind: 'restaurants' | 'spas'. 캐시 우선, 없으면 API 호출 후 저장."""
    path = _cache_path(kind, city_id)
    cached = _read_cache(path)
    if cached is not None:
        return cached.get('items', []), cached.get('updated_at', '')

    coords = CITY_COORDS.get(city_id)
    if not coords:
        return [], ''

    if kind == 'restaurants':
        items = _fetch_places(coords['lat'], coords['lon'], 'restaurant',
                              radius=3000, min_rating=4.0, min_reviews=100, limit=20)
    else:  # spas
        items = _fetch_places(coords['lat'], coords['lon'], 'spa',
                              radius=5000, min_rating=4.2, min_reviews=50, limit=10)
        items = [s for s in items if s['price_level'] <= 3]

    saved = _write_cache(path, {'items': items, 'city_id': city_id})
    return items, saved['updated_at']


# ── 라우트 ────────────────────────────────────────────────
@app.route('/')
def index():
    selected_id = request.args.get('country', 'osaka')
    if selected_id not in COUNTRIES:
        selected_id = 'osaka'
    country = COUNTRIES[selected_id]

    info = get_travel_info(country['city'], country['currency'])
    info.update(country)

    return render_template('index.html',
                           info=info, countries=COUNTRIES,
                           selected_id=selected_id)


@app.route('/api/restaurants/<city_id>')
def api_restaurants(city_id):
    items, updated_at = get_places(city_id, 'restaurants')
    return jsonify({
        'restaurants': items,
        'updated_at': updated_at,
        'cache_age_days': _cache_age_days(_cache_path('restaurants', city_id)) or 0,
        'count': len(items),
    })


@app.route('/api/spas/<city_id>')
def api_spas(city_id):
    items, _ = get_places(city_id, 'spas')
    return jsonify({'spas': items, 'count': len(items)})


@app.route('/api/weather/<city_name>')
def api_weather(city_name):
    data = get_weather(city_name)
    return jsonify({
        'temp': data.get('temp', '-'),
        'desc': data.get('desc', '오류'),
        'feels_like': data.get('feels_like', '-'),
        'humidity': data.get('humidity', '-'),
        'wind': data.get('wind', '-'),
        'time_label': _kst_label(data['fetched_at']),
        'cached': data.get('cached', False),
    })


@app.route('/api/rates/<currency>')
def api_rates(currency):
    data = get_rates(currency.upper())
    try:
        src_kst = parsedate_to_datetime(data.get('source_updated_at', '')).astimezone(
            timezone.utc).astimezone(timezone(timedelta(hours=9)))
        time_label = src_kst.strftime("KST %m/%d %H:%M 기준")
    except Exception:
        time_label = _kst_label(data['fetched_at'])
    return jsonify({
        'rates': data.get('rates', {}),
        'time_label': time_label,
        'cached': data.get('cached', False),
    })


@app.route('/api/plan', methods=['POST'])
def api_plan():
    """Gemini 프록시. API 키를 클라이언트에 노출하지 않기 위한 서버 중계."""
    key = os.getenv('GEMINI_API_KEY', '')
    if not key:
        return jsonify({'error': 'GEMINI_API_KEY 미설정'}), 503

    prompt = (request.get_json(silent=True) or {}).get('prompt', '')
    if not prompt:
        return jsonify({'error': 'prompt 누락'}), 400

    try:
        resp = requests.post(
            'https://generativelanguage.googleapis.com/v1beta/models/'
            'gemini-2.5-flash:generateContent',
            params={'key': key},
            json={
                'contents': [{'parts': [{'text': prompt}]}],
                'generationConfig': {'temperature': 0.7, 'maxOutputTokens': 8192},
            },
            timeout=60,
        ).json()
    except Exception as e:
        return jsonify({'error': f'Gemini 호출 실패: {e}'}), 502

    if 'error' in resp:
        return jsonify({'error': resp['error'].get('message', 'API 오류')}), 502

    text = (resp.get('candidates', [{}])[0]
                .get('content', {}).get('parts', [{}])[0].get('text', ''))
    if not text:
        return jsonify({'error': '응답이 비어있습니다'}), 502
    return jsonify({'text': text})


@app.route('/data.js')
def serve_data_js():
    js_path = os.path.join(app.static_folder, 'data.js')
    with open(js_path, encoding='utf-8') as f:
        content = f.read()
    return Response(content, mimetype='application/javascript',
                    headers={'Cache-Control': 'public, max-age=86400'})


if __name__ == '__main__':
    app.run(debug=False)
