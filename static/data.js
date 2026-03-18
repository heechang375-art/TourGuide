// TourGuide 정적 데이터 - app.py의 /data.js 엔드포인트가 서빙

    const I18N = {
        ko: {
            mode_before:'출발 전', mode_during:'여행 중', locked_during:'여행 중 모드에서 사용 가능', info_before_msg:'환율 탭에서 월별 기후와 환율을 확인하세요',
            tab_info:'정보', tab_phrases:'회화', tab_shopping:'쇼핑', tab_calc:'환율', tab_check:'체크',
            tab_calc_before:'날씨·환율', tab_calc_during:'번역·환율',
            calc_tab_translator:'번역기', calc_tab_exchange:'환율 계산기',
            weather_label:'날씨', rate_label:'환율',
            translator_title:'번역기', translator_placeholder:'번역할 내용 입력...',
            btn_to_local:'{lang}로', btn_to_ui:'한국어로',
            tips_title:'팁 & 주의사항', tips_header:'✅ 꿀팁', warnings_header:'⚠️ 주의',
            apps_title:'필수 앱', slide_tips:'팁 · 주의', slide_apps:'앱 설치', slide_emergency:'긴급 연락처',
            emergency_title:'긴급 연락처',
            weather_detail_title:'월별 기후',
            climate_temp_range:'기온', climate_rain:'우천일수', climate_season:'시즌', climate_outfit:'옷차림',
            climate_peak:'성수기', climate_shoulder:'준성수기', climate_off:'비수기',
            climate_months:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            tip_calc_title:'팁 계산기', tip_amount:'팁 금액', tip_total:'총 금액', tip_split:'인원수',
            allergy_title:'알레르기 표현', allergy_label:'알레르기 선택',
            shopping_title:'추천 쇼핑템', calc_title:'환율 계산기', calc_btn:'계산하기',
            calc_unit_msg:'{curr}는 {unit} 단위로만 환전 가능합니다',
            checklist_title:'여행 준비 체크리스트', same_currency:'(같은 통화)',
            alert_empty:'번역할 내용을 입력해주세요.',
            alert_translate_error:'번역 중 오류가 발생했습니다.',
            alert_enter_amount:'금액을 입력해주세요.',
            alert_unit_adjust:'{curr}는 {unit}단위로만 환전 가능합니다.\n{val}으로 조정되었습니다.'
        },
        ja: {
            mode_before:'出発前', mode_during:'旅行中', locked_during:'旅行中モードで使用できます', info_before_msg:'為替タブで月別気候と為替を確認',
            tab_info:'情報', tab_phrases:'会話', tab_shopping:'ショッピング', tab_calc:'為替', tab_check:'チェック',
            tab_calc_before:'天気·為替', tab_calc_during:'翻訳·為替',
            calc_tab_translator:'翻訳機', calc_tab_exchange:'為替計算機',
            weather_label:'天気', rate_label:'為替',
            translator_title:'翻訳機', translator_placeholder:'翻訳する内容を入力...',
            btn_to_local:'{lang}へ', btn_to_ui:'日本語へ',
            tips_title:'ヒント & 注意', tips_header:'✅ ヒント', warnings_header:'⚠️ 注意',
            apps_title:'必須アプリ', slide_tips:'ヒント・注意', slide_apps:'アプリ', slide_emergency:'緊急連絡先',
            emergency_title:'緊急連絡先',
            weather_detail_title:'月別気候',
            climate_temp_range:'気温', climate_rain:'雨天日数', climate_season:'シーズン', climate_outfit:'服装',
            climate_peak:'ピーク', climate_shoulder:'準ピーク', climate_off:'オフシーズン',
            climate_months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            tip_calc_title:'チップ計算機', tip_amount:'チップ', tip_total:'合計', tip_split:'人数',
            allergy_title:'アレルギー表現', allergy_label:'アレルギー選択',
            shopping_title:'おすすめショッピング', calc_title:'為替計算機', calc_btn:'計算する',
            calc_unit_msg:'{curr}は{unit}単位のみ両替可能です',
            checklist_title:'旅行準備チェックリスト', same_currency:'(同じ通貨)',
            alert_empty:'翻訳する内容を入力してください。',
            alert_translate_error:'翻訳中にエラーが発生しました。',
            alert_enter_amount:'金額を入力してください。',
            alert_unit_adjust:'{curr}は{unit}単位のみ両替可能です。\n{val}に調整されました。'
        },
        vi: {
            mode_before:'Trước chuyến đi', mode_during:'Đang du lịch', locked_during:'Dùng được ở chế độ đang du lịch', info_before_msg:'Xem khí hậu và tỷ giá ở tab Tỷ giá',
            tab_info:'Thông tin', tab_phrases:'Hội thoại', tab_shopping:'Mua sắm', tab_calc:'Tỷ giá', tab_check:'Danh sách',
            tab_calc_before:'Thời tiết·Tỷ giá', tab_calc_during:'Dịch·Tỷ giá',
            calc_tab_translator:'Dịch thuật', calc_tab_exchange:'Tính tỷ giá',
            weather_label:'Thời tiết', rate_label:'Tỷ giá',
            translator_title:'Dịch thuật', translator_placeholder:'Nhập nội dung cần dịch...',
            btn_to_local:'Sang {lang}', btn_to_ui:'Sang Tiếng Việt',
            tips_title:'Mẹo & Lưu ý', tips_header:'✅ Mẹo hay', warnings_header:'⚠️ Lưu ý',
            apps_title:'Ứng dụng cần thiết', slide_tips:'Mẹo · Lưu ý', slide_apps:'Cài ứng dụng', slide_emergency:'Khẩn cấp',
            emergency_title:'Liên hệ khẩn cấp',
            weather_detail_title:'Khí hậu theo tháng',
            climate_temp_range:'Nhiệt độ', climate_rain:'Ngày mưa', climate_season:'Mùa', climate_outfit:'Trang phục',
            climate_peak:'Cao điểm', climate_shoulder:'Trung bình', climate_off:'Thấp điểm',
            climate_months:['Th.1','Th.2','Th.3','Th.4','Th.5','Th.6','Th.7','Th.8','Th.9','Th.10','Th.11','Th.12'],
            tip_calc_title:'Tính tiền tip', tip_amount:'Tiền tip', tip_total:'Tổng cộng', tip_split:'Số người',
            allergy_title:'Biểu đạt dị ứng', allergy_label:'Chọn dị ứng',
            shopping_title:'Mua sắm đề xuất', calc_title:'Máy tính tỷ giá', calc_btn:'Tính toán',
            calc_unit_msg:'{curr} chỉ đổi được bội số {unit}',
            checklist_title:'Danh sách chuẩn bị', same_currency:'(Cùng tiền tệ)',
            alert_empty:'Vui lòng nhập nội dung cần dịch.',
            alert_translate_error:'Đã xảy ra lỗi khi dịch.',
            alert_enter_amount:'Vui lòng nhập số tiền.',
            alert_unit_adjust:'{curr} chỉ đổi bội số {unit}.\nĐã điều chỉnh thành {val}.'
        },
        th: {
            mode_before:'ก่อนออกเดินทาง', mode_during:'ระหว่างท่องเที่ยว', locked_during:'ใช้ได้ในโหมดระหว่างท่องเที่ยว', info_before_msg:'ดูสภาพอากาศและอัตราแลกในแท็บอัตราแลก',
            tab_info:'ข้อมูล', tab_phrases:'สนทนา', tab_shopping:'ช้อปปิ้ง', tab_calc:'อัตราแลก', tab_check:'รายการ',
            tab_calc_before:'อากาศ·แลก', tab_calc_during:'แปล·แลก',
            calc_tab_translator:'แปลภาษา', calc_tab_exchange:'คำนวณแลก',
            weather_label:'อากาศ', rate_label:'อัตราแลก',
            translator_title:'แปลภาษา', translator_placeholder:'กรอกเนื้อหาที่ต้องการแปล...',
            btn_to_local:'เป็น{lang}', btn_to_ui:'เป็นไทย',
            tips_title:'เคล็ดลับ & คำเตือน', tips_header:'✅ เคล็ดลับ', warnings_header:'⚠️ คำเตือน',
            apps_title:'แอปที่จำเป็น', slide_tips:'เคล็ดลับ·คำเตือน', slide_apps:'ติดตั้งแอป', slide_emergency:'ฉุกเฉิน',
            emergency_title:'ติดต่อฉุกเฉิน',
            weather_detail_title:'สภาพอากาศรายเดือน',
            climate_temp_range:'อุณหภูมิ', climate_rain:'วันฝนตก', climate_season:'ฤดูกาล', climate_outfit:'การแต่งกาย',
            climate_peak:'ไฮซีซัน', climate_shoulder:'ช่วงกลาง', climate_off:'โลว์ซีซัน',
            climate_months:['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
            tip_calc_title:'คำนวณทิป', tip_amount:'เงินทิป', tip_total:'รวมทั้งหมด', tip_split:'จำนวนคน',
            allergy_title:'การแสดงอาการแพ้', allergy_label:'เลือกอาการแพ้',
            shopping_title:'ของแนะนำ', calc_title:'เครื่องคิดอัตราแลก', calc_btn:'คำนวณ',
            calc_unit_msg:'{curr} แลกได้เฉพาะหน่วย {unit}',
            checklist_title:'รายการเตรียมท่องเที่ยว', same_currency:'(สกุลเดียวกัน)',
            alert_empty:'กรุณากรอกเนื้อหาที่ต้องการแปล',
            alert_translate_error:'เกิดข้อผิดพลาดขณะแปล',
            alert_enter_amount:'กรุณากรอกจำนวนเงิน',
            alert_unit_adjust:'{curr} แลกได้เฉพาะหน่วย {unit}\nปรับเป็น {val} แล้ว'
        },
        'zh-CN': {
            mode_before:'出发前', mode_during:'旅行中', locked_during:'旅行中模式可以使用', info_before_msg:'在汇率标签查看月度气候和汇率',
            tab_info:'信息', tab_phrases:'会话', tab_shopping:'购物', tab_calc:'汇率', tab_check:'清单',
            tab_calc_before:'天气·汇率', tab_calc_during:'翻译·汇率',
            calc_tab_translator:'翻译器', calc_tab_exchange:'汇率计算',
            weather_label:'天气', rate_label:'汇率',
            translator_title:'翻译器', translator_placeholder:'输入要翻译的内容...',
            btn_to_local:'翻译成{lang}', btn_to_ui:'翻译成中文',
            tips_title:'提示 & 注意', tips_header:'✅ 小贴士', warnings_header:'⚠️ 注意',
            apps_title:'必备应用', slide_tips:'提示·注意', slide_apps:'安装应用', slide_emergency:'紧急联系',
            emergency_title:'紧急联系方式',
            weather_detail_title:'月度气候',
            climate_temp_range:'气温', climate_rain:'雨天日数', climate_season:'旅游季节', climate_outfit:'穿衣建议',
            climate_peak:'旺季', climate_shoulder:'平季', climate_off:'淡季',
            climate_months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            tip_calc_title:'小费计算器', tip_amount:'小费', tip_total:'总计', tip_split:'人数',
            allergy_title:'过敏表达', allergy_label:'选择过敏项',
            shopping_title:'推荐购物', calc_title:'汇率计算器', calc_btn:'计算',
            calc_unit_msg:'{curr}只能兑换{unit}的倍数',
            checklist_title:'旅行准备清单', same_currency:'(相同货币)',
            alert_empty:'请输入要翻译的内容。',
            alert_translate_error:'翻译时出现错误。',
            alert_enter_amount:'请输入金额。',
            alert_unit_adjust:'{curr}只能兑换{unit}的倍数。\n已调整为{val}。'
        },
        'zh-TW': {
            mode_before:'出發前', mode_during:'旅行中', locked_during:'旅行中模式可以使用', info_before_msg:'在匯率標籤查看月度氣候和匯率',
            tab_info:'資訊', tab_phrases:'會話', tab_shopping:'購物', tab_calc:'匯率', tab_check:'清單',
            tab_calc_before:'天氣·匯率', tab_calc_during:'翻譯·匯率',
            calc_tab_translator:'翻譯器', calc_tab_exchange:'匯率計算',
            weather_label:'天氣', rate_label:'匯率',
            translator_title:'翻譯器', translator_placeholder:'輸入要翻譯的內容...',
            btn_to_local:'翻譯成{lang}', btn_to_ui:'翻譯成繁體中文',
            tips_title:'提示 & 注意', tips_header:'✅ 小提示', warnings_header:'⚠️ 注意',
            apps_title:'必備應用', slide_tips:'提示·注意', slide_apps:'安裝應用', slide_emergency:'緊急聯繫',
            emergency_title:'緊急聯繫方式',
            weather_detail_title:'月度氣候',
            climate_temp_range:'氣溫', climate_rain:'雨天日數', climate_season:'旅遊季節', climate_outfit:'穿衣建議',
            climate_peak:'旺季', climate_shoulder:'平季', climate_off:'淡季',
            climate_months:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            tip_calc_title:'小費計算器', tip_amount:'小費', tip_total:'總計', tip_split:'人數',
            allergy_title:'過敏表達', allergy_label:'選擇過敏項',
            shopping_title:'推薦購物', calc_title:'匯率計算器', calc_btn:'計算',
            calc_unit_msg:'{curr}只能兌換{unit}的倍數',
            checklist_title:'旅行準備清單', same_currency:'(相同貨幣)',
            alert_empty:'請輸入要翻譯的內容。',
            alert_translate_error:'翻譯時出現錯誤。',
            alert_enter_amount:'請輸入金額。',
            alert_unit_adjust:'{curr}只能兌換{unit}的倍數。\n已調整為{val}。'
        },
        en: {
            mode_before:'Before Trip', mode_during:'On Trip', locked_during:'Available in On Trip mode', info_before_msg:'Check climate & exchange rate in the Exchange tab',
            tab_info:'Info', tab_phrases:'Phrases', tab_shopping:'Shopping', tab_calc:'Exchange', tab_check:'Checklist',
            tab_calc_before:'Weather·Rates', tab_calc_during:'Translate·Rates',
            calc_tab_translator:'Translator', calc_tab_exchange:'Exchange Calc',
            weather_label:'Weather', rate_label:'Rate',
            translator_title:'Translator', translator_placeholder:'Enter text to translate...',
            btn_to_local:'To {lang}', btn_to_ui:'To English',
            tips_title:'Tips & Warnings', tips_header:'✅ Tips', warnings_header:'⚠️ Warnings',
            apps_title:'Essential Apps', slide_tips:'Tips · Warnings', slide_apps:'Install Apps', slide_emergency:'Emergency',
            emergency_title:'Emergency Contacts',
            weather_detail_title:'Monthly Climate',
            climate_temp_range:'Temp', climate_rain:'Rainy Days', climate_season:'Season', climate_outfit:'Outfit',
            climate_peak:'Peak', climate_shoulder:'Shoulder', climate_off:'Off-season',
            climate_months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            tip_calc_title:'Tip Calculator', tip_amount:'Tip Amount', tip_total:'Total', tip_split:'People',
            allergy_title:'Allergy Phrases', allergy_label:'Select Allergy',
            shopping_title:'Shopping Picks', calc_title:'Exchange Calculator', calc_btn:'Calculate',
            calc_unit_msg:'{curr} can only be exchanged in {unit} units',
            checklist_title:'Travel Checklist', same_currency:'(Same currency)',
            alert_empty:'Please enter text to translate.',
            alert_translate_error:'An error occurred during translation.',
            alert_enter_amount:'Please enter an amount.',
            alert_unit_adjust:'{curr} can only be exchanged in {unit} units.\nAdjusted to {val}.'
        }
    };

    const COUNTRIES_DATA = {
        tokyo: { name:'일본 (도쿄)', currency:'JPY', city:'Tokyo', lat:35.6762, lon:139.6503,
            tips:['스이카(Suica) 앱으로 모바일 IC카드 발급 가능 (iPhone·Pixel)','실물 스이카/파스모는 공항·역 발권기에서 구입','지하철 24/48/72시간권(800/1200/1500엔) 활용','Visit Japan Web으로 입국심사·세관 사전 등록','편의점 ATM(세븐일레븐·이온) 외화 인출 가능','문 앞보다 차내 안쪽으로 이동'],
            warnings:['지하철 내 통화·큰 소리 자제','우선석 주변 휴대폰 전원 OFF 에티켓','길거리 흡연 금지 구역 많음','카드 결제 시 PIN 필요'],
            lang:'ja' },
        osaka: { name:'일본 (오사카)', currency:'JPY', city:'Osaka', lat:34.6937, lon:135.5023,
            tips:['오사카 주유패스 2026-03-31부로 종료 · 후속 패스 미발표','교통만 필요하면 1일 지하철 패스(800엔) 활용','USJ 오픈런 또는 사전 예약 필수','Visit Japan Web으로 입국심사 사전 등록','한큐백화점 외국인 5% 할인 쿠폰 챙기기'],
            warnings:['에스컬레이터 우측 정지·좌측 보행 (도쿄 반대)','공공장소 흡연 금지(1000엔 과태료)','카드 결제 시 PIN 필요','HEP FIVE 관람차 운행 중단(~2026년 4월 하순)'],
            lang:'ja' },
        fukuoka: { name:'일본 (후쿠오카)', currency:'JPY', city:'Fukuoka', lat:33.5904, lon:130.4017,
            tips:['공항-하카타역 지하철 5분 · 텐진 약 10분으로 접근 편리','니시테츠 버스 뒷문 승차 후 정리권 뽑기 · 앞문 하차 시 요금 지불','스이카/파스모 지하철·버스 사용 가능','야타이(포장마차) 정찰제 매장 권장'],
            warnings:['니시테츠 버스 정리권 미수령 시 전체 구간 최고 요금 부과','산큐패스 소지자도 탑승 시 제시 필수'],
            lang:'ja' },
        danang: { name:'베트남 (다낭)', currency:'VND', city:'Da Nang', lat:16.0544, lon:108.2022,
            tips:['Grab 택시 앱 필수 (미터기 없는 택시 탑승 금지)','한시장 2층 아오자이 흥정','비자 필요 시 공식 e-visa 포털 사용','약국 처방전 없이 낱알 구매 가능 — 여행 중 필요한 만큼만 구입 가능','약국마다 가격차이 심함 — 배달K 앱에서 시세 먼저 확인 후 구매 권장'],
            warnings:['얼음 배탈 주의','수돗물 양치 금지','비자는 정부 공식 포털 사용'],
            lang:'vi' },
        hochiminh: { name:'베트남 (호치민)', currency:'VND', city:'Ho Chi Minh City', lat:10.8231, lon:106.6297,
            tips:['루프탑 바 야경','벤탄시장 흥정 필수','Metro Line 1(벤탄~수오이띠엔) 운행 중 · 벤탄시장 접근 편리','약국 처방전 없이 낱알 구매 가능 — 여행 중 필요한 만큼만 구입 가능','약국마다 가격차이 심함 — 배달K 앱에서 시세 먼저 확인 후 구매 권장'],
            warnings:['오토바이 날치기 주의','길 건널 때 천천히'],
            lang:'vi' },
        bangkok: { name:'태국 (방콕)', currency:'THB', city:'Bangkok', lat:13.7563, lon:100.5018,
            tips:['BTS(스카이트레인) 래빗카드·1일권 구입 권장','MRT(지하철) 1회권은 동전 토큰 · 카드는 MRT 카드 별도 구입','BTS·MRT 환승 할인 없음 · 노선도 미리 확인','GLN QR·트래블월렛으로 편의점·마트 결제 편리','TDAC 앱 입국일 포함 72시간 이내 제출'],
            warnings:['왕실·사원 관련 발언·행동 주의 (불경죄)','사원 입장 시 어깨·무릎 가리기','TDAC QR 미수신 시 공항 직원 문의','뚝뚝·미터기 없는 택시 탑승 주의'],
            lang:'th' },
        taipei: { name:'대만 (타이베이)', currency:'TWD', city:'Taipei', lat:25.033, lon:121.5654,
            tips:['이지카드(悠遊卡) 편의점·역 발권기에서 구입·충전','MRT 1일권(150NT$)·2일권(250NT$) 관광객에게 유리','타이베이 101 전망대 사전 예약 권장','Uber 도심 내 이용 가능 · 택시보다 저렴'],
            warnings:['MRT 유료구역 내 음식·음료 취식 금지(NT$1,500~7,500 벌금)','무단횡단 벌금 NT$300~','우산 없이 다니면 스콜에 낭패'],
            lang:'zh-TW' },
        hongkong: { name:'홍콩', currency:'HKD', city:'Hong Kong', lat:22.3193, lon:114.1694,
            tips:['옥토퍼스 카드 공항·역에서 구입 · 교통·편의점·마트 전방위 사용','MTR 관광객용 1/2/3일 패스 있음 · 단기 여행자에게 유리','Uber로 택시 대신 이용 가능'],
            warnings:['MTR 유료구역 내 음식 취식 최대 HK$2,000 벌금','법정 금연구역 흡연 과태료 HK$3,000','쇼핑백 HK$1 유료 부과'],
            lang:'zh-TW' },
        nyc: { name:'미국 (뉴욕)', currency:'USD', city:'New York', lat:40.7128, lon:-74.006,
            tips:['지하철·버스 OMNY 결제 — 컨택리스 카드·스마트폰 태그 (MetroCard 판매 종료)','7일 내 12회 초과 무료 자동 적용 (주간상한 $35)','OMNY 실물 카드는 역 내 기계에서 구입 가능','팁 18~20% 기준 · 카드 결제 시 화면에서 선택'],
            warnings:['밤늦은 공원·한산한 역 이용 주의','지하철 내 휴대폰 소매치기 주의','길거리 구걸 대응 자제'],
            lang:'en' },
        seoul: { name:'대한민국 (서울)', currency:'KRW', city:'Seoul', lat:37.5665, lon:126.978,
            tips:['지하철·버스는 T-money 사용','소규모 매장 대비 소액 현금 지참','길찾기는 네이버지도 권장'],
            warnings:['대부분 공공장소 흡연 금지','지하철 승하차 시 먼저 내리기','인도 위 배달 오토바이 주의'],
            lang:'ko' }
};

    const TIP_CITIES = new Set(['nyc']); // 팁 계산기 표시 도시

    const EMERGENCY_DATA = {
        tokyo:     { police:'110', ambulance:'119', embassy:'03-3452-7611', embassyLabel:'주일 한국대사관' },
        osaka:     { police:'110', ambulance:'119', embassy:'06-4256-2345', embassyLabel:'주오사카 총영사관' },
        fukuoka:   { police:'110', ambulance:'119', embassy:'092-771-0461', embassyLabel:'주후쿠오카 총영사관' },
        danang:    { police:'113', ambulance:'115', embassy:'0236-3471-114', embassyLabel:'주다낭 총영사관' },
        hochiminh: { police:'113', ambulance:'115', embassy:'028-3822-5757', embassyLabel:'주호치민 총영사관' },
        bangkok:   { police:'191', ambulance:'1669', embassy:'02-247-7537', embassyLabel:'주태국 한국대사관' },
        taipei:    { police:'110', ambulance:'119', embassy:'02-2758-8320', embassyLabel:'주타이베이 한국대표부' },
        hongkong:  { police:'999', ambulance:'999', embassy:'852-2529-4141', embassyLabel:'주홍콩 총영사관' },
        nyc:       { police:'911', ambulance:'911', embassy:'212-603-6500', embassyLabel:'주뉴욕 총영사관' },
        seoul:     { police:'112', ambulance:'119', embassy:null, embassyLabel:null }
    };

    const CHECKLIST_DATA = {
        '🛂필수': ['여권 & 사본','항공권','여행자보험','숙소 예약확인서','비자(필요시)','트래블 월렛/로그 카드','현금(현지 통화)','e-SIM/도시락'],
        '👗의류': ['속옷 & 양말','상의','하의/원피스','겉옷/가디건','잠옷','수영복(해변/풀빌라)','운동화','슬리퍼/샌들'],
        '📱전자기기': ['스마트폰 충전기','보조배터리','멀티 어댑터(돼지코)','노트북/태블릿','카메라 & 메모리카드','이어폰'],
        '🧴세면/위생': ['개인 세면도구','선크림','스킨케어 기초','비상약','소화제','지사제','모기 기피제','마스크'],
        '🎒짐 관리': ['여행용 캐리어/가방','압축 파우치','자물쇠','목 베개','안대 & 귀마개','우산/우비']
    };

    const CHECKLIST_CATEGORY_I18N = {
        '🛂필수':   { ko:'🛂 필수',   ja:'🛂 必需品',       vi:'🛂 Thiết yếu',        th:'🛂 จำเป็น',                'zh-CN':'🛂 必备',   'zh-TW':'🛂 必備',   en:'🛂 Essentials' },
        '👗의류':   { ko:'👗 의류',   ja:'👗 衣類',         vi:'👗 Quần áo',          th:'👗 เสื้อผ้า',              'zh-CN':'👗 服装',   'zh-TW':'👗 服裝',   en:'👗 Clothing' },
        '📱전자기기':{ ko:'📱 전자기기',ja:'📱 電子機器',    vi:'📱 Thiết bị điện tử', th:'📱 อุปกรณ์อิเล็กทรอนิกส์','zh-CN':'📱 电子设备','zh-TW':'📱 電子設備',en:'📱 Electronics' },
        '🧴세면/위생':{ ko:'🧴 세면/위생',ja:'🧴 洗面・衛生', vi:'🧴 Vệ sinh cá nhân',  th:'🧴 ของใช้ส่วนตัว',         'zh-CN':'🧴 洗漱卫生','zh-TW':'🧴 盥洗衛生',en:'🧴 Toiletries' },
        '🎒짐 관리': { ko:'🎒 짐 관리',ja:'🎒 荷物管理',    vi:'🎒 Quản lý hành lý',  th:'🎒 จัดกระเป๋า',            'zh-CN':'🎒 行李管理','zh-TW':'🎒 行李管理',en:'🎒 Packing' }
    };

    const CHECKLIST_ITEM_I18N = {
        '여권 & 사본':       { ko:'여권 & 사본',       ja:'パスポート & コピー',  vi:'Hộ chiếu & Bản sao',      th:'หนังสือเดินทาง & สำเนา',   'zh-CN':'护照 & 复印件',    'zh-TW':'護照 & 複印件',    en:'Passport & Copy' },
        '항공권':            { ko:'항공권',            ja:'航空券',              vi:'Vé máy bay',               th:'ตั๋วเครื่องบิน',           'zh-CN':'机票',             'zh-TW':'機票',             en:'Flight Ticket' },
        '여행자보험':         { ko:'여행자보험',         ja:'旅行保険',            vi:'Bảo hiểm du lịch',         th:'ประกันการเดินทาง',         'zh-CN':'旅行保险',          'zh-TW':'旅行保險',          en:'Travel Insurance' },
        '숙소 예약확인서':    { ko:'숙소 예약확인서',    ja:'ホテル予約確認書',     vi:'Xác nhận đặt phòng',       th:'ใบยืนยันการจองที่พัก',     'zh-CN':'住宿预订确认书',     'zh-TW':'住宿預訂確認書',     en:'Hotel Confirmation' },
        '비자(필요시)':       { ko:'비자(필요시)',       ja:'ビザ(必要な場合)',     vi:'Visa (nếu cần)',           th:'วีซ่า (ถ้าจำเป็น)',        'zh-CN':'签证(如需)',        'zh-TW':'簽證(如需)',        en:'Visa (if needed)' },
        '트래블 월렛/로그 카드':{ ko:'트래블 월렛/로그 카드',ja:'トラベルカード',   vi:'Thẻ du lịch',              th:'บัตรท่องเที่ยว',           'zh-CN':'旅行钱包/卡',       'zh-TW':'旅行錢包/卡',       en:'Travel Wallet/Card' },
        '현금(현지 통화)':    { ko:'현금(현지 통화)',    ja:'現地通貨の現金',       vi:'Tiền mặt (tiền địa phương)',th:'เงินสด (สกุลเงินท้องถิ่น)','zh-CN':'现金(当地货币)',     'zh-TW':'現金(當地貨幣)',     en:'Cash (local currency)' },
        'e-SIM/도시락':      { ko:'e-SIM/도시락',      ja:'e-SIM/ポケットWiFi',  vi:'e-SIM/WiFi túi',           th:'e-SIM/WiFi พกพา',          'zh-CN':'e-SIM/随身WiFi',   'zh-TW':'e-SIM/隨身WiFi',   en:'e-SIM/Pocket WiFi' },
        '속옷 & 양말':       { ko:'속옷 & 양말',       ja:'下着 & 靴下',          vi:'Đồ lót & Tất',             th:'ชุดชั้นในและถุงเท้า',       'zh-CN':'内衣 & 袜子',       'zh-TW':'內衣 & 襪子',       en:'Underwear & Socks' },
        '상의':              { ko:'상의',              ja:'トップス',             vi:'Áo',                       th:'เสื้อ',                    'zh-CN':'上衣',             'zh-TW':'上衣',             en:'Tops' },
        '하의/원피스':        { ko:'하의/원피스',        ja:'ボトムス/ワンピース',  vi:'Quần/Váy liền',            th:'กางเกง/ชุดเดรส',           'zh-CN':'下装/连衣裙',       'zh-TW':'下裝/連衣裙',       en:'Bottoms/Dress' },
        '겉옷/가디건':        { ko:'겉옷/가디건',        ja:'アウター/カーディガン',vi:'Áo khoác/Cardigan',        th:'เสื้อคลุม/คาร์ดิแกน',     'zh-CN':'外套/开衫',         'zh-TW':'外套/開衫',         en:'Jacket/Cardigan' },
        '잠옷':              { ko:'잠옷',              ja:'パジャマ',             vi:'Đồ ngủ',                   th:'ชุดนอน',                  'zh-CN':'睡衣',             'zh-TW':'睡衣',             en:'Pajamas' },
        '수영복(해변/풀빌라)': { ko:'수영복(해변/풀빌라)',ja:'水着(ビーチ/プール)', vi:'Đồ bơi (bãi biển/hồ bơi)',th:'ชุดว่ายน้ำ (ชายหาด/พูล)', 'zh-CN':'泳装(海滩/泳池)',    'zh-TW':'泳裝(海灘/泳池)',    en:'Swimwear' },
        '운동화':            { ko:'운동화',            ja:'スニーカー',            vi:'Giày thể thao',            th:'รองเท้าผ้าใบ',             'zh-CN':'运动鞋',            'zh-TW':'運動鞋',            en:'Sneakers' },
        '슬리퍼/샌들':        { ko:'슬리퍼/샌들',        ja:'スリッパ/サンダル',    vi:'Dép/Xăng đan',             th:'รองเท้าแตะ/รัดส้น',        'zh-CN':'拖鞋/凉鞋',         'zh-TW':'拖鞋/涼鞋',         en:'Slippers/Sandals' },
        '스마트폰 충전기':    { ko:'스마트폰 충전기',    ja:'スマホ充電器',          vi:'Sạc điện thoại',           th:'ที่ชาร์จโทรศัพท์',         'zh-CN':'手机充电器',         'zh-TW':'手機充電器',         en:'Phone Charger' },
        '보조배터리':         { ko:'보조배터리',         ja:'モバイルバッテリー',    vi:'Pin dự phòng',             th:'พาวเวอร์แบงค์',            'zh-CN':'移动电源',          'zh-TW':'行動電源',          en:'Power Bank' },
        '멀티 어댑터(돼지코)':{ ko:'멀티 어댑터(돼지코)',ja:'マルチアダプター',     vi:'Bộ chuyển đổi đa năng',   th:'อะแดปเตอร์หลายระบบ',       'zh-CN':'多功能转接头',       'zh-TW':'多功能轉接頭',       en:'Multi Adapter' },
        '노트북/태블릿':      { ko:'노트북/태블릿',      ja:'ノートPC/タブレット',  vi:'Laptop/Máy tính bảng',     th:'แล็ปท็อป/แท็บเล็ต',        'zh-CN':'笔记本/平板',       'zh-TW':'筆電/平板',         en:'Laptop/Tablet' },
        '카메라 & 메모리카드':{ ko:'카메라 & 메모리카드',ja:'カメラ & メモリカード',vi:'Máy ảnh & Thẻ nhớ',        th:'กล้องและเมมโมรี่การ์ด',    'zh-CN':'相机 & 存储卡',      'zh-TW':'相機 & 記憶卡',      en:'Camera & Memory Card' },
        '이어폰':            { ko:'이어폰',            ja:'イヤホン',             vi:'Tai nghe',                 th:'หูฟัง',                   'zh-CN':'耳机',             'zh-TW':'耳機',             en:'Earphones' },
        '개인 세면도구':      { ko:'개인 세면도구',      ja:'洗面用具',             vi:'Đồ vệ sinh cá nhân',       th:'อุปกรณ์อาบน้ำส่วนตัว',     'zh-CN':'个人洗漱用品',       'zh-TW':'個人盥洗用品',       en:'Toiletries' },
        '선크림':            { ko:'선크림',            ja:'日焼け止め',            vi:'Kem chống nắng',           th:'ครีมกันแดด',               'zh-CN':'防晒霜',            'zh-TW':'防曬乳',            en:'Sunscreen' },
        '스킨케어 기초':      { ko:'스킨케어 기초',      ja:'基礎化粧品',            vi:'Dưỡng da cơ bản',          th:'ผลิตภัณฑ์บำรุงผิว',        'zh-CN':'基础护肤品',         'zh-TW':'基礎保養品',         en:'Basic Skincare' },
        '비상약':            { ko:'비상약',            ja:'常備薬',               vi:'Thuốc dự phòng',           th:'ยาฉุกเฉิน',                'zh-CN':'急救药品',          'zh-TW':'急救藥品',          en:'Emergency Medicine' },
        '소화제':            { ko:'소화제',            ja:'胃腸薬',               vi:'Thuốc tiêu hóa',           th:'ยาช่วยย่อย',               'zh-CN':'消化药',            'zh-TW':'消化藥',            en:'Digestive Medicine' },
        '지사제':            { ko:'지사제',            ja:'下痢止め',             vi:'Thuốc tiêu chảy',          th:'ยาแก้ท้องเสีย',            'zh-CN':'止泻药',            'zh-TW':'止瀉藥',            en:'Anti-diarrheal' },
        '모기 기피제':        { ko:'모기 기피제',        ja:'虫除けスプレー',        vi:'Thuốc chống muỗi',         th:'สเปรย์กันยุง',             'zh-CN':'驱蚊剂',            'zh-TW':'防蚊液',            en:'Mosquito Repellent' },
        '마스크':            { ko:'마스크',            ja:'マスク',               vi:'Khẩu trang',               th:'หน้ากากอนามัย',            'zh-CN':'口罩',             'zh-TW':'口罩',             en:'Mask' },
        '여행용 캐리어/가방':  { ko:'여행용 캐리어/가방', ja:'スーツケース/バッグ',  vi:'Va li/Túi du lịch',        th:'กระเป๋าเดินทาง',           'zh-CN':'旅行箱/包',         'zh-TW':'旅行箱/包',         en:'Luggage/Bag' },
        '압축 파우치':        { ko:'압축 파우치',        ja:'圧縮ポーチ',            vi:'Túi nén đồ',               th:'ถุงอัดสุญญากาศ',            'zh-CN':'压缩收纳袋',         'zh-TW':'壓縮收納袋',         en:'Compression Pouch' },
        '자물쇠':            { ko:'자물쇠',            ja:'南京錠',               vi:'Ổ khóa',                   th:'กุญแจล็อก',               'zh-CN':'锁',               'zh-TW':'鎖',               en:'Padlock' },
        '목 베개':           { ko:'목 베개',           ja:'ネックピロー',          vi:'Gối cổ',                   th:'หมอนรองคอ',               'zh-CN':'颈枕',             'zh-TW':'頸枕',             en:'Neck Pillow' },
        '안대 & 귀마개':      { ko:'안대 & 귀마개',      ja:'アイマスク & 耳栓',    vi:'Mặt nạ ngủ & Nút tai',    th:'ที่ปิดตาและที่อุดหู',       'zh-CN':'眼罩 & 耳塞',       'zh-TW':'眼罩 & 耳塞',       en:'Eye Mask & Earplugs' },
        '우산/우비':          { ko:'우산/우비',          ja:'傘/レインコート',       vi:'Ô/Áo mưa',                 th:'ร่ม/เสื้อกันฝน',           'zh-CN':'雨伞/雨衣',         'zh-TW':'雨傘/雨衣',         en:'Umbrella/Raincoat' }
    };

    const ALLERGY_OPTION_I18N = {
        shrimp:    { ko:'새우',       ja:'エビ',        vi:'Tôm',             th:'กุ้ง',          'zh-CN':'虾',      'zh-TW':'蝦',      en:'Shrimp' },
        crab:      { ko:'게',         ja:'カニ',        vi:'Cua',             th:'ปู',             'zh-CN':'螃蟹',    'zh-TW':'螃蟹',    en:'Crab' },
        shellfish: { ko:'조개/갑각류', ja:'貝/甲殻類',   vi:'Động vật có vỏ',  th:'หอย/สัตว์เปลือก','zh-CN':'贝类/甲壳类','zh-TW':'貝類/甲殼類', en:'Shellfish' },
        peanut:    { ko:'땅콩',       ja:'ピーナッツ',  vi:'Đậu phộng',       th:'ถั่วลิสง',       'zh-CN':'花生',    'zh-TW':'花生',    en:'Peanut' },
        egg:       { ko:'계란',       ja:'卵',          vi:'Trứng',           th:'ไข่',            'zh-CN':'鸡蛋',    'zh-TW':'雞蛋',    en:'Egg' },
        milk:      { ko:'우유',       ja:'牛乳',        vi:'Sữa',             th:'นม',             'zh-CN':'牛奶',    'zh-TW':'牛奶',    en:'Milk' },
        wheat:     { ko:'밀',         ja:'小麦',        vi:'Lúa mì',          th:'แป้งสาลี',       'zh-CN':'小麦',    'zh-TW':'小麥',    en:'Wheat' },
        buckwheat: { ko:'메밀',       ja:'そば',        vi:'Kiều mạch',       th:'บัควีท',         'zh-CN':'荞麦',    'zh-TW':'蕎麥',    en:'Buckwheat' },
    };

    const ALLERGY_VOCAB = {
        shrimp:    {ko:'새우',    ja:'えび',       vi:'tôm',                 th:'กุ้ง',          'zh-TW':'蝦',       'zh-CN':'虾',  en:'shrimp'},
        crab:      {ko:'게',      ja:'かに',        vi:'cua',                 th:'ปู',             'zh-TW':'蟹',       'zh-CN':'蟹',  en:'crab'},
        shellfish: {ko:'조개/갑각류',ja:'貝類・甲殻類',vi:'động vật có vỏ',   th:'หอยและสัตว์เปลือกแข็ง','zh-TW':'貝類甲殼類','zh-CN':'贝类甲壳类',en:'shellfish'},
        peanut:    {ko:'땅콩',    ja:'ピーナッツ',  vi:'đậu phộng',           th:'ถั่วลิสง',       'zh-TW':'花生',     'zh-CN':'花生',en:'peanut'},
        egg:       {ko:'계란',    ja:'卵',          vi:'trứng',               th:'ไข่',            'zh-TW':'雞蛋',     'zh-CN':'鸡蛋',en:'egg'},
        milk:      {ko:'우유',    ja:'牛乳',         vi:'sữa',                 th:'นม',             'zh-TW':'牛奶',     'zh-CN':'牛奶',en:'milk'},
        wheat:     {ko:'밀',      ja:'小麦',         vi:'lúa mì',              th:'แป้งสาลี',       'zh-TW':'小麥',     'zh-CN':'小麦',en:'wheat'},
        buckwheat: {ko:'메밀',    ja:'そば',         vi:'kiều mạch',           th:'บัควีท',         'zh-TW':'蕎麥',     'zh-CN':'荞麦',en:'buckwheat'}
    };

    const LANG_NAMES = {
        ko:'한국어', ja:'日本語', vi:'Tiếng Việt', th:'ไทย', 'zh-CN':'简体中文', 'zh-TW':'繁體中文', en:'English'
    };

    const LANG_TO_CURRENCY = {
        ko:'KRW', ja:'JPY', vi:'VND', th:'THB', 'zh-CN':'TWD', 'zh-TW':'TWD', en:'USD'
    };

    


    const OUTFIT_I18N = {
        heavy:  { ko:'두꺼운 패딩·코트', ja:'厚手コート必須', vi:'Áo phao dày', th:'เสื้อกันหนาวหนา', 'zh-CN':'羽绒服', 'zh-TW':'羽絨服', en:'Heavy coat' },
        mid:    { ko:'가벼운 재킷·레이어링', ja:'ジャケット・重ね着', vi:'Áo khoác nhẹ', th:'เสื้อแจ็คเก็ต', 'zh-CN':'夹克叠穿', 'zh-TW':'夾克疊穿', en:'Light jacket' },
        light:  { ko:'긴팔·얇은 겉옷', ja:'長袖・薄手アウター', vi:'Áo dài tay', th:'เสื้อแขนยาว', 'zh-CN':'长袖薄外套', 'zh-TW':'長袖薄外套', en:'Long sleeves' },
        summer: { ko:'반팔·반바지 가능', ja:'半袖・半ズボンOK', vi:'Áo ngắn tay', th:'เสื้อแขนสั้น', 'zh-CN':'短袖短裤', 'zh-TW':'短袖短褲', en:'T-shirt & shorts' },
    };

    const WEATHER_I18N = {
        ko: { '맑음':'맑음','흐림':'흐림','비':'비','이슬비':'이슬비','뇌우':'뇌우','눈':'눈','안개':'안개','연무':'연무','실안개':'실안개','먼지':'먼지','짙은 안개':'짙은 안개','황사':'황사','화산재':'화산재','돌풍':'돌풍','토네이도':'토네이도' },
        ja: { '맑음':'晴れ','흐림':'曇り','비':'雨','이슬비':'霧雨','뇌우':'雷雨','눈':'雪','안개':'霧','연무':'煙霧','실안개':'薄霧','먼지':'砂塵','짙은 안개':'濃霧','황사':'黄砂','화산재':'火山灰','돌풍':'スコール','토네이도':'竜巻' },
        vi: { '맑음':'Trời quang','흐림':'Nhiều mây','비':'Mưa','이슬비':'Mưa phùn','뇌우':'Giông bão','눈':'Tuyết','안개':'Sương mù','연무':'Khói mù','실안개':'Sương nhẹ','먼지':'Bụi','짙은 안개':'Sương dày','황사':'Bão cát','화산재':'Tro núi lửa','돌풍':'Gió giật','토네이도':'Lốc xoáy' },
        th: { '맑음':'แดดจัด','흐림':'มีเมฆ','비':'ฝนตก','이슬비':'ฝนปรอย','뇌우':'พายุฝนฟ้าคะนอง','눈':'หิมะ','안개':'หมอก','연무':'ควันหมอก','실안개':'หมอกบาง','먼지':'ฝุ่น','짙은 안개':'หมอกหนา','황사':'พายุทราย','화산재':'เถ้าภูเขาไฟ','돌풍':'พายุฝนกระโชก','토네이도':'พายุทอร์นาโด' },
        'zh-CN': { '맑음':'晴天','흐림':'多云','비':'下雨','이슬비':'毛毛雨','뇌우':'雷暴','눈':'下雪','안개':'雾','연무':'烟雾','실안개':'薄雾','먼지':'沙尘','짙은 안개':'浓雾','황사':'沙尘暴','화산재':'火山灰','돌풍':'飑','토네이도':'龙卷风' },
        'zh-TW': { '맑음':'晴天','흐림':'多雲','비':'下雨','이슬비':'毛毛雨','뇌우':'雷暴','눈':'下雪','안개':'霧','연무':'煙霧','실안개':'薄霧','먼지':'沙塵','짙은 안개':'濃霧','황사':'沙塵暴','화산재':'火山灰','돌풍':'颮','토네이도':'龍捲風' },
        en: { '맑음':'Clear','흐림':'Cloudy','비':'Rain','이슬비':'Drizzle','뇌우':'Thunderstorm','눈':'Snow','안개':'Fog','연무':'Smoke','실안개':'Haze','먼지':'Dust','짙은 안개':'Dense Fog','황사':'Sand','화산재':'Ash','돌풍':'Squall','토네이도':'Tornado' }
    };

    const CURRENCY_UNIT = {
        JPY: 100,
        VND: 100,
    };