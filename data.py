# data.py
# 도시별 메타데이터. 회화(phrases)와 체크리스트는 프론트엔드 static/phrases.js, static/data.js에서 관리한다.

COUNTRIES = {
    "tokyo": {
        "name": "일본 (도쿄)", "currency": "JPY", "city": "Tokyo",
        "apps": [
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"},
            {"name": "Visit Japan Web", "desc": "빠른 입국 심사(웹)", "link": "https://www.vjw.digital.go.jp/"},
            {"name": "파파고", "desc": "이미지 번역 및 통역", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["스이카/파스모 IC카드 필수", "Visit Japan Web 권장(종이 신고서 가능)", "지하철 24/48/72시간권(800/1200/1500엔) 활용", "편의점 ATM 수수료 저렴", "문 앞보다 차내 안쪽 이동"],
        "warnings": ["지하철 내 통화 자제", "길거리 흡연 금지", "카드 결제 PIN 필요", "우선석 주변 휴대폰 매너 준수"],
        "shopping": ["퍼펙트휩", "돈키호테 산토리 위스키", "도쿄 바나나", "샤론파스", "닷사이 23 사케", "히메이론 안약"]
    },
    "osaka": {
        "name": "일본 (오사카)", "currency": "JPY", "city": "Osaka",
        "apps": [
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"},
            {"name": "오사카 e-패스", "desc": "관광지 입장 및 교통", "link": "https://www.e-pass.osaka-info.jp/kr/?utm_source=osp.osaka-info&utm_medium=referral&utm_campaign=shu_link"},
            {"name": "파파고", "desc": "이미지 번역 및 통역", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["오사카 주유패스 운영 중(2026-03-31까지)", "주유패스 1일 3,500엔 / 2일 5,000엔", "주유패스: 전철·버스 + 시설 혜택", "오사카 e-Pass 1day/2day 운영", "USJ 오픈런 필수", "Visit Japan Web 권장(종이 신고서 가능)", "한큐백화점 외국인 5% 쿠폰"],
        "warnings": ["에스컬레이터 오른쪽 서기", "공공장소 흡연 금지(1000엔 과태료)", "카드 결제 PIN 필요", "전자담배/가열식도 길거리 흡연 규제", "디지털 주유패스는 AM3:00~다음날 AM2:59가 1일", "시설 휴무/점검은 출발 전 공식 확인"],
        "shopping": ["리쿠로오지상 치즈케이크", "한큐백화점 손수건", "551호라이 만두", "오사카 한정 키티 인형"]
    },
    "fukuoka": {
        "name": "일본 (후쿠오카)", "currency": "JPY", "city": "Fukuoka",
        "apps": [
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"},
            {"name": "파파고", "desc": "이미지 번역 및 통역", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["공항-시내 지하철 접근 좋음", "공항역→하카타 5분 / 텐진 약 10분", "야타이 정찰제 매장 추천"],
        "warnings": ["버스 뒤로 타서 정리권 뽑기", "산큐패스 지참 확인"],
        "shopping": ["명란 튜브", "병아리 빵(히요코)", "이치란 라멘 키트", "후쿠야 명란젓"]
    },
    "danang": {
        "name": "베트남 (다낭)", "currency": "VND", "city": "Da Nang",
        "apps": [
            {"name": "Grab", "desc": "동남아 필수 택시 호출", "link": "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["전기택시 Xanh SM 권장", "한시장 2층 아오자이 흥정", "비자 필요 시 공식 e-visa 포털 사용"],
        "warnings": ["얼음 배탈 주의", "수돗물 양치 금지", "비자는 정부 공식 포털 사용"],
        "shopping": ["아치카페 코코넛커피", "라탄백", "탑젤리", "안(An) 과자", "G7 커피"]
    },
    "hochiminh": {
        "name": "베트남 (호치민)", "currency": "VND", "city": "Ho Chi Minh City",
        "apps": [
            {"name": "Grab", "desc": "동남아 필수 택시 호출", "link": "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["루프탑 바 야경", "벤탄시장 흥정 필수", "Metro Line 1(벤탄-수오이띠엔) 운행 중 · 일 5만명 이용 · 벤탄 시장 접근 편리", "비자 필요 시 공식 e-visa 포털 사용"],
        "warnings": ["오토바이 날치기 주의", "길 건널 때 천천히", "비자는 정부 공식 포털 사용"],
        "shopping": ["마루 초콜릿", "콩카페 원두", "캐슈넛", "비나밋 건과일"]
    },
    "bangkok": {
        "name": "태국 (방콕)", "currency": "THB", "city": "Bangkok",
        "apps": [
            {"name": "Grab", "desc": "동남아 필수 택시 호출", "link": "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"},
            {"name": "Bolt", "desc": "그랩보다 저렴한 택시", "link": "https://play.google.com/store/apps/details?id=com.bolt.client"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["GLN QR 결제 편리", "트래블월렛 사용 가능", "TDAC는 입국일 포함 3일 이내 제출 필수", "가족/일행 TDAC 1회 최대 10명", "TDAC 제출은 무료(공식 사이트)"],
        "warnings": ["왕실 비판 금지", "사원 복장 규정 준수", "TDAC QR 미수신 시 입국심사 직원 문의"],
        "shopping": ["와코루 속옷", "차트라뮤 홍차", "폰즈 BB 파우더", "야돔", "나라야 파우치"]
    },
    "taipei": {
        "name": "대만 (타이베이)", "currency": "TWD", "city": "Taipei",
        "apps": [
            {"name": "EasyWallet", "desc": "이지카드 잔액 확인", "link": "https://play.google.com/store/apps/details?id=com.easycard.wallet"},
            {"name": "Uber", "desc": "대만 택시 호출 앱", "link": "https://play.google.com/store/apps/details?id=com.ubercab"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["이지카드 편의점 충전", "타이베이 101 예약 권장"],
        "warnings": ["지하철 내 취식 금지", "'No food or drink' 구역 음식·음료 금지", "MRT 위반 시 NT$1,500~7,500 벌금 가능", "무단횡단 벌금 주의"],
        "shopping": ["치아더 펑리수", "닥터큐 젤리", "금문고량주", "우드오르골", "미미 크래커"]
    },
    "hongkong": {
        "name": "홍콩", "currency": "HKD", "city": "Hong Kong",
        "apps": [
            {"name": "Octopus", "desc": "홍콩 필수 교통카드 앱", "link": "https://play.google.com/store/apps/details?id=com.octopuscards.nfc_reader"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["옥토퍼스는 교통·편의점 등 대부분 사용 가능", "식당 합석 문화 흔함"],
        "warnings": ["법정 금연구역 흡연 과태료 HK$3,000(2026-01-01~)", "MTR 유료구역 음식·음료 섭취 시 최대 HK$2,000", "쇼핑백 최소 HK$1 부과(면제 품목 제외)"],
        "shopping": ["제니쿠키", "기화병가 팬더쿠키", "백화유", "립톤 밀크티"]
    },
    "nyc": {
        "name": "미국 (뉴욕)", "currency": "USD", "city": "New York",
        "apps": [
            {"name": "Uber", "desc": "필수 차량 호출 앱", "link": "https://play.google.com/store/apps/details?id=com.ubercab"},
            {"name": "Yelp", "desc": "현지인 맛집 리뷰", "link": "https://play.google.com/store/apps/details?id=com.yelp.android"},
            {"name": "Google Maps", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["팁 18~20% 기준", "지하철/버스 OMNY 결제 (MetroCard 판매 종료)", "OMNY 7일 내 12회 초과 시 무료(주간상한 $35)", "맨해튼 60번가 이남 혼잡통행료"],
        "warnings": ["밤늦은 공원 방문 자제", "길거리 구걸 대응 자제", "OMNY 상한 혜택은 같은 카드/기기 연속 사용 필요"],
        "shopping": ["트레이더조 에코백", "글로시에 화장품", "나이키 한정판", "바스앤바디웍스"]
    },
    "seoul": {
        "name": "대한민국 (서울)", 
        "currency": "KRW", 
        "city": "Seoul",
        "apps": [
            {"name": "Naver Map", "desc": "Best navigation in Korea (English supported)", "link": "https://play.google.com/store/apps/details?id=com.nhn.android.nmap"},
            {"name": "Kakao T", "desc": "Taxi and transport hailing service", "link": "https://play.google.com/store/apps/details?id=com.kakao.taxi"},
            {"name": "Catch Table", "desc": "Restaurant reservation for foreigners", "link": "https://play.google.com/store/apps/details?id=com.catchtable.app"},
            {"name": "Papago", "desc": "Most accurate Korean translation app", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["지하철·버스는 T-money 사용", "소규모 매장 대비 소액 현금 지참", "길찾기는 네이버지도 정확도 높음", "단기 방문자는 Climate Card(1/2/3/5/7일) 고려"],
        "warnings": ["Smoking is prohibited in most public areas", "Wait until people get off before boarding the subway", "Be careful of delivery motorcycles on the sidewalk"],
        "shopping": ["K-Beauty (Olive Young)", "HBAF Almonds", "Character Socks", "Soju / Makgeolli", "Korean Seaweed (Gim)"]
    }
}
