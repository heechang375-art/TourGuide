# 🌍 Global Travel Manager
실시간 환율과 날씨 정보를 제공하는 스마트 여행 어시스턴트

이 프로젝트는 해외여행 시 필요한 환율 계산, 실시간 현지 날씨, 국가별 필수 어플 및 여행 팁을 한눈에 확인할 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능
* 실시간 정보: OpenWeatherMap 및 환율 API를 활용한 실시간 데이터 제공.
* 다국어 번역기: 한국어, 일본어, 베트남어, 태국어, 대만어, 영어 지원.
* 환율 계산기: 100단위(엔, 동) 자동 계산 기능이 포함된 대형 계산기.
* 맞춤형 정보: 국가별 필수 앱 다운로드 링크 및 추천 쇼핑 아이템 리스트.
* 체크리스트: 여행 준비물을 꼼꼼히 챙길 수 있는 인터랙티브 체크리스트.

## 🛠 기술 스택
* Backend: Python / Flask
* Frontend: HTML5, CSS3, JavaScript (Vanilla JS)
* APIs: OpenWeatherMap API, Exchange Rate API

## 🚀 시작하기

1. 환경 변수 설정
   `.env` 파일을 생성하고 본인의 API 키를 입력하세요.
   ```env
   WEATHER_API_KEY=your_api_key_here