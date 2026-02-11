# data.py

# --- 국가별 공통 회화 (카테고리당 5~6문장 풀 세트) ---
COMMON_PHRASES = {
    "japan": {
        "✈️ 공항/입국": [
            {"en": "Sightseeing", "local": "観光です (Kanko-desu)", "ko": "관광 목적으로 왔습니다."},
            {"en": "Where is the exit?", "local": "出口はどこですか？", "ko": "출구가 어디인가요?"},
            {"en": "My bag is missing", "local": "荷物が出てきません", "ko": "제 짐이 나오지 않아요."},
            {"en": "Where is the SIM shop?", "local": "SIMカードはどこで買えますか？", "ko": "유심 카드는 어디서 사나요?"}
        ],
        "🏨 숙소": [
            {"en": "Check-in, please", "local": "チェックインお願いします", "ko": "체크인 부탁합니다."},
            {"en": "Leave my luggage?", "local": "荷物を預けられますか？", "ko": "짐을 맡길 수 있을까요?"},
            {"en": "WiFi password?", "local": "Wi-Fiのパスワードは？", "ko": "와이파이 비번 알려주세요."},
            {"en": "Need more towels", "local": "タオルを追加してください", "ko": "수건 더 주세요."},
            {"en": "Room is cold", "local": "部屋が寒いです", "ko": "방이 추워요."}
        ],
        "🍴 식당": [
            {"en": "Table for two", "local": "二人です (Futari-desu)", "ko": "두 명입니다."},
            {"en": "No pork, please", "local": "豚肉抜きでお願いします", "ko": "돼지고기는 빼주세요."},
            {"en": "Check, please", "local": "お会計お願いします", "ko": "계산서 주세요."},
            {"en": "Recommend menu?", "local": "おすすめはありますか？", "ko": "추천 메뉴 있나요?"},
            {"en": "Is this spicy?", "local": "これは辛いですか？", "ko": "이거 매운가요?"},
            {"en": "Water, please", "local": "お水お願いします", "ko": "물 좀 주세요."}
        ],
        "🚌 교통": [
            {"en": "Where is the station?", "local": "駅はどこですか？", "ko": "역이 어디인가요?"},
            {"en": "Charge IC card", "local": "チャージしたいです", "ko": "교통카드 충전하고 싶어요."},
            {"en": "To the city center", "local": "市内までお願いします", "ko": "시내까지 부탁합니다."},
            {"en": "Exit number?", "local": "出口は何番ですか？", "ko": "몇 번 출구인가요?"},
            {"en": "Is this the right platform?", "local": "このホームで合っていますか？", "ko": "이 승강장이 맞나요?"}
        ],
        "🛍️ 쇼핑": [
            {"en": "How much?", "local": "いくらですか？", "ko": "얼마예요?"},
            {"en": "Tax-free?", "local": "免税できますか？", "ko": "면세 되나요?"},
            {"en": "Try this on?", "local": "試着してもいいですか？", "ko": "입어봐도 될까요?"},
            {"en": "New one, please", "local": "新しいのはありますか？", "ko": "새 제품 있나요?"},
            {"en": "Bag, please", "local": "袋お願いします", "ko": "봉투 주세요."}
        ],
        "🚨 긴급": [
            {"en": "Help me!", "local": "助けてください！", "ko": "도와주세요!"},
            {"en": "Lost my wallet", "local": "財布をなくしました", "ko": "지갑을 잃어버렸어요."},
            {"en": "Where is pharmacy?", "local": "薬局はどこですか？", "ko": "약국이 어디인가요?"},
            {"en": "Hospital, please", "local": "病院へ行きたいです", "ko": "병원에 가고 싶어요."},
            {"en": "Call the police", "local": "警察を呼んでください", "ko": "경찰을 불러주세요."}
        ]
    },
    "vietnam": {
        "✈️ 공항/입국": [
            {"en": "Travel", "local": "Đi du lịch", "ko": "여행하러 왔습니다."},
            {"en": "Where is the exit?", "local": "Lối ra ở đâu?", "ko": "출구가 어디인가요?"},
            {"en": "Grab pick-up point?", "local": "Chỗ đón Grab ở đâu?", "ko": "그랩 타는 곳이 어디예요?"},
            {"en": "My bag is broken", "local": "Hành lý của tôi bị hỏng", "ko": "제 가방이 파손되었어요."},
            {"en": "Currency exchange?", "local": "Chỗ đổi tiền ở đâu?", "ko": "환전소가 어디인가요?"}
        ],
        "🏨 숙소": [
            {"en": "Check-in", "local": "Làm ơn nhận phòng", "ko": "체크인 부탁합니다."},
            {"en": "Clean the room", "local": "Làm ơn dọn phòng", "ko": "방 청소 부탁합니다."},
            {"en": "Need water", "local": "Cho tôi thêm nước", "ko": "물 좀 더 주세요."},
            {"en": "Hot water error", "local": "Không có nước nóng", "ko": "온수가 안 나와요."},
            {"en": "Call a taxi", "local": "Làm ơn gọi taxi", "ko": "택시 불러주세요."}
        ],
        "🍴 식당": [
            {"en": "No cilantro", "local": "Không cho rau mùi", "ko": "고수 빼주세요."},
            {"en": "Check, please", "local": "Tính tiền nhé", "ko": "계산서 주세요."},
            {"en": "Menu, please", "local": "Cho tôi xem thực đơn", "ko": "메뉴판 보여주세요."},
            {"en": "One more beer", "local": "Cho một bia nữa", "ko": "맥주 하나 더 주세요."},
            {"en": "Not spicy", "local": "Không cay", "ko": "안 맵게 해주세요."},
            {"en": "Give me some ice", "local": "Cho tôi thêm đá", "ko": "얼음 좀 주세요."}
        ],
        "🚌 교통": [
            {"en": "Turn on meter", "local": "Làm ơn bật đồng hồ", "ko": "미터기 켜주세요."},
            {"en": "Go to address", "local": "Đi đến địa chỉ này", "ko": "이 주소로 가주세요."},
            {"en": "Stop here", "local": "Dừng lại ở đây", "ko": "여기서 세워주세요."},
            {"en": "How much?", "local": "Bao nhiêu tiền?", "ko": "얼마인가요?"},
            {"en": "Drive slowly", "local": "Làm ơn lái chậm", "ko": "천천히 가주세요."}
        ],
        "🛍️ 쇼핑": [
            {"en": "How much?", "local": "Cái này bao nhiêu?", "ko": "이거 얼마예요?"},
            {"en": "Discount?", "local": "Giảm giá được không?", "ko": "깎아주실 수 있나요?"},
            {"en": "I'll take this", "local": "Tôi sẽ lấy cái này", "ko": "이걸로 살게요."},
            {"en": "Too expensive", "local": "Đắt quá", "ko": "너무 비싸요."},
            {"en": "Any other colors?", "local": "Có màu khác không?", "ko": "다른 색상 있나요?"}
        ],
        "🚨 긴급": [
            {"en": "Help!", "local": "Cứu với!", "ko": "도와주세요!"},
            {"en": "Hospital?", "local": "Bệnh viện ở đâu?", "ko": "병원 어디예요?"},
            {"en": "Lost my phone", "local": "Tôi bị mất điện thoại", "ko": "폰을 잃어버렸어요."},
            {"en": "Pharmacy?", "local": "Tiệm thuốc ở đâu?", "ko": "약국이 어디예요?"},
            {"en": "Call doctor", "local": "Gọi bác sĩ", "ko": "의사를 불러주세요."}
        ]
    },
    "thailand": {
        "✈️ 공항/입국": [
            {"en": "Sightseeing", "local": "Ma tiao krub/ka", "ko": "관광하러 왔습니다."},
            {"en": "Hotel stay", "local": "Puk tee rong-ram", "ko": "호텔에 머뭅니다."},
            {"en": "Taxi stand?", "local": "Taxi yoo tee nai?", "ko": "택시 승강장이 어디예요?"},
            {"en": "VAT Refund?", "local": "VAT Refund dai mai?", "ko": "택스 리펀 되나요?"},
            {"en": "Need SIM", "local": "Kor SIM card krub/ka", "ko": "심카드가 필요해요."}
        ],
        "🍴 식당": [
            {"en": "Not spicy", "local": "Mai phed krub/ka", "ko": "안 맵게 해주세요."},
            {"en": "Check, please", "local": "Gep tang duay", "ko": "계산서 주세요."},
            {"en": "No cilantro", "local": "Mai sai pak-chee", "ko": "고수 넣지 마세요."},
            {"en": "Water, please", "local": "Kor nam plao", "ko": "물 좀 주세요."},
            {"en": "Recommend?", "local": "Mee arai a-roy?", "ko": "추천 메뉴 뭐예요?"},
            {"en": "Ice, please", "local": "Kor nam-keng", "ko": "얼음 좀 주세요."}
        ],
        "🚌 교통": [
            {"en": "Go to...", "local": "Pai tee...", "ko": "...에 가주세요."},
            {"en": "How much?", "local": "Tao rai krub/ka?", "ko": "얼마예요?"},
            {"en": "Use meter", "local": "Poed meter duay", "ko": "미터기 켜주세요."},
            {"en": "Turn left/right", "local": "Liao sai / Liao kwa", "ko": "좌회전 / 우회전"},
            {"en": "Stop here", "local": "Jod tee nee", "ko": "여기서 내려주세요."}
        ],
        "🏨 숙소": [
            {"en": "Check-in", "local": "Chek-in krub/ka", "ko": "체크인 할게요."},
            {"en": "Breakfast time?", "local": "A-han chao kee mong?", "ko": "조식 몇 시예요?"},
            {"en": "Late check-out?", "local": "Late check-out dai mai?", "ko": "체크아웃 연장 되나요?"},
            {"en": "Need towel", "local": "Kor pa-ched-tua perm", "ko": "수건 더 필요해요."},
            {"en": "Call taxi", "local": "Riak taxi krub/ka", "ko": "택시 불러주세요."}
        ],
        "🛍️ 쇼핑": [
            {"en": "Discount?", "local": "Lot noi dai mai?", "ko": "깎아주실 수 있나요?"},
            {"en": "Too expensive", "local": "Paeng mak!", "ko": "너무 비싸요!"},
            {"en": "I'll take it", "local": "Aoอันnee", "ko": "이거 살게요."},
            {"en": "Try it?", "local": "Long dai mai?", "ko": "입어봐도 되나요?"},
            {"en": "Any colors?", "local": "Mee si eun mai?", "ko": "다른 색깔 있나요?"}
        ],
        "🚨 긴급": [
            {"en": "Help!", "local": "Chuay duay!", "ko": "도와주세요!"},
            {"en": "Pharmacy?", "local": "Ran-kai-ya yoo nai?", "ko": "약국이 어디예요?"},
            {"en": "Hospital", "local": "Rong-pa-ya-ban", "ko": "병원에 가야 해요."},
            {"en": "I am sick", "local": "Chun mai sabai", "ko": "몸이 아파요."},
            {"en": "Lost passport", "local": "Passport hai", "ko": "여권을 잃어버렸어요."}
        ]
    },
    "taiwan": {
        "✈️ 공항/입국": [
            {"en": "Travel", "local": "旅遊 (Lǚyóu)", "ko": "여행하러 왔습니다."},
            {"en": "Where is MRT?", "local": "捷運站在哪裡?", "ko": "지하철역이 어디인가요?"},
            {"en": "SIM card?", "local": "SIM卡在哪裡買?", "ko": "유심 카드 어디서 사나요?"},
            {"en": "Baggage claim?", "local": "行李領取處?", "ko": "짐 찾는 곳이 어디죠?"}
        ],
        "🏨 숙소": [
            {"en": "Check-in", "local": "辦理入住 (Bànlǐ rùzhù)", "ko": "체크인 부탁합니다."},
            {"en": "Keep luggage?", "local": "寄存行李?", "ko": "짐을 맡길 수 있나요?"},
            {"en": "WiFi pass?", "local": "WiFi 密碼?", "ko": "와이파이 비번이 뭐죠?"},
            {"en": "Need towel", "local": "我需要毛巾", "ko": "수건이 필요합니다."},
            {"en": "Check-out", "local": "退房 (Tuìfáng)", "ko": "체크아웃 할게요."}
        ],
        "🍴 식당": [
            {"en": "Table for 2", "local": "兩位 (Liǎng wèi)", "ko": "두 명입니다."},
            {"en": "Check, please", "local": "買單 (Mǎidān)", "ko": "계산할게요."},
            {"en": "No cilantro", "local": "不要香菜 (Bùyào xiāngcài)", "ko": "고수 빼주세요."},
            {"en": "Take out", "local": "外帶 (Wàidài)", "ko": "포장할게요."},
            {"en": "Recommend?", "local": "推薦什麼?", "ko": "추천 메뉴 있나요?"}
        ],
        "🚌 교통": [
            {"en": "Where is bus?", "local": "公車站在哪?", "ko": "버스 정류장 어디예요?"},
            {"en": "To this place", "local": "去這裡 (Qù zhèlǐ)", "ko": "이곳으로 가주세요."},
            {"en": "Stop here", "local": "這裡停車", "ko": "여기 세워주세요."},
            {"en": "EasyCard charge", "local": "悠遊卡加值", "ko": "이지카드 충전해 주세요."},
            {"en": "Exit number?", "local": "出口是幾號?", "ko": "출구가 몇 번이죠?"}
        ],
        "🛍️ 쇼핑": [
            {"en": "How much?", "local": "多少錢? (Duōshǎo qián?)", "ko": "얼마인가요?"},
            {"en": "Discount?", "local": "打折嗎?", "ko": "할인 되나요?"},
            {"en": "Receipt, please", "local": "我要發票", "ko": "영수증 주세요."},
            {"en": "Too expensive", "local": "太貴了 (Tài guìle)", "ko": "너무 비싸요."},
            {"en": "Can I try?", "local": "可以試試嗎?", "ko": "입어봐도 되나요?"}
        ],
        "🚨 긴급": [
            {"en": "Help!", "local": "救命! (Jiùmìng!)", "ko": "도와주세요!"},
            {"en": "Hospital?", "local": "醫院在哪?", "ko": "병원이 어디인가요?"},
            {"en": "Lost passport", "local": "護照丟了", "ko": "여권을 잃어버렸어요."},
            {"en": "Pharmacy", "local": "藥局 (Yàojú)", "ko": "약국이 어디인가요?"},
            {"en": "I need help", "local": "請幫幫我", "ko": "좀 도와주세요."}
        ]
    },
    "usa": {
        "✈️ 공항/입국": [
            {"en": "Sightseeing", "local": "Sightseeing", "ko": "관광하러 왔습니다."},
            {"en": "Where is shuttle?", "local": "Where is the shuttle?", "ko": "셔틀 어디서 타나요?"},
            {"en": "My bag is missing", "local": "My bag is missing", "ko": "짐이 도착하지 않았어요."},
            {"en": "Customs?", "local": "Where is customs?", "ko": "세관이 어디인가요?"}
        ],
        "🏨 숙소": [
            {"en": "Check-in", "local": "Check-in, please", "ko": "체크인 부탁합니다."},
            {"en": "WiFi pass?", "local": "WiFi password?", "ko": "와이파이 비번 뭐죠?"},
            {"en": "Extra towel?", "local": "Extra towel, please", "ko": "수건 더 주세요."},
            {"en": "Late check-out?", "local": "Late check-out possible?", "ko": "체크아웃 늦게 되나요?"},
            {"en": "Room is noisy", "local": "Room is too noisy", "ko": "방이 너무 시끄러워요."}
        ],
        "🍴 식당": [
            {"en": "Table for two", "local": "Table for two", "ko": "두 명입니다."},
            {"en": "Check, please", "local": "Check, please", "ko": "계산서 주세요."},
            {"en": "To go, please", "local": "To go, please", "ko": "포장해 주세요."},
            {"en": "Split bill?", "local": "Can we split the bill?", "ko": "나눠서 계산할게요."},
            {"en": "Recommend?", "local": "What do you recommend?", "ko": "추천 메뉴가 뭐죠?"},
            {"en": "No ice", "local": "No ice, please", "ko": "얼음 빼주세요."}
        ],
        "🚌 교통": [
            {"en": "Where is subway?", "local": "Where is the subway?", "ko": "지하철역 어디예요?"},
            {"en": "Go to this address", "local": "Go to this address", "ko": "이 주소로 가주세요."},
            {"en": "Stop here", "local": "Stop here, please", "ko": "여기 세워주세요."},
            {"en": "Subway map?", "local": "Subway map, please", "ko": "노선도 있나요?"},
            {"en": "How much?", "local": "How much is the fare?", "ko": "요금이 얼마인가요?"}
        ],
        "🛍️ 쇼핑": [
            {"en": "How much is this?", "local": "How much is this?", "ko": "이거 얼마인가요?"},
            {"en": "Fitting room?", "local": "Where is the fitting room?", "ko": "피팅룸 어디예요?"},
            {"en": "Return this?", "local": "Can I return this?", "ko": "환불 가능한가요?"},
            {"en": "Apple Pay?", "local": "Do you take Apple Pay?", "ko": "애플페이 되나요?"},
            {"en": "Just looking", "local": "I'm just looking", "ko": "그냥 구경 중이에요."}
        ],
        "🚨 긴급": [
            {"en": "Help!", "local": "Help!", "ko": "도와주세요!"},
            {"en": "Call 911", "local": "Call 911!", "ko": "911을 불러주세요."},
            {"en": "My phone is stolen", "local": "My phone was stolen", "ko": "폰을 도둑맞았어요."},
            {"en": "Where is hospital?", "local": "Where is the hospital?", "ko": "병원이 어디인가요?"},
            {"en": "I'm lost", "local": "I am lost", "ko": "길을 잃었어요."}
        ]
    },
    "korea": {
        "✈️ Airport/Immigration": [
            {"en": "Travel", "local": "여행하러 왔습니다. (Yeo-haeng-ha-reo wat-seum-ni-da)", "ko": "여행하러 왔습니다."}, 
            {"en": "Where is the exit?", "local": "출구가 어디인가요? (Chul-gu-ga eo-di-in-ga-yo?)", "ko": "출구가 어디인가요?"},
            {"en": "Arex/Taxi stop?", "local": "공항철도/택시 타는 곳이 어디예요? (Gong-hang-cheol-do/Taxi ta-neun got eo-di-ye-yo?)", "ko": "철도/택시 타는 곳이 어디예요?"},
            {"en": "Currency exchange?", "local": "환전소가 어디인가요? (Hwan-jeon-so-ga eo-di-in-ga-yo?)", "ko": "환전소가 어디인가요?"},
            {"en": "Where is the SIM card shop?", "local": "심카드 어디서 사요? (SIM card eo-di-seo sa-yo?)", "ko": "심카드 어디서 사요?"}
        ],
        "🏨 Accommodation": [
            {"en": "Check-in, please", "local": "체크인 부탁합니다. (Check-in bu-tak-ham-ni-da)", "ko": "체크인 부탁합니다."},
            {"en": "Clean the room", "local": "방 청소 부탁합니다. (Bang cheong-so bu-tak-ham-ni-da)", "ko": "방 청소 부탁합니다."},
            {"en": "Need more towels", "local": "수건 더 주세요. (Su-geon deo ju-se-yo)", "ko": "수건 더 주세요."},
            {"en": "Wi-Fi password?", "local": "와이파이 비밀번호가 뭐예요? (Wi-Fi bi-mil-beon-ho-ga mwo-ye-yo?)", "ko": "와이파이 비밀번호가 뭐예요?"},
            {"en": "Keep my luggage", "local": "짐 좀 맡겨주세요. (Jim jom mat-gyeo-ju-se-yo)", "ko": "짐 좀 맡겨주세요."}
        ],
        "🍴 Restaurant": [
            {"en": "Is it spicy?", "local": "매워요? (Mae-wo-yo?)", "ko": "매워요?"},
            {"en": "Check, please", "local": "계산서 주세요. (Gye-san-seo ju-se-yo)", "ko": "계산서 주세요."},
            {"en": "Menu, please", "local": "메뉴판 보여주세요. (Me-nyu-pan bo-yeo-ju-se-yo)", "ko": "메뉴판 보여주세요."},
            {"en": "One more beer", "local": "맥주 하나 더 주세요. (Maek-ju ha-na deo ju-se-yo)", "ko": "맥주 하나 더 주세요."},
            {"en": "No spicy, please", "local": "안 맵게 해주세요. (An mae-pge hae-ju-se-yo)", "ko": "안 맵게 해주세요."},
            {"en": "Water, please", "local": "물 좀 주세요. (Mul jom ju-se-yo)", "ko": "물 좀 주세요."}
        ],
        "🚌 Transport": [
            {"en": "Go to this address", "local": "이 주소로 가주세요. (I ju-so-ro ga-ju-se-yo)", "ko": "이 주소로 가주세요."},
            {"en": "Stop here", "local": "여기서 세워주세요. (Yeo-gi-seo se-wo-ju-se-yo)", "ko": "여기서 세워주세요."},
            {"en": "Where is the subway station?", "local": "지하철역이 어디예요? (Ji-ha-cheol-yeok-i eo-di-ye-yo?)", "ko": "지하철역이 어디예요?"},
            {"en": "T-money card, please", "local": "교통카드 주세요. (Gyo-tong card ju-se-yo)", "ko": "교통카드 주세요."}
        ],
        "🛍️ Shopping": [
            {"en": "How much is this?", "local": "이거 얼마예요? (I-geo eol-ma-ye-yo?)", "ko": "이거 얼마예요?"},
            {"en": "Can I get a discount?", "local": "깎아주세요. (Kkak-a-ju-se-yo)", "ko": "깎아주세요."},
            {"en": "I'll take this", "local": "이걸로 할게요. (I-geol-lo hal-ge-yo)", "ko": "이걸로 살게요."},
            {"en": "Tax free?", "local": "택스 프리 돼요? (Tax-free dwae-yo?)", "ko": "면세 되나요?"},
            {"en": "Give me a bag", "local": "봉투 주세요. (Bong-tu ju-se-yo)", "ko": "봉투 주세요."}
        ],
        "🚨 Emergency": [
            {"en": "Help me!", "local": "도와주세요! (Do-wa-ju-se-yo!)", "ko": "도와주세요!"},
            {"en": "Where is the hospital?", "local": "병원이 어디예요? (Byeong-won-i eo-di-ye-yo?)", "ko": "병원 어디예요?"},
            {"en": "Lost my passport", "local": "여권을 잃어버렸어요. (Yeo-gwon-eul il-eo-beo-ryeo-sseo-yo)", "ko": "여권을 잃어버렸어요."},
            {"en": "Where is the pharmacy?", "local": "약국이 어디예요? (Yak-guk-i eo-di-ye-yo?)", "ko": "약국이 어디예요?"},
            {"en": "Police, please", "local": "경찰 불러주세요. (Gyeong-chal bul-leo-ju-se-yo)", "ko": "경찰 불러주세요."}
        ]
    }
}

# [2] 국가/도시 데이터 (앱 링크 + 쇼핑 리스트 통합본)
COUNTRIES = {
    "tokyo": {
        "name": "일본 (도쿄)", "currency": "JPY", "city": "Tokyo",
        "apps": [
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"},
            {"name": "Visit Japan Web", "desc": "빠른 입국 심사(웹)", "link": "https://www.vjw.digital.go.jp/"},
            {"name": "파파고", "desc": "이미지 번역 및 통역", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["나리타 익스프레스 예약 권장", "편의점 ATM 수수료 저렴"],
        "warnings": ["지하철 내 통화 금지", "길거리 흡연 엄금"],
        "phrases": COMMON_PHRASES["japan"],
        "shopping": ["퍼펙트휩", "돈키호테 산토리 위스키", "도쿄 바나나", "샤론파스", "닷사이 23 사케", "히메이론 안약"]
    },
    "osaka": {
        "name": "일본 (오사카)", "currency": "JPY", "city": "Osaka",
        "apps": [
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"},
            {"name": "오사카 e-패스", "desc": "관광지 입장 및 교통", "link": "https://www.e-pass.osaka-info.jp/kr/?utm_source=osp.osaka-info&utm_medium=referral&utm_campaign=shu_link"},
            {"name": "파파고", "desc": "이미지 번역 및 통역", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["주유패스로 관광지 무료입장", "도톤보리 크루즈 예약 필수"],
        "warnings": ["에스컬레이터 오른쪽 서기", "난바역 출구 주의"],
        "phrases": COMMON_PHRASES["japan"],
        "shopping": ["리쿠로오지상 치즈케이크", "한큐백화점 손수건", "551호라이 만두", "오사카 한정 키티 인형"]
    },
    "fukuoka": {
        "name": "일본 (후쿠오카)", "currency": "JPY", "city": "Fukuoka",
        "apps": [
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"},
            {"name": "파파고", "desc": "이미지 번역 및 통역", "link": "https://play.google.com/store/apps/details?id=com.naver.labs.translator"}
        ],
        "tips": ["공항-시내 지하철 5분 거리", "야타이 정찰제 매장 추천"],
        "warnings": ["버스 뒤로 타서 정리권 뽑기", "산큐패스 지참 확인"],
        "phrases": COMMON_PHRASES["japan"],
        "shopping": ["명란 튜브", "병아리 빵(히요코)", "이치란 라멘 키트", "후쿠야 명란젓"]
    },
    "danang": {
        "name": "베트남 (다낭)", "currency": "VND", "city": "Da Nang",
        "apps": [
            {"name": "Grab", "desc": "동남아 필수 택시 호출", "link": "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["전기택시 Xanh SM 이용 권장", "한시장 2층 아오자이 흥정"],
        "warnings": ["얼음 배탈 주의", "수돗물 양치 금지"],
        "phrases": COMMON_PHRASES["vietnam"],
        "shopping": ["아치카페 코코넛커피", "라탄백", "탑젤리", "안(An) 과자", "G7 커피"]
    },
    "hochiminh": {
        "name": "베트남 (호치민)", "currency": "VND", "city": "Ho Chi Minh City",
        "apps": [
            {"name": "Grab", "desc": "동남아 필수 택시 호출", "link": "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["루프탑 바 야경 감상", "벤탄시장 흥정 필수"],
        "warnings": ["오토바이 날치기 매우 주의", "길 건널 때 천천히"],
        "phrases": COMMON_PHRASES["vietnam"],
        "shopping": ["마루 초콜릿", "콩카페 원두", "캐슈넛", "비나밋 건과일"]
    },
    "bangkok": {
        "name": "태국 (방콕)", "currency": "THB", "city": "Bangkok",
        "apps": [
            {"name": "Grab", "desc": "동남아 필수 택시 호출", "link": "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"},
            {"name": "Bolt", "desc": "그랩보다 저렴한 택시", "link": "https://play.google.com/store/apps/details?id=com.bolt.client"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["GLN QR 결제 최고 편리", "트래블월렛 사용 가능"],
        "warnings": ["왕실 비판 절대 금지", "사원 복장 규정 준수"],
        "phrases": COMMON_PHRASES["thailand"],
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
        "warnings": ["지하철 내 취식 금지", "무단횡단 벌금 주의"],
        "phrases": COMMON_PHRASES["taiwan"],
        "shopping": ["치아더 펑리수", "닥터큐 젤리", "금문고량주", "우드오르골", "미미 크래커"]
    },
    "hongkong": {
        "name": "홍콩", "currency": "HKD", "city": "Hong Kong",
        "apps": [
            {"name": "Octopus", "desc": "홍콩 필수 교통카드 앱", "link": "https://play.google.com/store/apps/details?id=com.octopuscards.nfc_reader"},
            {"name": "구글맵", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["옥토퍼스 카드로 모든 결제", "식당 합석 문화 기본"],
        "warnings": ["실내 흡연 엄격 금지", "봉투값 1불 지불"],
        "phrases": COMMON_PHRASES["usa"],
        "shopping": ["제니쿠키", "기화병가 팬더쿠키", "백화유", "립톤 밀크티"]
    },
    "nyc": {
        "name": "미국 (뉴욕)", "currency": "USD", "city": "New York",
        "apps": [
            {"name": "Uber", "desc": "필수 차량 호출 앱", "link": "https://play.google.com/store/apps/details?id=com.ubercab"},
            {"name": "Yelp", "desc": "현지인 맛집 리뷰", "link": "https://play.google.com/store/apps/details?id=com.yelp.android"},
            {"name": "Google Maps", "desc": "지도 및 길찾기", "link": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"}
        ],
        "tips": ["팁은 최소 18~20%", "지하철 OMNY(컨택리스) 결제"],
        "warnings": ["밤늦은 공원 방문 금지", "길거리 구걸 무시"],
        "phrases": COMMON_PHRASES["usa"],
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
        "tips": ["T-Money card is required for subways and buses", "Most stores are cashless (Card only)", "Use Naver Map instead of Google Maps for accuracy"],
        "warnings": ["Smoking is prohibited in most public areas", "Wait until people get off before boarding the subway", "Be careful of delivery motorcycles on the sidewalk"],
        "phrases": COMMON_PHRASES["korea"],
        "shopping": ["K-Beauty (Olive Young)", "HBAF Almonds", "Character Socks", "Soju / Makgeolli", "Korean Seaweed (Gim)"]
    }
}

CHECKLIST_DATA = {
    "필수": ["여권 & 사본", "항공권", "트래블 월렛/로그 카드", "e-SIM/도시락"],
    "전자/생활": ["보조배터리", "멀티 어댑터(돼지코)", "비상약", "개인 세면도구", "압축 파우치"]
}