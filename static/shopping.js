const SHOPPING_DATA = {
    tokyo: [
            {category:'💊', items:[
                    {emoji:'☀️', name:'아넷사 퍼펙트UV 선스크린', price:'¥2,200', tag:'자외선차단', note:'국내 동일 제품 대비 20~30% 저렴'},
                    {emoji:'🩹', name:'로이히츠보코 동전파스', price:'¥700', tag:'파스', note:'국내 미판매, 일본 현지 생산'},
                    {emoji:'💊', name:'이브 퀵 두통약 (イブクイック)', price:'¥800', tag:'진통제', note:'국내 미판매, 드럭스토어 전용'},
                    {emoji:'💊', name:'신비다이 위장약 (新ビオフェルミン)', price:'¥700', tag:'위장약', note:'국내 미판매, 배탈·과식에 효과적'},
                    {emoji:'🩺', name:'트라베루민 멀미약 (トラベルミン)', price:'¥600', tag:'멀미약', note:'국내 미판매'},
                    {emoji:'💊', name:'파브론 골드A 감기약', price:'¥1,200', tag:'감기약', note:'국내 미판매, 일본 베스트셀러'},
                    {emoji:'🦶', name:'휴족시간 발 냉각 시트', price:'¥700', tag:'피로회복', note:'국내 미판매, 관광 후 필수템 · 5매입'},
                    {emoji:'🧴', name:'시세이도 피노 헤어팩', price:'¥500', tag:'헤어케어', note:'국내 미판매 · 국내 유사제품 대비 1/3 가격'}
                ]},
            {category:'🧴', items:[
                    {emoji:'💋', name:'캔메이크 퍼펙트 스틸로 아이라이너', price:'¥700', tag:'아이메이크업', note:'국내 미판매 · 국내 유사 제품 대비 약 50% 저렴'},
                    {emoji:'💄', name:'세잔느 립스틱', price:'¥600', tag:'립메이크업', note:'국내 미판매, 드럭스토어 가성비 1위'},
                    {emoji:'✨', name:'메라노CC 효소 세안제', price:'¥1,100', tag:'클렌징', note:'국내 미판매, 모공 케어'},
                    {emoji:'🧴', name:'사나 두유 아이크림', price:'¥900', tag:'스킨케어', note:'국내 미판매, 다크서클 케어'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🎮', name:'닌텐도 도쿄 한정 굿즈', price:'¥2,000~', tag:'캐릭터'},
                    {emoji:'🍌', name:'도쿄 바나나', price:'¥1,600', tag:'한정과자'},
                    {emoji:'🍫', name:'로이스 생초콜릿', price:'¥800', tag:'홋카이도 과자'},
                    {emoji:'🍩', name:'긴자 웨스트 리프파이', price:'¥1,200', tag:'긴자 한정'},
                    {emoji:'🍡', name:'나마야츠하시 (니쇼켄)', price:'¥900', tag:'화과자'}
                ]},
            {category:'🍻', items:[
                    {emoji:'🍻', name:'닷사이 23 사케', price:'¥3,500', tag:'사케', note:'국내 수입가 대비 약 40% 저렴 · 위탁 수하물 권장'},
                    {emoji:'🍻', name:'야마자키 12년 위스키', price:'¥7,000~', tag:'일본 위스키', note:'국내 대비 30~50% 저렴 · 면세한도(2L·$400) 확인'}
                ]}
    ],
    osaka: [
            {category:'💊', items:[
                    {emoji:'💊', name:'파브론 골드A 감기약', price:'¥1,200', tag:'감기약', note:'국내 미판매, 일본 베스트셀러'},
                    {emoji:'💊', name:'캬베진 위장약 (キャベジンコーワ)', price:'¥800', tag:'위장약', note:'국내 미판매, 과식·속쓰림에 효과'},
                    {emoji:'🩹', name:'반테린 무릎·허리 서포터', price:'¥1,500~', tag:'서포터', note:'국내 대비 30~40% 저렴'},
                    {emoji:'🦶', name:'휴족시간 발 냉각 시트', price:'¥700', tag:'피로회복', note:'국내 미판매 · 5매입'},
                    {emoji:'🧴', name:'센카 퍼펙트 UV 젤', price:'¥900', tag:'자외선차단', note:'국내보다 20~30% 저렴'},
                    {emoji:'🧴', name:'시세이도 피노 헤어팩', price:'¥500', tag:'헤어케어', note:'국내 미판매 · 국내 유사제품 대비 1/3 가격'}
                ]},
            {category:'🧴', items:[
                    {emoji:'💋', name:'에뛰드 플레이 컬러 K팔레트', price:'¥1,200', tag:'아이섀도', note:'일본 한정 컬러, 국내 미판매'},
                    {emoji:'🧴', name:'스킨아쿠아 모이스처 밀크 SPF50+', price:'¥900', tag:'자외선차단', note:'국내 대비 20% 저렴'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🎂', name:'리쿠로오지상 치즈케이크', price:'¥965', tag:'디저트', note:'⚠️ 냉장 요구 · 현지에서 드세요'},
                    {emoji:'🎁', name:'한큐백화점 손수건', price:'¥1,000~', tag:'선물'},
                    {emoji:'🍬', name:'오사카 글리코 한정판', price:'¥600~', tag:'한정과자'},
                    {emoji:'🥞', name:'몬셰르 도지마롤', price:'¥1,620', tag:'롤케이크', note:'⚠️ 냉장 요구 · 현지에서 드세요'},
                    {emoji:'🎀', name:'오사카 한정 키티', price:'¥1,500~', tag:'캐릭터'}
                ]},
            {category:'🍻', items:[
                    {emoji:'🍻', name:'가쿠빈 산토리 위스키', price:'¥1,500', tag:'일본 위스키', note:'국내 편의점 대비 약 40% 저렴'}
                ]}
    ],
    fukuoka: [
            {category:'💊', items:[
                    {emoji:'🛁', name:'유후인 온천 입욕제', price:'¥800', tag:'온천 기념품', note:'현지 한정, 국내 미판매'},
                    {emoji:'💊', name:'루루 종합감기약 (ルル)', price:'¥900', tag:'감기약', note:'국내 미판매'},
                    {emoji:'🩹', name:'사론파스 파스 대용량', price:'¥800', tag:'파스', note:'국내 대비 약 40% 저렴'},
                    {emoji:'🧴', name:'시세이도 선케어 퍼펙트 젤', price:'¥1,000', tag:'자외선차단', note:'국내보다 20~30% 저렴'},
                    {emoji:'🦶', name:'휴족시간 발 냉각 시트', price:'¥700', tag:'피로회복', note:'국내 미판매 · 5매입'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🐟', name:'명란 튜브', price:'¥600~', tag:'식품'},
                    {emoji:'🐣', name:'히요코 (병아리빵)', price:'¥900', tag:'과자'},
                    {emoji:'🐠', name:'후쿠야 명란젓 (건조/진공)', price:'¥1,500~', tag:'선물', note:'⚠️ 냉장 생명란은 반입 불가 · 건조·진공포장 제품만 가능'},
                    {emoji:'🫖', name:'야메차 말차', price:'¥800~', tag:'차'},
                    {emoji:'🍜', name:'마루타이 하카타 라멘', price:'¥600', tag:'인스턴트 라멘', note:'분말스프 구성 · 반입 가능 · 국내 구매대행 대비 50% 저렴'},
                    {emoji:'🍪', name:'무쓰고로 과자', price:'¥700', tag:'후쿠오카 과자'}
                ]},
            {category:'🍻', items:[
                    {emoji:'🍻', name:'니와카 (하카타 지역주)', price:'¥1,800', tag:'지역주', note:'국내 미판매 · 위탁 수하물 권장'},
                    {emoji:'🍻', name:'이이치코 무기쇼추', price:'¥1,200', tag:'보리소주', note:'국내 수입가 대비 약 40% 저렴'}
                ]}
    ],
    danang: [
            {category:'💊', items:[
                    {emoji:'💊', name:'스트랩실 맥스프로 (Strepsils Max Pro)', price:'₫45K~ (약₩2,700~)', tag:'목 소염진통', note:'⚠️ 맥스프로만 한국 제품과 동일 성분(플루르비프로펜) · 일반 스트랩실은 항균 성분만 있어 진통 효과 없음'},
                    {emoji:'💊', name:'스트랩실 일반 (Strepsils Original)', price:'₫35K (약₩2,100)', tag:'목 항균·진정', note:'진통 효과 없음 · 목 살균·진정 용도 · 한국 12알 ₩4,500 대비 24알 ₩2,100으로 가격 메리트 있음'},
                    {emoji:'💊', name:'데콜겐 ND (Decolgen)', price:'₫35K (약₩2,100)', tag:'감기약', note:'한국 동급 ₩6,000~8,000 대비 1/3 · 낮용(초록)/밤용(빨강)'},
                    {emoji:'💊', name:'베로카 발포비타민 (Berocca)', price:'₫73K (약₩4,400)', tag:'비타민', note:'한국 ₩12,000~15,000 대비 약 1/3'},
                    {emoji:'🌿', name:'아티소 앰플 (Actiso) 10포', price:'₫40K (약₩2,400)', tag:'숙취해소', note:'국내 미판매, 베트남 아티초크 성분'},
                    {emoji:'💊', name:'비판텐 연고 30g (Bepanthene)', price:'₫63K (약₩3,800)', tag:'피부연고', note:'한국 ₩13,000~15,000 대비 약 1/4'},
                    {emoji:'🔥', name:'비아핀 화상연고 (Biafine)', price:'₫110K (약₩6,600)', tag:'화상·선번', note:'햇빛 화상에 특효 · 한국 대비 절반 이하'},
                    {emoji:'🩹', name:'URGO 방수밴드', price:'₫45K (약₩2,500)', tag:'방수밴드', note:'프랑스 제약사 · 한국인 입소문템'},
                    {emoji:'🦷', name:'센소다인 치약 (Sensodyne)', price:'₫95K (약₩5,700)', tag:'치약', note:'한국 ₩10,000~12,000 대비 약 절반'}
                ]},
            {category:'🛒', items:[
                    {emoji:'🥭', name:'글로벌 센추리 건망고 (Global Century)', price:'₫60K~/200g (약₩3,600~)', tag:'무설탕 건망고', note:'성분 100% 망고 · 무설탕 확인 제품 · 다른 브랜드는 설탕 범벅이니 이 브랜드 지정 구매 권장'},
                    {emoji:'🍬', name:'체리시 망고젤리 (Cherish)', price:'₫34K (약₩2,000)', tag:'망고젤리', note:'405g · 한국서 몇 배 비쌈 · 여행자 필수템'},
                    {emoji:'🍃', name:'비나밋 건과일 (망고·잭프루트)', price:'₫35K (약₩2,100)', tag:'건과일', note:'천연 건조, 국내 미판매'},
                    {emoji:'🍜', name:'하오하오 인스턴트 쌀국수', price:'₫7K~ (약₩420~)', tag:'쌀국수', note:'분말스프 · 반입 가능 · 비폰은 국내 편의점 입점이라 하오하오만 추천'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🥥', name:'코코넛 잼 (카야잼)', price:'₫80K (약₩4,800)', tag:'현지식품', note:'수제, 국내 미판매'},
                    {emoji:'🍫', name:'페바 초콜릿 (Pheva)', price:'₫180K (약₩11,000)', tag:'다낭 3대 초콜릿'},
                    {emoji:'🌶️', name:'푸꾸옥 후추 소포장', price:'₫150K~ (약₩9,000~)', tag:'향신료', note:'베트남 최고급 후추 · 국내 수입가 50% 이상 저렴'}
                ]},
            {category:'👗', items:[
                    {emoji:'👜', name:'라탄백', price:'₫200K~ (약₩12,000~)', tag:'핸드백'},
                    {emoji:'👘', name:'아오자이 맞춤', price:'₫350K~ (약₩21,000~)', tag:'전통의상', note:'한시장 2층 맞춤 제작 가능'},
                    {emoji:'🩴', name:'수제 가죽 샌들', price:'₫250K~ (약₩15,000~)', tag:'신발', note:'호이안 장인 제작'}
                ]}
    ],
    hochiminh: [
            {category:'💊', items:[
                    {emoji:'🧴', name:'푸록스 피부연고 (Phurox)', price:'₫63K (약₩3,800)', tag:'피부연고', note:'한국 ₩13,000~15,000 대비 약 1/4'},
                    {emoji:'🌿', name:'아티소 앰플 (Actiso) 10포', price:'₫40K (약₩2,400)', tag:'숙취해소', note:'국내 미판매'},
                    {emoji:'💊', name:'개비스콘 (Gaviscon)', price:'₫180K (약₩11,000)', tag:'위장약', note:'한국 ₩25,000~30,000 대비 약 절반'},
                    {emoji:'💊', name:'스트랩실 맥스프로 (Strepsils Max Pro)', price:'₫45K~ (약₩2,700~)', tag:'목 소염진통', note:'⚠️ 맥스프로만 한국 제품과 동일 성분(플루르비프로펜) · 일반 스트랩실은 항균 성분만 있어 진통 효과 없음'},
                    {emoji:'💊', name:'스트랩실 일반 (Strepsils Original)', price:'₫35K (약₩2,100)', tag:'목 항균·진정', note:'진통 효과 없음 · 목 살균·진정 용도 · 한국 대비 가격 메리트 있음'},
                    {emoji:'💊', name:'베로카 발포비타민 (Berocca)', price:'₫73K (약₩4,400)', tag:'비타민', note:'한국 ₩12,000~15,000 대비 약 1/3'},
                    {emoji:'🔥', name:'비아핀 화상연고 (Biafine)', price:'₫110K (약₩6,600)', tag:'화상·선번', note:'햇빛 화상에 특효 · 한국 대비 절반 이하'},
                    {emoji:'💊', name:'더마틱스 흉터연고 7g (Dermatix)', price:'₫212K (약₩11,000)', tag:'흉터개선', note:'한국 ₩25,000 이상 대비 절반 이하'},
                    {emoji:'👁️', name:'비나가 눈 영양제 (Vinaga)', price:'₫85K (약₩4,800)', tag:'눈 건강', note:'베트남 개욱 과일 추출 · 안구건조증에 효과'},
                    {emoji:'🧴', name:'유씨홈 모기 기피제', price:'₫45K (약₩2,700)', tag:'모기 퇴치', note:'국내 미판매'}
                ]},
            {category:'🛒', items:[
                    {emoji:'🥭', name:'글로벌 센추리 건망고 (Global Century)', price:'₫60K~/200g (약₩3,600~)', tag:'무설탕 건망고', note:'성분 100% 망고 · 무설탕 확인 제품 · 다른 브랜드는 설탕 범벅이니 이 브랜드 지정 구매 권장'},
                    {emoji:'🍬', name:'체리시 망고젤리 (Cherish)', price:'₫34K (약₩2,000)', tag:'망고젤리', note:'405g · 한국서 몇 배 비쌈'},
                    {emoji:'🍜', name:'하오하오 인스턴트 쌀국수', price:'₫7K~ (약₩420~)', tag:'쌀국수', note:'분말스프 · 반입 가능 · 비폰은 국내 편의점 입점이라 하오하오만 추천'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🍫', name:'마루 초콜릿', price:'₫180K (약₩11,000)', tag:'디저트'},
                    {emoji:'🌶️', name:'푸꾸옥 후추 소포장', price:'₫150K~ (약₩9,000~)', tag:'향신료', note:'국내 수입가 50% 이상 저렴'},
                    {emoji:'🧧', name:'벤탄시장 자수 파우치', price:'₫80K~ (약₩4,800~)', tag:'핸드메이드'}
                ]},
            {category:'🍻', items:[
                    {emoji:'🍻', name:'넵모이 보드카', price:'₫120K (약₩7,200)', tag:'베트남 전통주', note:'국내 미판매 · 위탁 수하물 권장'}
                ]}
    ],
    bangkok: [
            {category:'💊', items:[
                    {emoji:'🐯', name:'타이거밤 화이트', price:'฿100 (약₩4,000)', tag:'근육통', note:'한국 ₩8,000~10,000 대비 약 절반'},
                    {emoji:'👑', name:'퀸비 로얄 젤리 크림', price:'฿350 (약₩14,000)', tag:'왕실 브랜드', note:'대형마트 한정, 국내 미판매'},
                    {emoji:'🌿', name:'야돔 흡입 코막힘 스틱', price:'฿60 (약₩2,400)', tag:'코막힘', note:'한국 ₩5,000~7,000 대비 약 1/3 가격'},
                    {emoji:'💊', name:'아세타미노펜 (Sara)', price:'฿30 (약₩1,200)', tag:'두통약', note:'한국 동급 약 ₩3,000~5,000 대비 극저가'},
                    {emoji:'🧴', name:'포레스타 미 모기 기피제', price:'฿80 (약₩3,200)', tag:'모기 퇴치', note:'국내 미판매'},
                    {emoji:'🩺', name:'돈야 허브 인헤일러', price:'฿50 (약₩2,000)', tag:'코막힘·두통', note:'국내 미판매'}
                ]},
            {category:'💄', items:[
                    {emoji:'🧖', name:'판퓨리 스파 제품', price:'฿350~ (약₩14,000~)', tag:'스파/뷰티', note:'국내 백화점 판매가 대비 30~40% 저렴'},
                    {emoji:'🌿', name:'하버(HARNN) 바디오일', price:'฿290~ (약₩11,600~)', tag:'천연 코스메', note:'국내 미판매'},
                    {emoji:'🌸', name:'나렛 쑨타리 허브 스크럽', price:'฿250~ (약₩10,000~)', tag:'스크럽', note:'태국 왕실 허브 브랜드, 국내 미판매'},
                    {emoji:'💆', name:'와 아로마 마사지 오일', price:'฿200~ (약₩8,000~)', tag:'마사지오일', note:'왓포 마사지숍 정품, 국내 미판매'}
                ]},
            {category:'☕', items:[
                    {emoji:'🫖', name:'차트라뮤 홍차', price:'฿200~ (약₩8,000~)', tag:'차', note:'국내 수입가 대비 약 40% 저렴'},
                    {emoji:'🥭', name:'망고 탱탱젤리 (Vfoods)', price:'฿120 (약₩4,800)', tag:'현지과자', note:'국내 미판매'},
                    {emoji:'🍯', name:'도이캄 과일잼', price:'฿150~ (약₩6,000~)', tag:'왕실 프로젝트 잼', note:'태국 왕실 농업 프로젝트 제품, 국내 미판매'}
                ]},
            {category:'👗', items:[
                    {emoji:'👜', name:'나라야 파우치', price:'฿300~ (약₩12,000~)', tag:'패션', note:'국내 백화점 판매가 대비 약 50% 저렴'},
                    {emoji:'👟', name:'나라야 캔버스 토트백', price:'฿500~ (약₩20,000~)', tag:'토트백', note:'국내 대비 약 절반'}
                ]}
    ],
    taipei: [
            {category:'💊', items:[
                    {emoji:'💊', name:'파이파이 비타민C 발포정', price:'NT$150 (약₩6,400)', tag:'비타민', note:'국내 미판매'},
                    {emoji:'🌿', name:'흑인치약 (黑人齒膏)', price:'NT$60 (약₩2,600)', tag:'치약', note:'국내 대비 약 40% 저렴'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🧴', name:'우유비누 (카오펜)', price:'NT$200 (약₩8,500)', tag:'스킨케어', note:'대만 현지 브랜드, 국내 미판매'},
                    {emoji:'🌿', name:'텐션 흑마유 헤어오일', price:'NT$380 (약₩16,000)', tag:'헤어케어', note:'국내 구매대행 대비 약 30% 저렴'},
                    {emoji:'🍍', name:'치아더 펑리수', price:'NT$12~ (약₩500~)', tag:'과자'},
                    {emoji:'🥐', name:'누가크래커 (미미·라뜰리에 루터스)', price:'NT$150~ (약₩6,400~)', tag:'누가크래커', note:'한국인 필수템, 오픈런 · 국내 미판매'},
                    {emoji:'🍬', name:'닥터큐 젤리', price:'NT$150 (약₩6,400)', tag:'젤리'},
                    {emoji:'🎵', name:'우드오르골', price:'NT$300~ (약₩12,700~)', tag:'기념품'},
                    {emoji:'🍡', name:'타이양빙 (太陽餅)', price:'NT$180 (약₩7,600)', tag:'전통과자', note:'타이중 명물, 국내 미판매'}
                ]},
            {category:'☕', items:[
                    {emoji:'🧋', name:'쩐주나이차 밀크티 파우더 (공식)', price:'NT$180 (약₩7,600)', tag:'버블티', note:'공식 포장, 국내 미판매'},
                    {emoji:'🍵', name:'동방미인 우롱차', price:'NT$400~ (약₩17,000~)', tag:'프리미엄 차', note:'대만 4대 명차 · 국내 수입가 대비 30% 저렴'},
                    {emoji:'🥫', name:'키키 레스토랑 파 구이 소스', price:'NT$180 (약₩7,600)', tag:'소스', note:'대만 유명 맛집 비법소스, 국내 미판매'}
                ]},
            {category:'🍻', items:[
                    {emoji:'🍻', name:'금문고량주', price:'NT$500~ (약₩21,000~)', tag:'고량주', note:'국내 수입가 대비 30~40% 저렴 · 면세한도 확인'},
                    {emoji:'🍺', name:'대만 맥주 과일향 한정판', price:'NT$60 (약₩2,600)', tag:'한정맥주', note:'편의점 한정 출시, 국내 미판매'}
                ]}
    ],
    hongkong: [
            {category:'💊', items:[
                    {emoji:'🌿', name:'백화유 (만능오일)', price:'HK$60 (약₩11,000)', tag:'만능오일', note:'홍콩 대표, 국내 미판매'},
                    {emoji:'💊', name:'정관장 홍삼 (홍콩 한정)', price:'HK$180~ (약₩32,700~)', tag:'건강식품', note:'홍콩 한정 패키지, 국내보다 10~15% 저렴'},
                    {emoji:'🌸', name:'왓슨스 콜라겐 마스크팩', price:'HK$50~ (약₩9,100~)', tag:'마스크팩', note:'홍콩 왓슨스 자체 브랜드, 국내 미판매'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🍪', name:'제니쿠키', price:'HK$78 (약₩14,200)', tag:'쿠키'},
                    {emoji:'🐼', name:'기화병가 팬더쿠키', price:'HK$68 (약₩12,400)', tag:'쿠키'},
                    {emoji:'🧧', name:'홍콩 한정 MTR 굿즈', price:'HK$50~ (약₩9,100~)', tag:'기념품'},
                    {emoji:'🥮', name:'로우포우 에그타르트', price:'HK$13~ (약₩2,400~)', tag:'홍콩 디저트'},
                    {emoji:'🍬', name:'카우키 단단 사탕', price:'HK$40~ (약₩7,300~)', tag:'홍콩 과자', note:'국내 미판매'},
                    {emoji:'🎁', name:'홍콩 스타페리 기념품', price:'HK$50~ (약₩9,100~)', tag:'한정 기념품'},
                    {emoji:'🍵', name:'위수기 밀크티 잎', price:'HK$80~ (약₩14,500~)', tag:'홍콩 차', note:'홍콩 현지 한정, 국내 미판매'}
                ]},
            {category:'👜', items:[
                    {emoji:'👜', name:'MCM 핸드백 (면세)', price:'HK$3,000~ (약₩545,000~)', tag:'명품', note:'국내 대비 10~15% 저렴'},
                    {emoji:'⌚', name:'카르티에 시계 (면세)', price:'HK$15,000~ (약₩2,700,000~)', tag:'명품시계', note:'국내 대비 약 20% 저렴'}
                ]}
    ],
    nyc: [
            {category:'🛒', items:[
                    {emoji:'🛍️', name:'트레이더조 에코백', price:'$3 (약₩4,400)', tag:'마트굿즈', note:'국내 미판매'},
                    {emoji:'🥜', name:'트레이더조 피넛버터 컵', price:'$4 (약₩5,800)', tag:'마트 과자', note:'국내 미판매'},
                    {emoji:'🥞', name:'트레이더조 판케이크믹스', price:'$3 (약₩4,400)', tag:'마트 식품', note:'국내 미판매'},
                    {emoji:'🌰', name:'트레이더조 에브리씽 시즈닝', price:'$5 (약₩7,300)', tag:'시즈닝', note:'국내 미판매'}
                ]},
            {category:'🗽', items:[
                    {emoji:'🗽', name:'메트로폴리탄 뮤지엄 한정 굿즈', price:'$15~ (약₩22,000~)', tag:'뮤지엄샵', note:'현지 한정, 국내 미판매'},
                    {emoji:'🎨', name:'MoMA 디자인 굿즈', price:'$20~ (약₩29,000~)', tag:'뮤지엄샵', note:'현지 한정, 국내 미판매'},
                    {emoji:'🏀', name:'NBA 스토어 한정 져지', price:'$80~ (약₩116,000~)', tag:'스포츠', note:'국내 미판매 한정 컬러'}
                ]},
            {category:'💄', items:[
                    {emoji:'💄', name:'글로시에 화장품', price:'$18~ (약₩26,000~)', tag:'뷰티', note:'미국 현지 브랜드 · 국내 구매대행 대비 30% 저렴'},
                    {emoji:'🧴', name:'닥터 브로너스 비누', price:'$10~ (약₩14,500~)', tag:'천연비누', note:'국내 대비 약 30% 저렴'},
                    {emoji:'💊', name:'메가푸드 종합비타민', price:'$30~ (약₩43,500~)', tag:'비타민', note:'국내 대비 약 30% 저렴'},
                    {emoji:'🌿', name:'NOW 마그네슘 보충제', price:'$15~ (약₩21,700~)', tag:'영양제', note:'국내 직구가 대비 약 30% 저렴'}
                ]},
            {category:'🍎', items:[
                    {emoji:'🥨', name:'에사베이글 믹스 세트', price:'$10~ (약₩14,500~)', tag:'NYC 명물', note:'국내 미판매'},
                    {emoji:'🍭', name:'딜런스 캔디바', price:'$15~ (약₩21,700~)', tag:'캔디', note:'국내 미판매'}
                ]}
    ],
    seoul: [
            {category:'💄', items:[
                    {emoji:'💄', name:'올리브영 K-뷰티 세트', price:'₩10,000~', tag:'뷰티'},
                    {emoji:'🌿', name:'에스트라 아토베리어', price:'₩25,000', tag:'스킨케어'},
                    {emoji:'🧴', name:'라운드랩 자작나무 토너', price:'₩18,000', tag:'스킨케어'},
                    {emoji:'💋', name:'롬앤 쥬시래스팅 틴트', price:'₩12,000', tag:'립틴트'}
                ]},
            {category:'🎁', items:[
                    {emoji:'🧦', name:'캐릭터 양말', price:'₩3,000~', tag:'패션'},
                    {emoji:'🥜', name:'HBAF 아몬드', price:'₩5,000', tag:'스낵'},
                    {emoji:'🍡', name:'인사동 수제 한과 세트', price:'₩15,000~', tag:'전통과자'},
                    {emoji:'🧧', name:'한국 전통 자수 파우치', price:'₩10,000~', tag:'공예품'}
                ]},
            {category:'👗', items:[
                    {emoji:'👟', name:'마르디 메크르디 백팩', price:'₩50,000~', tag:'K패션'},
                    {emoji:'🧢', name:'디스이즈네버댓 캡', price:'₩40,000~', tag:'K패션'}
                ]},
            {category:'🍻', items:[
                    {emoji:'🍻', name:'소주 / 막걸리', price:'₩2,000~', tag:'주류'},
                    {emoji:'🍺', name:'제주 위트에일 (제주맥주)', price:'₩4,000', tag:'크래프트 맥주'}
                ]}
    ]
};

const APPS_DATA = {
    tokyo: [
        {name:'구글맵', desc:'지도·길찾기·대중교통', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'Suica 앱', desc:'모바일 IC카드 발급·충전 (iPhone·Pixel)', link:'https://www.jreast.co.jp/mobilesuica/'},
        {name:'타베로그', desc:'일본 최대 맛집 평점·예약', link:'https://tabelog.com/'},
        {name:'Visit Japan Web', desc:'입국심사·세관 사전 등록', link:'https://www.vjw.digital.go.jp/'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'},
        {name:'LINE', desc:'일본 현지인 소통·가게 예약', link:'https://line.me/ko/'}
    ],
    osaka: [
        {name:'구글맵', desc:'지도·길찾기·대중교통', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'Suica 앱', desc:'모바일 IC카드 발급·충전', link:'https://www.jreast.co.jp/mobilesuica/'},
        {name:'타베로그', desc:'일본 최대 맛집 평점·예약', link:'https://tabelog.com/'},
        {name:'Visit Japan Web', desc:'입국심사·세관 사전 등록', link:'https://www.vjw.digital.go.jp/'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'},
        {name:'LINE', desc:'일본 현지인 소통·가게 예약', link:'https://line.me/ko/'}
    ],
    fukuoka: [
        {name:'구글맵', desc:'지도·길찾기·대중교통', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'Suica 앱', desc:'모바일 IC카드 발급·충전', link:'https://www.jreast.co.jp/mobilesuica/'},
        {name:'니시테츠 버스', desc:'후쿠오카 버스 노선·시간표', link:'https://www.nishitetsu.jp/bus/'},
        {name:'타베로그', desc:'일본 최대 맛집 평점·예약', link:'https://tabelog.com/'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'},
        {name:'LINE', desc:'일본 현지인 소통·가게 예약', link:'https://line.me/ko/'}
    ],
    danang: [
        {name:'Grab', desc:'동남아 필수 택시 호출', link:'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger'},
        {name:'배달K', desc:'약국·세탁·한식 배달 · 한국어 지원', link:'https://play.google.com/store/apps/details?id=com.teamjin.deliveryk'},
        {name:'롯데마트 베트남', desc:'마트 당일배달 · 15만동 이상 무료배송', link:'https://play.google.com/store/apps/details?id=com.lottemart.vn'},
        {name:'구글맵', desc:'지도 및 길찾기', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'}
    ],
    hochiminh: [
        {name:'Grab', desc:'동남아 필수 택시 호출', link:'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger'},
        {name:'배달K', desc:'약국·세탁·한식 배달 · 한국어 지원', link:'https://play.google.com/store/apps/details?id=com.teamjin.deliveryk'},
        {name:'롯데마트 베트남', desc:'마트 당일배달 · 15만동 이상 무료배송', link:'https://play.google.com/store/apps/details?id=com.lottemart.vn'},
        {name:'구글맵', desc:'지도 및 길찾기', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'}
    ],
    bangkok: [
        {name:'Grab', desc:'동남아 필수 택시 호출', link:'https://www.grab.com/'},
        {name:'Bolt', desc:'그랩보다 저렴한 택시', link:'https://bolt.eu/'},
        {name:'구글맵', desc:'BTS·MRT 노선 확인 포함', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'MRT 노선도', desc:'방콕 MRT 공식 노선·요금 확인(웹)', link:'https://www.mrta.co.th/'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'}
    ],
    taipei: [
        {name:'구글맵', desc:'MRT 노선·환승 포함', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'Uber', desc:'대만 택시 호출·도심 이동', link:'https://www.uber.com/'},
        {name:'대만고속철(THSR)', desc:'타이중·타이난 고속철 예약(웹)', link:'https://www.thsrc.com.tw/'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'}
    ],
    hongkong: [
        {name:'MTR 앱', desc:'홍콩 지하철 노선·요금·시간표', link:'https://www.mtr.com.hk/'},
        {name:'Uber', desc:'택시·차량 호출', link:'https://www.uber.com/'},
        {name:'구글맵', desc:'지도·길찾기·MTR 노선 포함', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'}
    ],
    nyc: [
        {name:'Uber', desc:'필수 차량 호출', link:'https://www.uber.com/'},
        {name:'MTA 공식 앱', desc:'NYC 지하철 노선·운행 상태 확인', link:'https://www.mta.info/'},
        {name:'Yelp', desc:'현지인 맛집·카페 리뷰', link:'https://www.yelp.com/'},
        {name:'Google Maps', desc:'지도·지하철 노선 포함', link:'https://play.google.com/store/apps/details?id=com.google.android.apps.maps'}
    ],
    seoul: [
        {name:'네이버 지도', desc:'한국 최고의 지도·대중교통', link:'https://map.naver.com/'},
        {name:'카카오T', desc:'택시·바이크 호출', link:'https://www.kakaomobility.com/'},
        {name:'카카오맵', desc:'맛집·장소 리뷰 풍부', link:'https://map.kakao.com/'},
        {name:'파파고', desc:'카메라·이미지 번역 특화', link:'https://play.google.com/store/apps/details?id=com.naver.labs.translator'}
    ]
};