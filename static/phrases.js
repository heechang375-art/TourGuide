// 도시별 회화 데이터. 화면에서 직접 사용하는 정본(single source of truth).
// 구조: PHRASES[국가][카테고리이모지] = [ {문장}, ... ]
// 각 문장은 ko(한국어)·local(현지표기) + 6개 언어 번역을 가진다.
const PHRASES = {
    "japan": {
        "✈️": [
            { "ko": "출구가 어디인가요?", "local": "出口はどこですか？", "en": "Where is the exit?", "ja": "出口はどこですか？", "vi": "Lối ra ở đâu?", "th": "ทางออกอยู่ที่ไหนครับ/ค่ะ?", "zh-CN": "出口在哪里？", "zh-TW": "出口在哪裡？" },
            { "ko": "제 짐이 나오지 않아요.", "local": "荷物が出てきません", "en": "My luggage hasn't come out.", "ja": "荷物が出てきません。", "vi": "Hành lý của tôi không ra.", "th": "กระเป๋าของฉันยังไม่ออกมา", "zh-CN": "我的行李没出来。", "zh-TW": "我的行李沒出來。" },
            { "ko": "유심 카드는 어디서 사나요?", "local": "SIMカードはどこで買えますか？", "en": "Where can I buy a SIM card?", "ja": "SIMカードはどこで買えますか？", "vi": "Mua SIM card ở đâu?", "th": "ซื้อซิมการ์ดได้ที่ไหน?", "zh-CN": "SIM卡在哪里买？", "zh-TW": "SIM卡在哪裡買？" },
            { "ko": "환전소가 어디인가요?", "local": "両替所はどこですか？", "en": "Where is the currency exchange?", "ja": "両替所はどこですか？", "vi": "Chỗ đổi tiền ở đâu?", "th": "ที่แลกเงินอยู่ที่ไหน?", "zh-CN": "换汇处在哪里？", "zh-TW": "換匯處在哪裡？" }
        ],
        "🏨": [
            { "ko": "체크인 부탁합니다.", "local": "チェックインお願いします", "en": "Check-in, please.", "ja": "チェックインお願いします。", "vi": "Nhờ làm thủ tục nhận phòng.", "th": "ขอเช็คอินครับ/ค่ะ", "zh-CN": "请帮我办理入住。", "zh-TW": "請幫我辦理入住。" },
            { "ko": "짐을 맡길 수 있을까요?", "local": "荷物を預けられますか？", "en": "Can I store my luggage?", "ja": "荷物を預けられますか？", "vi": "Tôi có thể gửi hành lý không?", "th": "ฝากกระเป๋าได้ไหมครับ/ค่ะ?", "zh-CN": "可以寄存行李吗？", "zh-TW": "可以寄存行李嗎？" },
            { "ko": "와이파이 비번 알려주세요.", "local": "Wi-Fiのパスワードは？", "en": "What's the Wi-Fi password?", "ja": "Wi-Fiのパスワードは？", "vi": "Cho tôi biết mật khẩu Wi-Fi.", "th": "ช่วยบอกรหัส Wi-Fi ด้วยครับ/ค่ะ", "zh-CN": "请告诉我Wi-Fi密码。", "zh-TW": "請告訴我Wi-Fi密碼。" },
            { "ko": "수건 더 주세요.", "local": "タオルを追加してください", "en": "Extra towel, please.", "ja": "タオルを追加してください。", "vi": "Cho thêm khăn tắm.", "th": "ขอผ้าเช็ดตัวเพิ่มครับ/ค่ะ", "zh-CN": "请再给我毛巾。", "zh-TW": "請再給我毛巾。" },
            { "ko": "방이 추워요.", "local": "部屋が寒いです", "en": "The room is cold.", "ja": "部屋が寒いです。", "vi": "Phòng lạnh quá.", "th": "ห้องหนาวครับ/ค่ะ", "zh-CN": "房间很冷。", "zh-TW": "房間很冷。" }
        ],
        "🍴": [
            { "ko": "두 명입니다.", "local": "二人です (Futari-desu)", "en": "Table for two.", "ja": "二人です。", "vi": "Hai người.", "th": "สองคนครับ/ค่ะ", "zh-CN": "两位。", "zh-TW": "兩位。" },
            { "ko": "돼지고기는 빼주세요.", "local": "豚肉抜きでお願いします", "en": "No pork, please.", "ja": "豚肉抜きでお願いします。", "vi": "Không cho thịt heo.", "th": "ไม่ใส่หมูครับ/ค่ะ", "zh-CN": "请不要放猪肉。", "zh-TW": "請不要放豬肉。" },
            { "ko": "계산서 주세요.", "local": "お会計お願いします", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền nhé.", "th": "เช็คบิลด้วยครับ/ค่ะ", "zh-CN": "请结账。", "zh-TW": "請結帳。" },
            { "ko": "추천 메뉴 있나요?", "local": "おすすめはありますか？", "en": "What do you recommend?", "ja": "おすすめはありますか？", "vi": "Có món nào ngon không?", "th": "มีเมนูแนะนำไหมครับ/ค่ะ?", "zh-CN": "有推荐的菜吗？", "zh-TW": "有推薦的菜嗎？" },
            { "ko": "이거 매운가요?", "local": "これは辛いですか？", "en": "Is this spicy?", "ja": "これは辛いですか？", "vi": "Món này có cay không?", "th": "อันนี้เผ็ดไหมครับ/ค่ะ?", "zh-CN": "这个辣吗？", "zh-TW": "這個辣嗎？" },
            { "ko": "물 좀 주세요.", "local": "お水お願いします", "en": "Water, please.", "ja": "お水お願いします。", "vi": "Cho tôi nước.", "th": "ขอน้ำด้วยครับ/ค่ะ", "zh-CN": "请给我水。", "zh-TW": "請給我水。" }
        ],
        "🚌": [
            { "ko": "역이 어디인가요?", "local": "駅はどこですか？", "en": "Where is the station?", "ja": "駅はどこですか？", "vi": "Ga tàu ở đâu?", "th": "สถานีอยู่ที่ไหนครับ/ค่ะ?", "zh-CN": "车站在哪里？", "zh-TW": "車站在哪裡？" },
            { "ko": "교통카드 충전하고 싶어요.", "local": "チャージしたいです", "en": "I'd like to charge my transit card.", "ja": "チャージしたいです。", "vi": "Tôi muốn nạp tiền thẻ giao thông.", "th": "อยากเติมเงินบัตรโดยสารครับ/ค่ะ", "zh-CN": "我想充值交通卡。", "zh-TW": "我想充值交通卡。" },
            { "ko": "시내까지 부탁합니다.", "local": "市内までお願いします", "en": "To downtown, please.", "ja": "市内までお願いします。", "vi": "Đến trung tâm thành phố.", "th": "ไปใจกลางเมืองครับ/ค่ะ", "zh-CN": "请送我到市区。", "zh-TW": "請送我到市區。" },
            { "ko": "몇 번 출구인가요?", "local": "出口は何番ですか？", "en": "Which exit number?", "ja": "出口は何番ですか？", "vi": "Cửa ra số mấy?", "th": "ทางออกหมายเลขอะไรครับ/ค่ะ?", "zh-CN": "几号出口？", "zh-TW": "幾號出口？" },
            { "ko": "다음 역이 어디예요?", "local": "次の駅はどこですか？", "en": "What is the next station?", "ja": "次の駅はどこですか？", "vi": "Ga tiếp theo là đâu?", "th": "สถานีถัดไปคือที่ไหนครับ/ค่ะ?", "zh-CN": "下一站是哪里？", "zh-TW": "下一站是哪裡？" }
        ],
        "🛍️": [
            { "ko": "얼마예요?", "local": "いくらですか？", "en": "How much is it?", "ja": "いくらですか？", "vi": "Bao nhiêu tiền?", "th": "เท่าไหร่ครับ/ค่ะ?", "zh-CN": "多少钱？", "zh-TW": "多少錢？" },
            { "ko": "면세 되나요?", "local": "免税できますか？", "en": "Is tax-free available?", "ja": "免税できますか？", "vi": "Được miễn thuế không?", "th": "ขอ tax free ได้ไหมครับ/ค่ะ?", "zh-CN": "可以免税吗？", "zh-TW": "可以免稅嗎？" },
            { "ko": "입어봐도 될까요?", "local": "試着してもいいですか？", "en": "Can I try it on?", "ja": "試着してもいいですか？", "vi": "Thử được không?", "th": "ลองได้ไหมครับ/ค่ะ?", "zh-CN": "可以试穿吗？", "zh-TW": "可以試穿嗎？" },
            { "ko": "포인트카드 없어요.", "local": "ポイントカードはないです", "en": "I don't have a point card.", "ja": "ポイントカードはないです。", "vi": "Tôi không có thẻ điểm.", "th": "ไม่มีบัตรสะสมแต้มครับ/ค่ะ", "zh-CN": "没有积分卡。", "zh-TW": "沒有積分卡。" },
            { "ko": "봉투 주세요.", "local": "袋お願いします", "en": "A bag, please.", "ja": "袋お願いします。", "vi": "Cho túi.", "th": "ขอถุงด้วยครับ/ค่ะ", "zh-CN": "请给我袋子。", "zh-TW": "請給我袋子。" },
            { "ko": "포장해 주세요.", "local": "包んでください", "en": "Please wrap it.", "ja": "包んでください。", "vi": "Gói lại cho tôi.", "th": "ห่อด้วยครับ/ค่ะ", "zh-CN": "请包装一下。", "zh-TW": "請包裝一下。" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "助けてください！", "en": "Help!", "ja": "助けてください！", "vi": "Cứu tôi với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "지갑을 잃어버렸어요.", "local": "財布をなくしました", "en": "I lost my wallet.", "ja": "財布をなくしました。", "vi": "Tôi bị mất ví.", "th": "ฉันทำกระเป๋าสตางค์หาย", "zh-CN": "我的钱包丢了。", "zh-TW": "我的錢包丟了。" },
            { "ko": "약국이 어디인가요?", "local": "薬局はどこですか？", "en": "Where is the pharmacy?", "ja": "薬局はどこですか？", "vi": "Tiệm thuốc ở đâu?", "th": "ร้านขายยาอยู่ที่ไหนครับ/ค่ะ?", "zh-CN": "药店在哪里？", "zh-TW": "藥局在哪裡？" },
            { "ko": "병원에 가고 싶어요.", "local": "病院へ行きたいです", "en": "I want to go to the hospital.", "ja": "病院へ行きたいです。", "vi": "Tôi muốn đến bệnh viện.", "th": "ฉันอยากไปโรงพยาบาล", "zh-CN": "我想去医院。", "zh-TW": "我想去醫院。" },
            { "ko": "경찰을 불러주세요.", "local": "警察を呼んでください", "en": "Please call the police.", "ja": "警察を呼んでください。", "vi": "Gọi cảnh sát.", "th": "ช่วยเรียกตำรวจด้วยครับ/ค่ะ", "zh-CN": "请叫警察。", "zh-TW": "請叫警察。" }
        ]
    },
    "vietnam": {
        "✈️": [
            { "ko": "여행하러 왔습니다.", "local": "Đi du lịch", "en": "I'm here for travel.", "ja": "旅行に来ました。", "vi": "Tôi đến du lịch.", "th": "มาท่องเที่ยวครับ/ค่ะ", "zh-CN": "我来旅游的。", "zh-TW": "我來旅遊的。" },
            { "ko": "출구가 어디인가요?", "local": "Lối ra ở đâu?", "en": "Where is the exit?", "ja": "出口はどこですか？", "vi": "Lối ra ở đâu?", "th": "ทางออกอยู่ที่ไหน?", "zh-CN": "出口在哪里？", "zh-TW": "出口在哪裡？" },
            { "ko": "그랩 타는 곳이 어디예요?", "local": "Chỗ đón Grab ở đâu?", "en": "Where do I catch Grab?", "ja": "Grabはどこで乗れますか？", "vi": "Chỗ đón Grab ở đâu?", "th": "ขึ้น Grab ที่ไหนครับ/ค่ะ?", "zh-CN": "在哪里坐Grab？", "zh-TW": "在哪裡坐Grab？" },
            { "ko": "제 가방이 파손되었어요.", "local": "Hành lý của tôi bị hỏng", "en": "My luggage is damaged.", "ja": "荷物が壊れています。", "vi": "Hành lý của tôi bị hỏng.", "th": "กระเป๋าของฉันเสียหาย", "zh-CN": "我的行李损坏了。", "zh-TW": "我的行李損壞了。" },
            { "ko": "환전소가 어디인가요?", "local": "Chỗ đổi tiền ở đâu?", "en": "Where is the currency exchange?", "ja": "両替所はどこですか？", "vi": "Chỗ đổi tiền ở đâu?", "th": "ที่แลกเงินอยู่ที่ไหน?", "zh-CN": "换汇处在哪里？", "zh-TW": "換匯處在哪裡？" }
        ],
        "🏨": [
            { "ko": "체크인 부탁합니다.", "local": "Làm ơn nhận phòng", "en": "Check-in, please.", "ja": "チェックインお願いします。", "vi": "Nhờ làm thủ tục nhận phòng.", "th": "ขอเช็คอินครับ/ค่ะ", "zh-CN": "请帮我办理入住。", "zh-TW": "請幫我辦理入住。" },
            { "ko": "방 청소 부탁합니다.", "local": "Làm ơn dọn phòng", "en": "Please clean the room.", "ja": "部屋の清掃をお願いします。", "vi": "Nhờ dọn phòng.", "th": "ช่วยทำความสะอาดห้องด้วยครับ/ค่ะ", "zh-CN": "请打扫房间。", "zh-TW": "請打掃房間。" },
            { "ko": "물 좀 더 주세요.", "local": "Cho tôi thêm nước", "en": "More water, please.", "ja": "お水をもっとください。", "vi": "Cho thêm nước.", "th": "ขอน้ำเพิ่มครับ/ค่ะ", "zh-CN": "请再给我水。", "zh-TW": "請再給我水。" },
            { "ko": "온수가 안 나와요.", "local": "Không có nước nóng", "en": "No hot water.", "ja": "お湯が出ません。", "vi": "Không có nước nóng.", "th": "น้ำร้อนไม่ออกครับ/ค่ะ", "zh-CN": "没有热水。", "zh-TW": "沒有熱水。" },
            { "ko": "택시 불러주세요.", "local": "Làm ơn gọi taxi", "en": "Please call a taxi.", "ja": "タクシーを呼んでください。", "vi": "Gọi taxi cho tôi.", "th": "ช่วยเรียกแท็กซี่ด้วยครับ/ค่ะ", "zh-CN": "请帮我叫出租车。", "zh-TW": "請幫我叫計程車。" }
        ],
        "🍴": [
            { "ko": "고수 빼주세요.", "local": "Không cho rau mùi", "en": "No cilantro, please.", "ja": "パクチー抜きでお願いします。", "vi": "Không cho rau mùi.", "th": "ไม่ใส่ผักชีครับ/ค่ะ", "zh-CN": "不要香菜。", "zh-TW": "不要香菜。" },
            { "ko": "안 맵게 해주세요.", "local": "Không cay", "en": "Not spicy, please.", "ja": "辛くしないでください。", "vi": "Không cay.", "th": "ไม่เผ็ดครับ/ค่ะ", "zh-CN": "不要辣。", "zh-TW": "不要辣。" },
            { "ko": "생수 주세요. (수돗물 말고요)", "local": "Nước suối nhé, không phải nước máy", "en": "Bottled water please (not tap).", "ja": "ミネラルウォーターをください。", "vi": "Cho tôi nước suối (không phải nước máy).", "th": "ขอน้ำดื่มบรรจุขวดครับ/ค่ะ", "zh-CN": "请给我瓶装水。", "zh-TW": "請給我瓶裝水。" },
            { "ko": "계산서 주세요.", "local": "Tính tiền nhé", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền nhé.", "th": "เช็คบิลด้วยครับ/ค่ะ", "zh-CN": "请结账。", "zh-TW": "請結帳。" },
            { "ko": "포장해 주세요.", "local": "Gói mang về", "en": "To go, please.", "ja": "持ち帰りにします。", "vi": "Gói mang về.", "th": "ห่อกลับบ้านครับ/ค่ะ", "zh-CN": "打包带走。", "zh-TW": "打包帶走。" },
            { "ko": "얼음 빼주세요.", "local": "Không cho đá", "en": "No ice, please.", "ja": "氷なしでお願いします。", "vi": "Không cho đá.", "th": "ไม่ใส่น้ำแข็งครับ/ค่ะ", "zh-CN": "不要冰块。", "zh-TW": "不要冰塊。" }
        ],
        "🚌": [
            { "ko": "미터기 켜주세요.", "local": "Làm ơn bật đồng hồ", "en": "Turn on the meter, please.", "ja": "メーターをつけてください。", "vi": "Bật đồng hồ tính tiền.", "th": "เปิดมิเตอร์ด้วยครับ/ค่ะ", "zh-CN": "请打表。", "zh-TW": "請打表。" },
            { "ko": "이 주소로 가주세요.", "local": "Đi đến địa chỉ này", "en": "Go to this address.", "ja": "この住所まで行ってください。", "vi": "Đi đến địa chỉ này.", "th": "ไปที่อยู่นี้ครับ/ค่ะ", "zh-CN": "请去这个地址。", "zh-TW": "請去這個地址。" },
            { "ko": "여기서 세워주세요.", "local": "Dừng lại ở đây", "en": "Stop here, please.", "ja": "ここで止めてください。", "vi": "Dừng lại ở đây.", "th": "จอดที่นี่ครับ/ค่ะ", "zh-CN": "在这里停车。", "zh-TW": "在這裡停車。" },
            { "ko": "얼마인가요?", "local": "Bao nhiêu tiền?", "en": "How much?", "ja": "いくらですか？", "vi": "Bao nhiêu tiền?", "th": "เท่าไหร่ครับ/ค่ะ?", "zh-CN": "多少钱？", "zh-TW": "多少錢？" },
            { "ko": "천천히 가주세요.", "local": "Làm ơn lái chậm", "en": "Drive slowly, please.", "ja": "ゆっくり走ってください。", "vi": "Đi chậm thôi.", "th": "ขับช้าๆ ด้วยครับ/ค่ะ", "zh-CN": "请开慢点。", "zh-TW": "請開慢點。" }
        ],
        "🛍️": [
            { "ko": "이거 얼마예요?", "local": "Cái này bao nhiêu?", "en": "How much is this?", "ja": "これはいくらですか？", "vi": "Cái này bao nhiêu?", "th": "อันนี้เท่าไหร่ครับ/ค่ะ?", "zh-CN": "这个多少钱？", "zh-TW": "這個多少錢？" },
            { "ko": "깎아주실 수 있나요?", "local": "Giảm giá được không?", "en": "Can you give a discount?", "ja": "値引きできますか？", "vi": "Giảm giá được không?", "th": "ลดราคาได้ไหมครับ/ค่ะ?", "zh-CN": "可以便宜点吗？", "zh-TW": "可以便宜點嗎？" },
            { "ko": "이걸로 살게요.", "local": "Tôi sẽ lấy cái này", "en": "I'll take this.", "ja": "これにします。", "vi": "Tôi lấy cái này.", "th": "ขออันนี้ครับ/ค่ะ", "zh-CN": "我要买这个。", "zh-TW": "我要買這個。" },
            { "ko": "너무 비싸요.", "local": "Đắt quá", "en": "Too expensive.", "ja": "高すぎます。", "vi": "Đắt quá.", "th": "แพงเกินไปครับ/ค่ะ", "zh-CN": "太贵了。", "zh-TW": "太貴了。" },
            { "ko": "다른 색상 있나요?", "local": "Có màu khác không?", "en": "Do you have other colors?", "ja": "別の色はありますか？", "vi": "Có màu khác không?", "th": "มีสีอื่นไหมครับ/ค่ะ?", "zh-CN": "有其他颜色吗？", "zh-TW": "有其他顏色嗎？" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "Cứu với!", "en": "Help!", "ja": "助けてください！", "vi": "Cứu với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "병원 어디예요?", "local": "Bệnh viện ở đâu?", "en": "Where is the hospital?", "ja": "病院はどこですか？", "vi": "Bệnh viện ở đâu?", "th": "โรงพยาบาลอยู่ที่ไหน?", "zh-CN": "医院在哪里？", "zh-TW": "醫院在哪裡？" },
            { "ko": "폰을 잃어버렸어요.", "local": "Tôi bị mất điện thoại", "en": "I lost my phone.", "ja": "スマホをなくしました。", "vi": "Tôi bị mất điện thoại.", "th": "ฉันทำมือถือหาย", "zh-CN": "我的手机丢了。", "zh-TW": "我的手機丟了。" },
            { "ko": "약국이 어디예요?", "local": "Tiệm thuốc ở đâu?", "en": "Where is the pharmacy?", "ja": "薬局はどこですか？", "vi": "Tiệm thuốc ở đâu?", "th": "ร้านขายยาอยู่ที่ไหน?", "zh-CN": "药店在哪里？", "zh-TW": "藥局在哪裡？" },
            { "ko": "의사를 불러주세요.", "local": "Gọi bác sĩ", "en": "Please call a doctor.", "ja": "医者を呼んでください。", "vi": "Gọi bác sĩ.", "th": "ช่วยเรียกหมอด้วยครับ/ค่ะ", "zh-CN": "请叫医生。", "zh-TW": "請叫醫生。" }
        ]
    },
    "thailand": {
        "✈️": [
            { "ko": "관광하러 왔습니다.", "local": "Ma tiao krub/ka", "en": "I'm here for sightseeing.", "ja": "観光に来ました。", "vi": "Tôi đến du lịch.", "th": "มาท่องเที่ยวครับ/ค่ะ", "zh-CN": "我来旅游的。", "zh-TW": "我來旅遊的。" },
            { "ko": "택시 승강장이 어디예요?", "local": "Taxi yoo tee nai?", "en": "Where is the taxi stand?", "ja": "タクシー乗り場はどこですか？", "vi": "Bến taxi ở đâu?", "th": "ที่จอดแท็กซี่อยู่ที่ไหนครับ/ค่ะ?", "zh-CN": "出租车站在哪里？", "zh-TW": "計程車站在哪裡？" },
            { "ko": "택스 리펀 되나요?", "local": "VAT Refund dai mai?", "en": "Is VAT refund available?", "ja": "VAT還付はできますか？", "vi": "Hoàn thuế VAT được không?", "th": "คืนภาษี VAT ได้ไหมครับ/ค่ะ?", "zh-CN": "可以退税吗？", "zh-TW": "可以退稅嗎？" },
            { "ko": "심카드가 필요해요.", "local": "Kor SIM card krub/ka", "en": "I need a SIM card.", "ja": "SIMカードが必要です。", "vi": "Tôi cần SIM card.", "th": "ต้องการซิมการ์ดครับ/ค่ะ", "zh-CN": "我需要SIM卡。", "zh-TW": "我需要SIM卡。" },
            { "ko": "환전소가 어디예요?", "local": "Tee laek ngoen yoo nai?", "en": "Where is the currency exchange?", "ja": "両替所はどこですか？", "vi": "Chỗ đổi tiền ở đâu?", "th": "ที่แลกเงินอยู่ที่ไหนครับ/ค่ะ?", "zh-CN": "换汇处在哪里？", "zh-TW": "換匯處在哪裡？" }
        ],
        "🏨": [
            { "ko": "체크인 할게요.", "local": "Chek-in krub/ka", "en": "Check-in, please.", "ja": "チェックインします。", "vi": "Tôi check-in.", "th": "เช็คอินครับ/ค่ะ", "zh-CN": "我要办理入住。", "zh-TW": "我要辦理入住。" },
            { "ko": "조식 몇 시예요?", "local": "A-han chao kee mong?", "en": "What time is breakfast?", "ja": "朝食は何時ですか？", "vi": "Bữa sáng mấy giờ?", "th": "อาหารเช้าเริ่มกี่โมงครับ/ค่ะ?", "zh-CN": "早餐几点？", "zh-TW": "早餐幾點？" },
            { "ko": "체크아웃 연장 되나요?", "local": "Late check-out dai mai?", "en": "Can I have a late check-out?", "ja": "レイトチェックアウトできますか？", "vi": "Có thể trả phòng muộn không?", "th": "เช็คเอ้าท์ช้าได้ไหมครับ/ค่ะ?", "zh-CN": "可以延迟退房吗？", "zh-TW": "可以延遲退房嗎？" },
            { "ko": "수건 더 필요해요.", "local": "Kor pa-ched-tua perm", "en": "I need more towels.", "ja": "タオルがもっと必要です。", "vi": "Tôi cần thêm khăn.", "th": "ต้องการผ้าเช็ดตัวเพิ่มครับ/ค่ะ", "zh-CN": "我需要更多毛巾。", "zh-TW": "我需要更多毛巾。" },
            { "ko": "택시 불러주세요.", "local": "Riak taxi krub/ka", "en": "Please call a taxi.", "ja": "タクシーを呼んでください。", "vi": "Gọi taxi cho tôi.", "th": "ช่วยเรียกแท็กซี่ด้วยครับ/ค่ะ", "zh-CN": "请帮我叫出租车。", "zh-TW": "請幫我叫計程車。" }
        ],
        "🍴": [
            { "ko": "안 맵게 해주세요.", "local": "Mai phed krub/ka", "en": "Not spicy, please.", "ja": "辛くしないでください。", "vi": "Không cay.", "th": "ไม่เผ็ดครับ/ค่ะ", "zh-CN": "不要辣。", "zh-TW": "不要辣。" },
            { "ko": "계산서 주세요.", "local": "Gep tang duay", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền nhé.", "th": "เช็คบิลด้วยครับ/ค่ะ", "zh-CN": "请结账。", "zh-TW": "請結帳。" },
            { "ko": "고수 넣지 마세요.", "local": "Mai sai pak-chee", "en": "No cilantro, please.", "ja": "パクチーを入れないでください。", "vi": "Không cho rau mùi.", "th": "ไม่ใส่ผักชีครับ/ค่ะ", "zh-CN": "不要放香菜。", "zh-TW": "不要放香菜。" },
            { "ko": "물 좀 주세요.", "local": "Kor nam plao", "en": "Water, please.", "ja": "お水をください。", "vi": "Cho tôi nước.", "th": "ขอน้ำด้วยครับ/ค่ะ", "zh-CN": "请给我水。", "zh-TW": "請給我水。" },
            { "ko": "추천 메뉴 뭐예요?", "local": "Mee arai a-roy?", "en": "What's good here?", "ja": "おすすめは何ですか？", "vi": "Món nào ngon?", "th": "มีอะไรอร่อยไหมครับ/ค่ะ?", "zh-CN": "有什么好吃的？", "zh-TW": "有什麼好吃的？" },
            { "ko": "얼음 좀 주세요.", "local": "Kor nam-keng", "en": "Ice, please.", "ja": "氷をください。", "vi": "Cho đá.", "th": "ขอน้ำแข็งครับ/ค่ะ", "zh-CN": "请给我冰块。", "zh-TW": "請給我冰塊。" }
        ],
        "🚌": [
            { "ko": "...에 가주세요.", "local": "Pai tee...", "en": "Go to..., please.", "ja": "...まで行ってください。", "vi": "Đi đến...", "th": "ไปที่...ครับ/ค่ะ", "zh-CN": "请去...", "zh-TW": "請去..." },
            { "ko": "미터기 켜주세요.", "local": "Poed meter duay", "en": "Turn on the meter.", "ja": "メーターをつけてください。", "vi": "Bật đồng hồ.", "th": "เปิดมิเตอร์ด้วยครับ/ค่ะ", "zh-CN": "请打表。", "zh-TW": "請打表。" },
            { "ko": "얼마예요?", "local": "Tao rai krub/ka?", "en": "How much?", "ja": "いくらですか？", "vi": "Bao nhiêu tiền?", "th": "เท่าไหร่ครับ/ค่ะ?", "zh-CN": "多少钱？", "zh-TW": "多少錢？" },
            { "ko": "여기서 내려주세요.", "local": "Jod tee nee", "en": "Stop here, please.", "ja": "ここで降ろしてください。", "vi": "Cho xuống đây.", "th": "จอดที่นี่ครับ/ค่ะ", "zh-CN": "在这里下车。", "zh-TW": "在這裡下車。" },
            { "ko": "공항까지 얼마나 걸려요?", "local": "Pai sanam-bin chai wela nan kae nai?", "en": "How long to the airport?", "ja": "空港までどのくらいかかりますか？", "vi": "Đến sân bay mất bao lâu?", "th": "ไปสนามบินใช้เวลานานแค่ไหนครับ/ค่ะ?", "zh-CN": "到机场要多长时间？", "zh-TW": "到機場要多長時間？" }
        ],
        "🛍️": [
            { "ko": "깎아주실 수 있나요?", "local": "Lot noi dai mai?", "en": "Can you give a discount?", "ja": "値引きできますか？", "vi": "Giảm giá được không?", "th": "ลดราคาได้ไหมครับ/ค่ะ?", "zh-CN": "可以便宜点吗？", "zh-TW": "可以便宜點嗎？" },
            { "ko": "너무 비싸요!", "local": "Paeng mak!", "en": "Too expensive!", "ja": "高すぎます！", "vi": "Đắt quá!", "th": "แพงมากครับ/ค่ะ!", "zh-CN": "太贵了！", "zh-TW": "太貴了！" },
            { "ko": "이거 살게요.", "local": "Ao an nee", "en": "I'll take this.", "ja": "これにします。", "vi": "Tôi lấy cái này.", "th": "ขออันนี้ครับ/ค่ะ", "zh-CN": "我要这个。", "zh-TW": "我要這個。" },
            { "ko": "입어봐도 되나요?", "local": "Long dai mai?", "en": "Can I try it on?", "ja": "試着してもいいですか？", "vi": "Thử được không?", "th": "ลองได้ไหมครับ/ค่ะ?", "zh-CN": "可以试穿吗？", "zh-TW": "可以試穿嗎？" },
            { "ko": "VAT 환급 신청하고 싶어요.", "local": "Kor kuen VAT krub/ka", "en": "I'd like to apply for a VAT refund.", "ja": "VAT還付を申請したいです。", "vi": "Tôi muốn hoàn thuế VAT.", "th": "ต้องการขอคืน VAT ครับ/ค่ะ", "zh-CN": "我想申请退税。", "zh-TW": "我想申請退稅。" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "Chuay duay!", "en": "Help!", "ja": "助けてください！", "vi": "Cứu với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "약국이 어디예요?", "local": "Ran-kai-ya yoo nai?", "en": "Where is the pharmacy?", "ja": "薬局はどこですか？", "vi": "Tiệm thuốc ở đâu?", "th": "ร้านขายยาอยู่ที่ไหน?", "zh-CN": "药店在哪里？", "zh-TW": "藥局在哪裡？" },
            { "ko": "병원에 가야 해요.", "local": "Rong-pa-ya-ban", "en": "I need to go to hospital.", "ja": "病院に行かなければなりません。", "vi": "Tôi cần đến bệnh viện.", "th": "ต้องไปโรงพยาบาลครับ/ค่ะ", "zh-CN": "我需要去医院。", "zh-TW": "我需要去醫院。" },
            { "ko": "몸이 아파요.", "local": "Chun mai sabai", "en": "I'm not feeling well.", "ja": "体調が悪いです。", "vi": "Tôi không khỏe.", "th": "ฉันไม่สบายครับ/ค่ะ", "zh-CN": "我身体不舒服。", "zh-TW": "我身體不舒服。" },
            { "ko": "여권을 잃어버렸어요.", "local": "Passport hai", "en": "I lost my passport.", "ja": "パスポートをなくしました。", "vi": "Tôi mất hộ chiếu.", "th": "ฉันทำหนังสือเดินทางหาย", "zh-CN": "我的护照丢了。", "zh-TW": "我的護照丟了。" }
        ]
    },
    "taiwan": {
        "✈️": [
            { "ko": "여행하러 왔습니다.", "local": "旅遊 (Lǚyóu)", "en": "I'm here for travel.", "ja": "旅行に来ました。", "vi": "Tôi đến du lịch.", "th": "มาท่องเที่ยวครับ/ค่ะ", "zh-CN": "我来旅游的。", "zh-TW": "我來旅遊的。" },
            { "ko": "지하철역이 어디인가요?", "local": "捷運站在哪裡?", "en": "Where is the subway station?", "ja": "地下鉄の駅はどこですか？", "vi": "Ga tàu điện ngầm ở đâu?", "th": "สถานีรถไฟใต้ดินอยู่ที่ไหน?", "zh-CN": "地铁站在哪里？", "zh-TW": "捷運站在哪裡？" },
            { "ko": "유심 카드 어디서 사나요?", "local": "SIM卡在哪裡買?", "en": "Where can I buy a SIM card?", "ja": "SIMカードはどこで買えますか？", "vi": "Mua SIM card ở đâu?", "th": "ซื้อซิมการ์ดได้ที่ไหน?", "zh-CN": "哪里买SIM卡？", "zh-TW": "哪裡買SIM卡？" },
            { "ko": "짐 찾는 곳이 어디죠?", "local": "行李領取處?", "en": "Where is the baggage claim?", "ja": "荷物受取場所はどこですか？", "vi": "Khu nhận hành lý ở đâu?", "th": "ที่รับกระเป๋าอยู่ที่ไหน?", "zh-CN": "行李提取处在哪里？", "zh-TW": "行李提取處在哪裡？" }
        ],
        "🏨": [
            { "ko": "체크인 부탁합니다.", "local": "辦理入住 (Bànlǐ rùzhù)", "en": "Check-in, please.", "ja": "チェックインお願いします。", "vi": "Nhờ làm thủ tục nhận phòng.", "th": "ขอเช็คอินครับ/ค่ะ", "zh-CN": "请帮我办理入住。", "zh-TW": "請幫我辦理入住。" },
            { "ko": "짐을 맡길 수 있나요?", "local": "寄存行李?", "en": "Can I store my luggage?", "ja": "荷物を預けられますか？", "vi": "Tôi có thể gửi hành lý không?", "th": "ฝากกระเป๋าได้ไหมครับ/ค่ะ?", "zh-CN": "可以寄存行李吗？", "zh-TW": "可以寄存行李嗎？" },
            { "ko": "와이파이 비번이 뭐죠?", "local": "WiFi 密碼?", "en": "What's the Wi-Fi password?", "ja": "Wi-Fiのパスワードは？", "vi": "Mật khẩu Wi-Fi là gì?", "th": "รหัส Wi-Fi คืออะไรครับ/ค่ะ?", "zh-CN": "Wi-Fi密码是什么？", "zh-TW": "Wi-Fi密碼是什麼？" },
            { "ko": "수건이 필요합니다.", "local": "我需要毛巾", "en": "I need a towel.", "ja": "タオルが必要です。", "vi": "Tôi cần khăn.", "th": "ต้องการผ้าเช็ดตัวครับ/ค่ะ", "zh-CN": "我需要毛巾。", "zh-TW": "我需要毛巾。" },
            { "ko": "체크아웃 할게요.", "local": "退房 (Tuìfáng)", "en": "Check-out, please.", "ja": "チェックアウトします。", "vi": "Tôi check-out.", "th": "เช็คเอ้าท์ครับ/ค่ะ", "zh-CN": "我要退房。", "zh-TW": "我要退房。" }
        ],
        "🍴": [
            { "ko": "두 명입니다.", "local": "兩位 (Liǎng wèi)", "en": "Table for two.", "ja": "二人です。", "vi": "Hai người.", "th": "สองคนครับ/ค่ะ", "zh-CN": "两位。", "zh-TW": "兩位。" },
            { "ko": "계산할게요.", "local": "買單 (Mǎidān)", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền.", "th": "เช็คบิลครับ/ค่ะ", "zh-CN": "结账。", "zh-TW": "結帳。" },
            { "ko": "고수 빼주세요.", "local": "不要香菜 (Bùyào xiāngcài)", "en": "No cilantro, please.", "ja": "パクチー抜きでお願いします。", "vi": "Không cho rau mùi.", "th": "ไม่ใส่ผักชีครับ/ค่ะ", "zh-CN": "不要香菜。", "zh-TW": "不要香菜。" },
            { "ko": "포장할게요.", "local": "外帶 (Wàidài)", "en": "To go, please.", "ja": "持ち帰りにします。", "vi": "Gói mang về.", "th": "ห่อกลับบ้านครับ/ค่ะ", "zh-CN": "打包带走。", "zh-TW": "打包帶走。" },
            { "ko": "추천 메뉴 있나요?", "local": "推薦什麼?", "en": "Any recommendations?", "ja": "おすすめはありますか？", "vi": "Có món nào ngon không?", "th": "มีเมนูแนะนำไหมครับ/ค่ะ?", "zh-CN": "有推荐的菜吗？", "zh-TW": "有推薦的菜嗎？" },
            { "ko": "뜨거운 물 주세요.", "local": "熱水 (Rèshuǐ)", "en": "Hot water, please.", "ja": "お湯をください。", "vi": "Cho tôi nước nóng.", "th": "ขอน้ำร้อนครับ/ค่ะ", "zh-CN": "请给我热水。", "zh-TW": "請給我熱水。" }
        ],
        "🚌": [
            { "ko": "버스 정류장 어디예요?", "local": "公車站在哪?", "en": "Where is the bus stop?", "ja": "バス停はどこですか？", "vi": "Trạm xe buýt ở đâu?", "th": "ป้ายรถเมล์อยู่ที่ไหน?", "zh-CN": "公交车站在哪里？", "zh-TW": "公車站在哪？" },
            { "ko": "이곳으로 가주세요.", "local": "去這裡 (Qù zhèlǐ)", "en": "Go here, please.", "ja": "ここへ行ってください。", "vi": "Đi đến đây.", "th": "ไปที่นี่ครับ/ค่ะ", "zh-CN": "请去这里。", "zh-TW": "請去這裡。" },
            { "ko": "여기 세워주세요.", "local": "這裡停車", "en": "Stop here, please.", "ja": "ここで止めてください。", "vi": "Dừng ở đây.", "th": "จอดที่นี่ครับ/ค่ะ", "zh-CN": "在这里停。", "zh-TW": "在這裡停。" },
            { "ko": "이지카드 충전해 주세요.", "local": "悠遊卡加值", "en": "Charge my EasyCard.", "ja": "悠遊カードをチャージしてください。", "vi": "Nạp tiền thẻ EasyCard.", "th": "เติมเงินบัตร EasyCard ครับ/ค่ะ", "zh-CN": "给悠游卡充值。", "zh-TW": "悠遊卡加值。" },
            { "ko": "출구가 몇 번이죠?", "local": "出口是幾號?", "en": "Which exit number?", "ja": "出口は何番ですか？", "vi": "Cửa ra số mấy?", "th": "ทางออกหมายเลขเท่าไหร่?", "zh-CN": "几号出口？", "zh-TW": "出口是幾號？" }
        ],
        "🛍️": [
            { "ko": "얼마인가요?", "local": "多少錢? (Duōshǎo qián?)", "en": "How much is it?", "ja": "いくらですか？", "vi": "Bao nhiêu tiền?", "th": "เท่าไหร่ครับ/ค่ะ?", "zh-CN": "多少钱？", "zh-TW": "多少錢？" },
            { "ko": "할인 되나요?", "local": "打折嗎?", "en": "Is there a discount?", "ja": "割引できますか？", "vi": "Có giảm giá không?", "th": "มีส่วนลดไหมครับ/ค่ะ?", "zh-CN": "可以打折吗？", "zh-TW": "可以打折嗎？" },
            { "ko": "영수증 주세요.", "local": "我要發票", "en": "Receipt, please.", "ja": "レシートをください。", "vi": "Cho tôi hóa đơn.", "th": "ขอใบเสร็จด้วยครับ/ค่ะ", "zh-CN": "请给我收据。", "zh-TW": "請給我發票。" },
            { "ko": "너무 비싸요.", "local": "太貴了 (Tài guìle)", "en": "Too expensive.", "ja": "高すぎます。", "vi": "Đắt quá.", "th": "แพงเกินไปครับ/ค่ะ", "zh-CN": "太贵了。", "zh-TW": "太貴了。" },
            { "ko": "입어봐도 되나요?", "local": "可以試試嗎?", "en": "Can I try it on?", "ja": "試着してもいいですか？", "vi": "Thử được không?", "th": "ลองได้ไหมครับ/ค่ะ?", "zh-CN": "可以试穿吗？", "zh-TW": "可以試穿嗎？" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "救命! (Jiùmìng!)", "en": "Help!", "ja": "助けてください！", "vi": "Cứu với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "병원이 어디인가요?", "local": "醫院在哪?", "en": "Where is the hospital?", "ja": "病院はどこですか？", "vi": "Bệnh viện ở đâu?", "th": "โรงพยาบาลอยู่ที่ไหน?", "zh-CN": "医院在哪里？", "zh-TW": "醫院在哪？" },
            { "ko": "여권을 잃어버렸어요.", "local": "護照丟了", "en": "I lost my passport.", "ja": "パスポートをなくしました。", "vi": "Tôi mất hộ chiếu.", "th": "ฉันทำหนังสือเดินทางหาย", "zh-CN": "我的护照丢了。", "zh-TW": "護照丟了。" },
            { "ko": "폰을 잃어버렸어요.", "local": "手機丟了", "en": "I lost my phone.", "ja": "スマホをなくしました。", "vi": "Tôi mất điện thoại.", "th": "ฉันทำมือถือหาย", "zh-CN": "我的手机丢了。", "zh-TW": "我的手機丟了。" },
            { "ko": "약국이 어디인가요?", "local": "藥局 (Yàojú)", "en": "Where is the pharmacy?", "ja": "薬局はどこですか？", "vi": "Tiệm thuốc ở đâu?", "th": "ร้านขายยาอยู่ที่ไหน?", "zh-CN": "药店在哪里？", "zh-TW": "藥局在哪裡？" }
        ]
    },
    "hongkong": {
        "✈️": [
            { "ko": "여행하러 왔습니다.", "local": "我嚟旅遊。", "en": "I'm here for travel.", "ja": "旅行に来ました。", "vi": "Tôi đến du lịch.", "th": "มาท่องเที่ยวครับ/ค่ะ", "zh-CN": "我来旅游的。", "zh-TW": "我來旅遊。" },
            { "ko": "출구가 어디인가요?", "local": "出口喺邊？", "en": "Where is the exit?", "ja": "出口はどこですか？", "vi": "Lối ra ở đâu?", "th": "ทางออกอยู่ที่ไหน?", "zh-CN": "出口在哪里？", "zh-TW": "出口在哪裡？" },
            { "ko": "제 짐이 안 보여요.", "local": "我件行李唔見咗。", "en": "I can't find my luggage.", "ja": "荷物が見当たりません。", "vi": "Hành lý của tôi không thấy.", "th": "กระเป๋าของฉันหายไป", "zh-CN": "我的行李不见了。", "zh-TW": "我的行李不見了。" },
            { "ko": "유심은 어디서 사나요?", "local": "邊度可以買SIM卡？", "en": "Where can I buy a SIM?", "ja": "SIMカードはどこで買えますか？", "vi": "Mua SIM ở đâu?", "th": "ซื้อซิมได้ที่ไหน?", "zh-CN": "在哪里买SIM卡？", "zh-TW": "在哪裡買SIM卡？" }
        ],
        "🏨": [
            { "ko": "체크인 부탁합니다.", "local": "麻煩幫我辦理入住。", "en": "Check-in, please.", "ja": "チェックインお願いします。", "vi": "Nhờ làm thủ tục nhận phòng.", "th": "ขอเช็คอินครับ/ค่ะ", "zh-CN": "请帮我办理入住。", "zh-TW": "請幫我辦理入住。" },
            { "ko": "짐을 맡길 수 있을까요?", "local": "可唔可以寄存行李？", "en": "Can I store my luggage?", "ja": "荷物を預けられますか？", "vi": "Tôi có thể gửi hành lý không?", "th": "ฝากกระเป๋าได้ไหมครับ/ค่ะ?", "zh-CN": "可以寄存行李吗？", "zh-TW": "可以寄存行李嗎？" },
            { "ko": "와이파이 비번이 뭐예요?", "local": "Wi-Fi密碼係咩？", "en": "What's the Wi-Fi password?", "ja": "Wi-Fiのパスワードは？", "vi": "Mật khẩu Wi-Fi?", "th": "รหัส Wi-Fi คืออะไรครับ/ค่ะ?", "zh-CN": "Wi-Fi密码是什么？", "zh-TW": "Wi-Fi密碼是什麼？" },
            { "ko": "수건 더 주세요.", "local": "唔該俾多兩條毛巾。", "en": "More towels, please.", "ja": "タオルをもっとください。", "vi": "Cho thêm khăn.", "th": "ขอผ้าเช็ดตัวเพิ่มครับ/ค่ะ", "zh-CN": "再给我毛巾。", "zh-TW": "再給我毛巾。" },
            { "ko": "방이 너무 추워요.", "local": "間房太凍。", "en": "The room is too cold.", "ja": "部屋が寒すぎます。", "vi": "Phòng quá lạnh.", "th": "ห้องหนาวมากครับ/ค่ะ", "zh-CN": "房间太冷了。", "zh-TW": "房間太冷了。" }
        ],
        "🍴": [
            { "ko": "두 명입니다.", "local": "兩位，唔該。", "en": "Table for two.", "ja": "二人です。", "vi": "Hai người.", "th": "สองคนครับ/ค่ะ", "zh-CN": "两位。", "zh-TW": "兩位。" },
            { "ko": "계산서 주세요.", "local": "埋單，唔該。", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền.", "th": "เช็คบิลครับ/ค่ะ", "zh-CN": "结账。", "zh-TW": "結帳。" },
            { "ko": "고수는 빼주세요.", "local": "唔該唔好落芫茜。", "en": "No cilantro, please.", "ja": "パクチー抜きでお願いします。", "vi": "Không cho rau mùi.", "th": "ไม่ใส่ผักชีครับ/ค่ะ", "zh-CN": "不要香菜。", "zh-TW": "不要香菜。" },
            { "ko": "추천 메뉴 있나요?", "local": "有冇推薦菜式？", "en": "Any recommendations?", "ja": "おすすめはありますか？", "vi": "Có món ngon không?", "th": "มีเมนูแนะนำไหมครับ/ค่ะ?", "zh-CN": "有推荐的菜吗？", "zh-TW": "有推薦的菜嗎？" },
            { "ko": "물 좀 주세요.", "local": "唔該俾杯水。", "en": "Water, please.", "ja": "お水をください。", "vi": "Cho tôi nước.", "th": "ขอน้ำด้วยครับ/ค่ะ", "zh-CN": "请给我水。", "zh-TW": "請給我水。" },
            { "ko": "뜨거운 물 주세요.", "local": "唔該俾杯熱水。", "en": "Hot water, please.", "ja": "お湯をください。", "vi": "Cho tôi nước nóng.", "th": "ขอน้ำร้อนครับ/ค่ะ", "zh-CN": "请给我热水。", "zh-TW": "請給我熱水。" }
        ],
        "🚌": [
            { "ko": "지하철역이 어디예요?", "local": "港鐵站喺邊？", "en": "Where is the MTR station?", "ja": "地下鉄の駅はどこですか？", "vi": "Ga MTR ở đâu?", "th": "สถานี MTR อยู่ที่ไหน?", "zh-CN": "地铁站在哪里？", "zh-TW": "港鐵站在哪裡？" },
            { "ko": "이 주소로 가주세요.", "local": "麻煩去呢個地址。", "en": "Go to this address.", "ja": "この住所まで行ってください。", "vi": "Đi đến địa chỉ này.", "th": "ไปที่อยู่นี้ครับ/ค่ะ", "zh-CN": "请去这个地址。", "zh-TW": "請去這個地址。" },
            { "ko": "여기서 세워주세요.", "local": "唔該喺呢度停。", "en": "Stop here, please.", "ja": "ここで止めてください。", "vi": "Dừng ở đây.", "th": "จอดที่นี่ครับ/ค่ะ", "zh-CN": "在这里停。", "zh-TW": "在這裡停。" },
            { "ko": "옥토퍼스로 결제되나요?", "local": "可以用八達通嗎？", "en": "Can I pay with Octopus?", "ja": "オクトパスカードで支払えますか？", "vi": "Thanh toán bằng thẻ Octopus được không?", "th": "จ่ายด้วยบัตร Octopus ได้ไหม?", "zh-CN": "可以用八达通吗？", "zh-TW": "可以用八達通嗎？" },
            { "ko": "요금이 얼마예요?", "local": "車費幾多？", "en": "How much is the fare?", "ja": "料金はいくらですか？", "vi": "Giá vé bao nhiêu?", "th": "ค่าโดยสารเท่าไหร่?", "zh-CN": "票价多少？", "zh-TW": "車費多少？" }
        ],
        "🛍️": [
            { "ko": "이거 얼마예요?", "local": "呢個幾錢？", "en": "How much is this?", "ja": "これはいくらですか？", "vi": "Cái này bao nhiêu?", "th": "อันนี้เท่าไหร่ครับ/ค่ะ?", "zh-CN": "这个多少钱？", "zh-TW": "這個多少錢？" },
            { "ko": "카드 결제 되나요?", "local": "可以碌卡嗎？", "en": "Can I pay by card?", "ja": "カードで払えますか？", "vi": "Thanh toán bằng thẻ được không?", "th": "จ่ายด้วยบัตรได้ไหมครับ/ค่ะ?", "zh-CN": "可以刷卡吗？", "zh-TW": "可以刷卡嗎？" },
            { "ko": "택스 리펀 되나요?", "local": "可以退稅嗎？", "en": "Tax refund available?", "ja": "タックスリファンドできますか？", "vi": "Hoàn thuế được không?", "th": "คืนภาษีได้ไหมครับ/ค่ะ?", "zh-CN": "可以退税吗？", "zh-TW": "可以退稅嗎？" },
            { "ko": "입어봐도 될까요?", "local": "可以試穿嗎？", "en": "Can I try it on?", "ja": "試着してもいいですか？", "vi": "Thử được không?", "th": "ลองได้ไหมครับ/ค่ะ?", "zh-CN": "可以试穿吗？", "zh-TW": "可以試穿嗎？" },
            { "ko": "봉투 주세요.", "local": "唔該俾個袋。", "en": "A bag, please.", "ja": "袋をください。", "vi": "Cho túi.", "th": "ขอถุงด้วยครับ/ค่ะ", "zh-CN": "请给我袋子。", "zh-TW": "請給我袋子。" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "救命！", "en": "Help!", "ja": "助けてください！", "vi": "Cứu với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "지갑을 잃어버렸어요.", "local": "我唔見咗銀包。", "en": "I lost my wallet.", "ja": "財布をなくしました。", "vi": "Tôi mất ví.", "th": "ฉันทำกระเป๋าสตางค์หาย", "zh-CN": "我的钱包丢了。", "zh-TW": "我的錢包丟了。" },
            { "ko": "약국이 어디예요?", "local": "藥房喺邊？", "en": "Where is the pharmacy?", "ja": "薬局はどこですか？", "vi": "Tiệm thuốc ở đâu?", "th": "ร้านขายยาอยู่ที่ไหน?", "zh-CN": "药店在哪里？", "zh-TW": "藥局在哪裡？" },
            { "ko": "병원에 가야 해요.", "local": "我要去醫院。", "en": "I need to go to hospital.", "ja": "病院に行く必要があります。", "vi": "Tôi cần đi bệnh viện.", "th": "ต้องไปโรงพยาบาลครับ/ค่ะ", "zh-CN": "我需要去医院。", "zh-TW": "我需要去醫院。" },
            { "ko": "경찰을 불러주세요.", "local": "唔該幫我報警。", "en": "Please call the police.", "ja": "警察を呼んでください。", "vi": "Gọi cảnh sát.", "th": "ช่วยเรียกตำรวจด้วยครับ/ค่ะ", "zh-CN": "请报警。", "zh-TW": "請報警。" }
        ]
    },
    "usa": {
        "✈️": [
            { "ko": "관광하러 왔습니다.", "local": "Sightseeing", "en": "I'm here for sightseeing.", "ja": "観光に来ました。", "vi": "Tôi đến tham quan.", "th": "มาท่องเที่ยวครับ/ค่ะ", "zh-CN": "我来观光的。", "zh-TW": "我來觀光的。" },
            { "ko": "셔틀 어디서 타나요?", "local": "Where is the shuttle?", "en": "Where do I take the shuttle?", "ja": "シャトルはどこで乗れますか？", "vi": "Xe đưa đón ở đâu?", "th": "ขึ้นรถรับส่งที่ไหนครับ/ค่ะ?", "zh-CN": "在哪坐班车？", "zh-TW": "在哪裡搭接駁車？" },
            { "ko": "짐이 도착하지 않았어요.", "local": "My bag is missing", "en": "My bag is missing.", "ja": "荷物が届いていません。", "vi": "Hành lý chưa đến.", "th": "กระเป๋าของฉันยังไม่มาครับ/ค่ะ", "zh-CN": "我的行李没到。", "zh-TW": "我的行李沒到。" },
            { "ko": "세관이 어디인가요?", "local": "Where is customs?", "en": "Where is customs?", "ja": "税関はどこですか？", "vi": "Hải quan ở đâu?", "th": "ศุลกากรอยู่ที่ไหนครับ/ค่ะ?", "zh-CN": "海关在哪里？", "zh-TW": "海關在哪裡？" }
        ],
        "🏨": [
            { "ko": "체크인 부탁합니다.", "local": "Check-in, please", "en": "Check-in, please.", "ja": "チェックインお願いします。", "vi": "Nhờ làm thủ tục nhận phòng.", "th": "ขอเช็คอินครับ/ค่ะ", "zh-CN": "请帮我办理入住。", "zh-TW": "請幫我辦理入住。" },
            { "ko": "와이파이 비번 뭐죠?", "local": "WiFi password?", "en": "What's the Wi-Fi password?", "ja": "Wi-Fiのパスワードは？", "vi": "Mật khẩu Wi-Fi?", "th": "รหัส Wi-Fi คืออะไร?", "zh-CN": "Wi-Fi密码是什么？", "zh-TW": "Wi-Fi密碼是什麼？" },
            { "ko": "수건 더 주세요.", "local": "Extra towel, please", "en": "Extra towel, please.", "ja": "タオルをもっとください。", "vi": "Cho thêm khăn.", "th": "ขอผ้าเช็ดตัวเพิ่มครับ/ค่ะ", "zh-CN": "再给我毛巾。", "zh-TW": "再給我毛巾。" },
            { "ko": "체크아웃 늦게 되나요?", "local": "Late check-out possible?", "en": "Can I have a late check-out?", "ja": "レイトチェックアウトできますか？", "vi": "Có thể trả phòng muộn không?", "th": "เช็คเอ้าท์ช้าได้ไหมครับ/ค่ะ?", "zh-CN": "可以晚点退房吗？", "zh-TW": "可以晚點退房嗎？" },
            { "ko": "방이 너무 시끄러워요.", "local": "Room is too noisy", "en": "The room is too noisy.", "ja": "部屋がうるさすぎます。", "vi": "Phòng quá ồn.", "th": "ห้องเสียงดังมากครับ/ค่ะ", "zh-CN": "房间太吵了。", "zh-TW": "房間太吵了。" },
            { "ko": "냉장고/전자레인지 있나요?", "local": "Is there a fridge/microwave?", "en": "Is there a fridge/microwave?", "ja": "冷蔵庫・電子レンジはありますか？", "vi": "Có tủ lạnh/lò vi sóng không?", "th": "มีตู้เย็น/ไมโครเวฟไหมครับ/ค่ะ?", "zh-CN": "有冰箱/微波炉吗？", "zh-TW": "有冰箱/微波爐嗎？" }
        ],
        "🍴": [
            { "ko": "두 명입니다.", "local": "Table for two", "en": "Table for two.", "ja": "二人です。", "vi": "Hai người.", "th": "สองคนครับ/ค่ะ", "zh-CN": "两位。", "zh-TW": "兩位。" },
            { "ko": "계산서 주세요.", "local": "Check, please", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền.", "th": "เช็คบิลครับ/ค่ะ", "zh-CN": "请结账。", "zh-TW": "請結帳。" },
            { "ko": "포장해 주세요.", "local": "To go, please", "en": "To go, please.", "ja": "持ち帰りにします。", "vi": "Gói mang về.", "th": "ห่อกลับบ้านครับ/ค่ะ", "zh-CN": "打包带走。", "zh-TW": "打包帶走。" },
            { "ko": "나눠서 계산할게요.", "local": "Can we split the bill?", "en": "Can we split the bill?", "ja": "別々に払います。", "vi": "Chúng tôi trả riêng.", "th": "แยกบิลครับ/ค่ะ", "zh-CN": "我们分开付。", "zh-TW": "我們分開付。" },
            { "ko": "추천 메뉴가 뭐죠?", "local": "What do you recommend?", "en": "What do you recommend?", "ja": "おすすめは何ですか？", "vi": "Món nào ngon?", "th": "มีอะไรแนะนำครับ/ค่ะ?", "zh-CN": "有什么推荐的？", "zh-TW": "有什麼推薦的？" },
            { "ko": "얼음 빼주세요.", "local": "No ice, please", "en": "No ice, please.", "ja": "氷なしでお願いします。", "vi": "Không cho đá.", "th": "ไม่ใส่น้ำแข็งครับ/ค่ะ", "zh-CN": "不要冰。", "zh-TW": "不要冰。" }
        ],
        "🚌": [
            { "ko": "지하철역 어디예요?", "local": "Where is the subway?", "en": "Where is the subway?", "ja": "地下鉄の駅はどこですか？", "vi": "Ga tàu điện ngầm ở đâu?", "th": "สถานีรถไฟใต้ดินอยู่ที่ไหน?", "zh-CN": "地铁站在哪里？", "zh-TW": "地鐵站在哪裡？" },
            { "ko": "이 주소로 가주세요.", "local": "Go to this address", "en": "Go to this address.", "ja": "この住所まで行ってください。", "vi": "Đi đến địa chỉ này.", "th": "ไปที่อยู่นี้ครับ/ค่ะ", "zh-CN": "请去这个地址。", "zh-TW": "請去這個地址。" },
            { "ko": "여기 세워주세요.", "local": "Stop here, please", "en": "Stop here, please.", "ja": "ここで止めてください。", "vi": "Dừng ở đây.", "th": "จอดที่นี่ครับ/ค่ะ", "zh-CN": "在这里停。", "zh-TW": "在這裡停。" },
            { "ko": "노선도 있나요?", "local": "Subway map, please", "en": "Subway map, please.", "ja": "路線図はありますか？", "vi": "Có bản đồ tuyến không?", "th": "มีแผนที่รถไฟไหมครับ/ค่ะ?", "zh-CN": "有路线图吗？", "zh-TW": "有路線圖嗎？" },
            { "ko": "요금이 얼마인가요?", "local": "How much is the fare?", "en": "How much is the fare?", "ja": "料金はいくらですか？", "vi": "Giá vé bao nhiêu?", "th": "ค่าโดยสารเท่าไหร่?", "zh-CN": "票价多少？", "zh-TW": "票價多少？" }
        ],
        "🛍️": [
            { "ko": "이거 얼마인가요?", "local": "How much is this?", "en": "How much is this?", "ja": "これはいくらですか？", "vi": "Cái này bao nhiêu?", "th": "อันนี้เท่าไหร่ครับ/ค่ะ?", "zh-CN": "这个多少钱？", "zh-TW": "這個多少錢？" },
            { "ko": "피팅룸 어디예요?", "local": "Where is the fitting room?", "en": "Where is the fitting room?", "ja": "試着室はどこですか？", "vi": "Phòng thử đồ ở đâu?", "th": "ห้องลองเสื้อผ้าอยู่ที่ไหน?", "zh-CN": "试衣间在哪里？", "zh-TW": "試衣間在哪裡？" },
            { "ko": "환불 가능한가요?", "local": "Can I return this?", "en": "Can I return this?", "ja": "返品できますか？", "vi": "Có thể hoàn tiền không?", "th": "คืนสินค้าได้ไหมครับ/ค่ะ?", "zh-CN": "可以退款吗？", "zh-TW": "可以退款嗎？" },
            { "ko": "애플페이 되나요?", "local": "Do you take Apple Pay?", "en": "Do you take Apple Pay?", "ja": "Apple Payは使えますか？", "vi": "Dùng Apple Pay được không?", "th": "ใช้ Apple Pay ได้ไหมครับ/ค่ะ?", "zh-CN": "可以用Apple Pay吗？", "zh-TW": "可以用Apple Pay嗎？" },
            { "ko": "그냥 구경 중이에요.", "local": "I'm just looking", "en": "Just looking.", "ja": "見ているだけです。", "vi": "Tôi chỉ xem thôi.", "th": "แค่ดูอยู่ครับ/ค่ะ", "zh-CN": "我只是随便看看。", "zh-TW": "我只是隨便看看。" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "Help!", "en": "Help!", "ja": "助けてください！", "vi": "Cứu với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "911을 불러주세요.", "local": "Call 911!", "en": "Call 911!", "ja": "911を呼んでください。", "vi": "Gọi 911.", "th": "โทร 911 ด้วยครับ/ค่ะ", "zh-CN": "请拨打911。", "zh-TW": "請撥打911。" },
            { "ko": "폰을 도둑맞았어요.", "local": "My phone was stolen", "en": "My phone was stolen.", "ja": "スマホを盗まれました。", "vi": "Điện thoại của tôi bị trộm.", "th": "มือถือของฉันถูกขโมย", "zh-CN": "我的手机被偷了。", "zh-TW": "我的手機被偷了。" },
            { "ko": "병원이 어디인가요?", "local": "Where is the hospital?", "en": "Where is the hospital?", "ja": "病院はどこですか？", "vi": "Bệnh viện ở đâu?", "th": "โรงพยาบาลอยู่ที่ไหน?", "zh-CN": "医院在哪里？", "zh-TW": "醫院在哪裡？" },
            { "ko": "길을 잃었어요.", "local": "I am lost", "en": "I'm lost.", "ja": "道に迷いました。", "vi": "Tôi bị lạc.", "th": "ฉันหลงทางครับ/ค่ะ", "zh-CN": "我迷路了。", "zh-TW": "我迷路了。" }
        ]
    },
    "korea": {
        "✈️": [
            { "ko": "여행하러 왔습니다.", "local": "여행하러 왔습니다. (Yeo-haeng-ha-reo wat-seum-ni-da)", "en": "I'm here for travel.", "ja": "旅行に来ました。", "vi": "Tôi đến du lịch.", "th": "มาท่องเที่ยวครับ/ค่ะ", "zh-CN": "我来旅游的。", "zh-TW": "我來旅遊的。" },
            { "ko": "출구가 어디인가요?", "local": "출구가 어디인가요? (Chul-gu-ga eo-di-in-ga-yo?)", "en": "Where is the exit?", "ja": "出口はどこですか？", "vi": "Lối ra ở đâu?", "th": "ทางออกอยู่ที่ไหน?", "zh-CN": "出口在哪里？", "zh-TW": "出口在哪裡？" },
            { "ko": "철도/택시 타는 곳이 어디예요?", "local": "공항철도/택시 타는 곳이 어디예요?", "en": "Where is the train/taxi stand?", "ja": "電車/タクシー乗り場はどこですか？", "vi": "Nơi đón tàu/taxi ở đâu?", "th": "ที่ขึ้นรถไฟ/แท็กซี่อยู่ที่ไหน?", "zh-CN": "在哪里坐地铁/出租车？", "zh-TW": "在哪裡搭地鐵/計程車？" },
            { "ko": "환전소가 어디인가요?", "local": "환전소가 어디인가요?", "en": "Where is the currency exchange?", "ja": "両替所はどこですか？", "vi": "Chỗ đổi tiền ở đâu?", "th": "ที่แลกเงินอยู่ที่ไหน?", "zh-CN": "换汇处在哪里？", "zh-TW": "換匯處在哪裡？" }
        ],
        "🏨": [
            { "ko": "체크인 부탁합니다.", "local": "체크인 부탁합니다. (Check-in bu-tak-ham-ni-da)", "en": "Check-in, please.", "ja": "チェックインお願いします。", "vi": "Nhờ làm thủ tục nhận phòng.", "th": "ขอเช็คอินครับ/ค่ะ", "zh-CN": "请帮我办理入住。", "zh-TW": "請幫我辦理入住。" },
            { "ko": "방 청소 부탁합니다.", "local": "방 청소 부탁합니다.", "en": "Please clean the room.", "ja": "部屋の清掃をお願いします。", "vi": "Nhờ dọn phòng.", "th": "ช่วยทำความสะอาดห้องด้วยครับ/ค่ะ", "zh-CN": "请打扫房间。", "zh-TW": "請打掃房間。" },
            { "ko": "수건 더 주세요.", "local": "수건 더 주세요. (Su-geon deo ju-se-yo)", "en": "More towels, please.", "ja": "タオルをもっとください。", "vi": "Cho thêm khăn.", "th": "ขอผ้าเช็ดตัวเพิ่มครับ/ค่ะ", "zh-CN": "再给我毛巾。", "zh-TW": "再給我毛巾。" },
            { "ko": "와이파이 비밀번호가 뭐예요?", "local": "와이파이 비밀번호가 뭐예요?", "en": "What's the Wi-Fi password?", "ja": "Wi-Fiのパスワードは？", "vi": "Mật khẩu Wi-Fi?", "th": "รหัส Wi-Fi คืออะไรครับ/ค่ะ?", "zh-CN": "Wi-Fi密码是什么？", "zh-TW": "Wi-Fi密碼是什麼？" },
            { "ko": "짐 좀 맡겨주세요.", "local": "짐 좀 맡겨주세요.", "en": "Please store my luggage.", "ja": "荷物を預けてください。", "vi": "Nhờ giữ hành lý.", "th": "ช่วยฝากกระเป๋าด้วยครับ/ค่ะ", "zh-CN": "请帮我存放行李。", "zh-TW": "請幫我存放行李。" }
        ],
        "🍴": [
            { "ko": "주문할게요.", "local": "주문할게요.", "en": "I'd like to order.", "ja": "注文します。", "vi": "Tôi muốn gọi món.", "th": "ขอสั่งอาหารครับ/ค่ะ", "zh-CN": "我要点餐。", "zh-TW": "我要點餐。" },
            { "ko": "이거 하나 주세요.", "local": "이거 하나 주세요.", "en": "One of this, please.", "ja": "これを一つください。", "vi": "Cho tôi một cái này.", "th": "ขออันนี้หนึ่งอันครับ/ค่ะ", "zh-CN": "来一个这个。", "zh-TW": "來一個這個。" },
            { "ko": "계산서 주세요.", "local": "계산해 주세요.", "en": "Check, please.", "ja": "お会計お願いします。", "vi": "Tính tiền.", "th": "เช็คบิลครับ/ค่ะ", "zh-CN": "请结账。", "zh-TW": "請結帳。" },
            { "ko": "포장해 주세요.", "local": "포장이요.", "en": "To go, please.", "ja": "持ち帰りにします。", "vi": "Gói mang về.", "th": "ห่อกลับบ้านครับ/ค่ะ", "zh-CN": "打包带走。", "zh-TW": "打包帶走。" },
            { "ko": "맥주 하나 더 주세요.", "local": "맥주 하나 더 주세요.", "en": "One more beer, please.", "ja": "ビールをもう一つください。", "vi": "Cho thêm một bia.", "th": "ขอเบียร์อีกหนึ่งแก้วครับ/ค่ะ", "zh-CN": "再来一杯啤酒。", "zh-TW": "再來一杯啤酒。" },
            { "ko": "물 좀 주세요.", "local": "물 주세요.", "en": "Water, please.", "ja": "お水をください。", "vi": "Cho tôi nước.", "th": "ขอน้ำด้วยครับ/ค่ะ", "zh-CN": "请给我水。", "zh-TW": "請給我水。" }
        ],
        "🚌": [
            { "ko": "이 주소로 가주세요.", "local": "이 주소로 가주세요. (I ju-so-ro ga-ju-se-yo)", "en": "Go to this address.", "ja": "この住所まで行ってください。", "vi": "Đi đến địa chỉ này.", "th": "ไปที่อยู่นี้ครับ/ค่ะ", "zh-CN": "请去这个地址。", "zh-TW": "請去這個地址。" },
            { "ko": "여기서 세워주세요.", "local": "여기서 세워주세요.", "en": "Stop here.", "ja": "ここで止めてください。", "vi": "Dừng ở đây.", "th": "จอดที่นี่ครับ/ค่ะ", "zh-CN": "在这里停。", "zh-TW": "在這裡停。" },
            { "ko": "지하철역이 어디예요?", "local": "지하철역이 어디예요?", "en": "Where is the subway station?", "ja": "地下鉄の駅はどこですか？", "vi": "Ga tàu điện ngầm ở đâu?", "th": "สถานีรถไฟใต้ดินอยู่ที่ไหน?", "zh-CN": "地铁站在哪里？", "zh-TW": "地鐵站在哪裡？" },
            { "ko": "교통카드 주세요.", "local": "교통카드 주세요.", "en": "A transit card, please.", "ja": "交通カードをください。", "vi": "Cho tôi thẻ giao thông.", "th": "ขอบัตรโดยสารด้วยครับ/ค่ะ", "zh-CN": "请给我交通卡。", "zh-TW": "請給我交通卡。" }
        ],
        "🛍️": [
            { "ko": "이거 얼마예요?", "local": "이거 얼마예요? (I-geo eol-ma-ye-yo?)", "en": "How much is this?", "ja": "これはいくらですか？", "vi": "Cái này bao nhiêu?", "th": "อันนี้เท่าไหร่ครับ/ค่ะ?", "zh-CN": "这个多少钱？", "zh-TW": "這個多少錢？" },
            { "ko": "깎아주세요.", "local": "깎아주세요. (Kkak-a-ju-se-yo)", "en": "Give me a discount.", "ja": "値引きしてください。", "vi": "Bớt giá cho tôi.", "th": "ลดราคาให้ฉันด้วยครับ/ค่ะ", "zh-CN": "便宜一点。", "zh-TW": "便宜一點。" },
            { "ko": "이걸로 살게요.", "local": "이걸로 할게요.", "en": "I'll take this.", "ja": "これにします。", "vi": "Tôi lấy cái này.", "th": "ขออันนี้ครับ/ค่ะ", "zh-CN": "我买这个。", "zh-TW": "我買這個。" },
            { "ko": "면세 되나요?", "local": "택스 프리 돼요?", "en": "Is tax-free available?", "ja": "免税になりますか？", "vi": "Được miễn thuế không?", "th": "ขอ tax free ได้ไหมครับ/ค่ะ?", "zh-CN": "可以免税吗？", "zh-TW": "可以免稅嗎？" },
            { "ko": "봉투 주세요.", "local": "봉투 주세요.", "en": "A bag, please.", "ja": "袋をください。", "vi": "Cho túi.", "th": "ขอถุงด้วยครับ/ค่ะ", "zh-CN": "请给我袋子。", "zh-TW": "請給我袋子。" }
        ],
        "🚨": [
            { "ko": "도와주세요!", "local": "도와주세요! (Do-wa-ju-se-yo!)", "en": "Help!", "ja": "助けてください！", "vi": "Cứu với!", "th": "ช่วยด้วย!", "zh-CN": "救命！", "zh-TW": "救命！" },
            { "ko": "병원 어디예요?", "local": "병원이 어디예요?", "en": "Where is the hospital?", "ja": "病院はどこですか？", "vi": "Bệnh viện ở đâu?", "th": "โรงพยาบาลอยู่ที่ไหน?", "zh-CN": "医院在哪里？", "zh-TW": "醫院在哪裡？" },
            { "ko": "여권을 잃어버렸어요.", "local": "여권을 잃어버렸어요.", "en": "I lost my passport.", "ja": "パスポートをなくしました。", "vi": "Tôi mất hộ chiếu.", "th": "ฉันทำหนังสือเดินทางหาย", "zh-CN": "我的护照丢了。", "zh-TW": "我的護照丟了。" },
            { "ko": "약국이 어디예요?", "local": "약국이 어디예요?", "en": "Where is the pharmacy?", "ja": "薬局はどこですか？", "vi": "Tiệm thuốc ở đâu?", "th": "ร้านขายยาอยู่ที่ไหน?", "zh-CN": "药店在哪里？", "zh-TW": "藥局在哪裡？" },
            { "ko": "경찰 불러주세요.", "local": "경찰 불러주세요.", "en": "Call the police.", "ja": "警察を呼んでください。", "vi": "Gọi cảnh sát.", "th": "ช่วยเรียกตำรวจด้วยครับ/ค่ะ", "zh-CN": "请报警。", "zh-TW": "請報警。" }
        ]
    }
};
