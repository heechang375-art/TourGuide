from flask import Flask, render_template, request, jsonify
from data import COUNTRIES, CHECKLIST_DATA
from utils import get_travel_info 

app = Flask(__name__)

@app.route('/')
def index():
    selected_id = request.args.get('country', 'osaka')
    days = request.args.get('days', '1')
    hotel = request.args.get('hotel', '미설정 숙소')
    addr = request.args.get('addr', '주소 정보 없음')

    country_data = COUNTRIES.get(selected_id)
    # utils.py에서 날씨(temp)와 환율을 가져옴
    info = get_travel_info(country_data['city'], country_data['currency'])
    info.update(country_data) 

    # 회화 치환 (기존 데이터 훼손 없이 내용만 변경)
    if 'phrases' in info:
        for cat in info['phrases']:
            for p in info['phrases'][cat]:
                for key in ['ko', 'local']:
                    if key in p:
                        p[key] = p[key].replace("{days}", days).replace("{hotel}", hotel).replace("{addr}", addr)

    return render_template('index.html', 
                           info=info, countries=COUNTRIES, 
                           selected_id=selected_id, days=days, hotel=hotel, addr=addr,
                           checklist=CHECKLIST_DATA)


@app.route('/api/weather/<city_name>')
def api_weather(city_name):
    try:
        import os, requests as req
        W_KEY = os.getenv("WEATHER_API_KEY")
        w_url = f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={W_KEY}&units=metric"
        w_data = req.get(w_url, timeout=5).json()
        if w_data.get('main'):
            from utils import translate_weather
            temp = round(w_data['main']['temp'])
            desc = translate_weather(w_data['weather'][0]['main'])
            return jsonify({'temp': temp, 'desc': desc})
    except Exception as e:
        print(f"Weather API error: {e}")
    return jsonify({'temp': '-', 'desc': '오류'})

if __name__ == '__main__':
    app.run(debug=False)