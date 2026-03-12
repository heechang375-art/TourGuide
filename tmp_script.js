
    // ============================================================
    // 1. i18n ?뺤뀛?덈━ (Google Translate ?꾩쟾 ?쒓굅)
    // ============================================================
    const I18N = {
        ko: {
            tab_info:'?뺣낫', tab_phrases:'?뚰솕', tab_shopping:'?쇳븨', tab_calc:'?섏쑉', tab_check:'泥댄겕',
            weather_label:'?좎뵪', rate_label:'?섏쑉',
            translator_title:'踰덉뿭湲?, translator_placeholder:'踰덉뿭???댁슜 ?낅젰...',
            btn_to_local:'{lang}濡?, btn_to_ui:'?쒓뎅?대줈',
            tips_title:'??& 二쇱쓽?ы빆', tips_header:'??轅??, warnings_header:'?좑툘 二쇱쓽',
            apps_title:'?꾩닔 ??, slide_tips:'??쨌 二쇱쓽', slide_apps:'???ㅼ튂',
            allergy_title:'?뚮젅瑜닿린 ?쒗쁽', allergy_label:'?뚮젅瑜닿린 ?좏깮',
            shopping_title:'異붿쿇 ?쇳븨??, calc_title:'?섏쑉 怨꾩궛湲?, calc_btn:'怨꾩궛?섍린',
            calc_unit_msg:'{curr}??{unit} ?⑥쐞濡쒕쭔 ?섏쟾 媛?ν빀?덈떎',
            checklist_title:'?ы뻾 以鍮?泥댄겕由ъ뒪??, same_currency:'(媛숈? ?듯솕)',
            alert_empty:'踰덉뿭???댁슜???낅젰?댁＜?몄슂.',
            alert_translate_error:'踰덉뿭 以??ㅻ쪟媛 諛쒖깮?덉뒿?덈떎.',
            alert_enter_amount:'湲덉븸???낅젰?댁＜?몄슂.',
            alert_unit_adjust:'{curr}??{unit}?⑥쐞濡쒕쭔 ?섏쟾 媛?ν빀?덈떎.\n{val}?쇰줈 議곗젙?섏뿀?듬땲??'
        },
        ja: {
            tab_info:'?끻젿', tab_phrases:'鴉싪㈀', tab_shopping:'?룔깾?껁깞?녈궛', tab_calc:'?뷸쎘', tab_check:'?곥궒?껁궚',
            weather_label:'鸚⒵컱', rate_label:'?뷸쎘',
            translator_title:'玲삭㉢艅?, translator_placeholder:'玲삭㉢?쇻굥?끻??믣뀯??..',
            btn_to_local:'{lang}??, btn_to_ui:'?ζ쑍沃욁겦',
            tips_title:'?믡꺍??& 力ⓩ꼷', tips_header:'???믡꺍??, warnings_header:'?좑툘 力ⓩ꼷',
            apps_title:'恙낂젅?㏂깤??, slide_tips:'?믡꺍?덀꺕力ⓩ꼷', slide_apps:'?㏂깤??,
            allergy_title:'?㏂꺃?ャ궙?쇠〃??, allergy_label:'?㏂꺃?ャ궙?쇤겦??,
            shopping_title:'?듽걲?쇻굙?룔깾?껁깞?녈궛', calc_title:'?뷸쎘鼇덄츞艅?, calc_btn:'鼇덄츞?쇻굥',
            calc_unit_msg:'{curr}??unit}?섆퐤??겳訝→쎘??꺗?㎯걲',
            checklist_title:'?낁죱繹뽩굺?곥궒?껁궚?ゃ궧??, same_currency:'(?뚣걯?싪꺼)',
            alert_empty:'玲삭㉢?쇻굥?끻??믣뀯?쎼걮?╉걦?졼걬?꾠?,
            alert_translate_error:'玲삭㉢訝?겓?ⓦ꺀?쇈걣?븀뵟?쀣겲?쀣걼??,
            alert_enter_amount:'?묌죲?믣뀯?쎼걮?╉걦?졼걬?꾠?,
            alert_unit_adjust:'{curr}??unit}?섆퐤??겳訝→쎘??꺗?㎯걲??n{val}?ヨた?담걬?뚣겲?쀣걼??
        },
        vi: {
            tab_info:'Th척ng tin', tab_phrases:'H沼셢 tho梳죍', tab_shopping:'Mua s梳칖', tab_calc:'T沼?gi찼', tab_check:'Danh s찼ch',
            weather_label:'Th沼쓎 ti梳퓍', rate_label:'T沼?gi찼',
            translator_title:'D沼땉h thu梳춗', translator_placeholder:'Nh梳춑 n沼셢 dung c梳쬷 d沼땉h...',
            btn_to_local:'Sang {lang}', btn_to_ui:'Sang Ti梳퓆g Vi沼뇍',
            tips_title:'M梳퉛 & L튼u 첵', tips_header:'??M梳퉛 hay', warnings_header:'?좑툘 L튼u 첵',
            apps_title:'沼쮖g d沼쩸g c梳쬷 thi梳퓍', slide_tips:'M梳퉛 쨌 L튼u 첵', slide_apps:'C횪i 沼쯰g d沼쩸g',
            allergy_title:'Bi沼긳 휃梳죜 d沼?沼쯰g', allergy_label:'Ch沼뛫 d沼?沼쯰g',
            shopping_title:'Mua s梳칖 휃沼?xu梳쩿', calc_title:'M찼y t챠nh t沼?gi찼', calc_btn:'T챠nh to찼n',
            calc_unit_msg:'{curr} ch沼?휃沼뷼 휃튼沼즓 b沼셢 s沼?{unit}',
            checklist_title:'Danh s찼ch chu梳쯰 b沼?, same_currency:'(C첫ng ti沼걆 t沼?',
            alert_empty:'Vui l챵ng nh梳춑 n沼셢 dung c梳쬷 d沼땉h.',
            alert_translate_error:'휂찾 x梳즭 ra l沼뾦 khi d沼땉h.',
            alert_enter_amount:'Vui l챵ng nh梳춑 s沼?ti沼걆.',
            alert_unit_adjust:'{curr} ch沼?휃沼뷼 b沼셢 s沼?{unit}.\n휂찾 휃i沼걏 ch沼뎝h th횪nh {val}.'
        },
        th: {
            tab_info:'錫귖퉱錫?륫錫밝른', tab_phrases:'錫む툢錫쀠툢錫?, tab_shopping:'錫듺퉱錫?툤錫쎹릿仙됢툏', tab_calc:'錫?릴錫뺖르錫꿋퉩錫?툈', tab_check:'錫｀림錫№툈錫꿋르',
            weather_label:'錫?림錫곟림錫?, rate_label:'錫?릴錫뺖르錫꿋퉩錫?툈',
            translator_title:'仙곟툤錫?툩錫꿋릇錫?, translator_placeholder:'錫곟르錫?툈仙錫쇸막仙됢릎錫ム림錫쀠링仙댽툞仙됢릎錫뉋툈錫꿋르仙곟툤錫?..',
            btn_to_local:'仙錫쎹퉯錫?lang}', btn_to_ui:'仙錫쎹퉯錫쇸퉬錫쀠륭',
            tips_title:'仙錫꾝른仙뉋툝錫?릴錫?& 錫꾝립仙錫뺖막錫?툢', tips_header:'??仙錫꾝른仙뉋툝錫?릴錫?, warnings_header:'?좑툘 錫꾝립仙錫뺖막錫?툢',
            apps_title:'仙곟릎錫쎹툠錫듀퉰錫댽립仙錫쎹퉯錫?, slide_tips:'仙錫꾝른仙뉋툝錫?릴錫슿룅툌錫녀?錫뺖막錫?툢', slide_apps:'錫뺖릿錫붲툞錫긍퉱錫뉋퉩錫?툤',
            allergy_title:'錫곟림錫｀퉩錫む툝錫뉋릎錫꿋툈錫꿋르仙곟툧仙?, allergy_label:'仙錫?막錫?툈錫?림錫곟림錫｀퉩錫왽퉱',
            shopping_title:'錫귖릎錫뉋퉩錫쇸린錫쇸립', calc_title:'仙錫꾝르錫룅퉰錫?툏錫꾝릿錫붲릎錫긍툞錫｀림仙곟른錫?, calc_btn:'錫꾝립錫쇸름錫?,
            calc_unit_msg:'{curr} 仙곟른錫곟퉬錫붲퉱仙錫됢툧錫꿋린錫ム툢仙댽름錫?{unit}',
            checklist_title:'錫｀림錫№툈錫꿋르仙錫뺖르錫듀륭錫□툠仙댽릎錫뉋?錫쀠링仙댽륭錫?, same_currency:'(錫む툈錫멘른仙錫붲링錫№름錫곟릴錫?',
            alert_empty:'錫곟르錫멘툜錫꿋툈錫｀릎錫곟?錫쇸막仙됢릎錫ム림錫쀠링仙댽툞仙됢릎錫뉋툈錫꿋르仙곟툤錫?,
            alert_translate_error:'仙錫곟릿錫붲툊仙됢릎錫쒉릿錫붲툧錫?림錫붲툊錫볙린仙곟툤錫?,
            alert_enter_amount:'錫곟르錫멘툜錫꿋툈錫｀릎錫곟툑錫녀툢錫㏅툢仙錫뉋릿錫?,
            alert_unit_adjust:'{curr} 仙곟른錫곟퉬錫붲퉱仙錫됢툧錫꿋린錫ム툢仙댽름錫?{unit}\n錫쎹르錫긍툣仙錫쎹퉯錫?{val} 仙곟른仙됢름'
        },
        'zh-CN': {
            tab_info:'岳→겘', tab_phrases:'鴉싪캕', tab_shopping:'兀?돥', tab_calc:'黎뉒럤', tab_check:'歷끻뜒',
            weather_label:'鸚⒵컮', rate_label:'黎뉒럤',
            translator_title:'玲삭캂??, translator_placeholder:'渦볟뀯誤곭옐瑥묊쉪?끻?...',
            btn_to_local:'玲삭캂??lang}', btn_to_ui:'玲삭캂?먧릎??,
            tips_title:'?먪ㅊ & 力ⓩ꼷', tips_header:'??弱뤺눼鶯?, warnings_header:'?좑툘 力ⓩ꼷',
            apps_title:'恙끻쨭佯붺뵪', slide_tips:'?먪ㅊ쨌力ⓩ꼷', slide_apps:'若됭즳佯붺뵪',
            allergy_title:'瓦뉑븦烏②씨', allergy_label:'?됪떓瓦뉑븦窈?,
            shopping_title:'?②뜍兀?돥', calc_title:'黎뉒럤溫←츞??, calc_btn:'溫←츞',
            calc_unit_msg:'{curr}?よ꺗?묉뜟{unit}?꾢띷빊',
            checklist_title:'?낁죱?녶쨭歷끻뜒', same_currency:'(?멨릪兀㎩툈)',
            alert_empty:'瑥룩풏?θ쫨玲삭캂?꾢냵若밤?,
            alert_translate_error:'玲삭캂?뜹눣?곈뵗瑥??,
            alert_enter_amount:'瑥룩풏?ι뇫窯앫?,
            alert_unit_adjust:'{curr}?よ꺗?묉뜟{unit}?꾢띷빊??n藥꿱컘?답맏{val}??
        },
        'zh-TW': {
            tab_info:'蘊뉓쮭', tab_phrases:'?껇㈀', tab_shopping:'蘊쇘돥', tab_calc:'??럤', tab_check:'歷끻뼫',
            weather_label:'鸚⒵간', rate_label:'??럤',
            translator_title:'玲삭???, translator_placeholder:'雍멨뀯誤곭옐鈺?쉪?㎩?...',
            btn_to_local:'玲삭???lang}', btn_to_ui:'玲삭??먪퉩遙붶릎??,
            tips_title:'?먪ㅊ & 力ⓩ꼷', tips_header:'??弱뤸룓鹽?, warnings_header:'?좑툘 力ⓩ꼷',
            apps_title:'恙끻굺?됬뵪', slide_tips:'?먪ㅊ쨌力ⓩ꼷', slide_apps:'若됭짔?됬뵪',
            allergy_title:'?롦븦烏③걫', allergy_label:'?멩뱡?롦븦??,
            shopping_title:'?②뼣蘊쇘돥', calc_title:'??럤鼇덄츞??, calc_btn:'鼇덄츞',
            calc_unit_msg:'{curr}?よ꺗?뚧룢{unit}?꾢띷빖',
            checklist_title:'?낁죱繹뽩굺歷끻뼫', same_currency:'(?멨릪縕ⓨ묍)',
            alert_empty:'獄뗨섯?θ쫨玲삭??꾢뀱若밤?,
            alert_translate_error:'玲삭??귛눣?얗뙬沃ㅳ?,
            alert_enter_amount:'獄뗨섯?ι뇫窈띲?,
            alert_unit_adjust:'{curr}?よ꺗?뚧룢{unit}?꾢띷빖??n藥꿱た?당궨{val}??
        },
        en: {
            tab_info:'Info', tab_phrases:'Phrases', tab_shopping:'Shopping', tab_calc:'Exchange', tab_check:'Checklist',
            weather_label:'Weather', rate_label:'Rate',
            translator_title:'Translator', translator_placeholder:'Enter text to translate...',
            btn_to_local:'To {lang}', btn_to_ui:'To English',
            tips_title:'Tips & Warnings', tips_header:'??Tips', warnings_header:'?좑툘 Warnings',
            apps_title:'Essential Apps', slide_tips:'Tips 쨌 Warnings', slide_apps:'Install Apps',
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

    // t() : 踰덉뿭 ?ы띁
    function t(key, vars) {
        const dict = I18N[userSelectedLang] || I18N.ko;
        let str = dict[key] || I18N.ko[key] || key;
        if (vars) Object.keys(vars).forEach(k => { str = str.replace(new RegExp('{' + k + '}', 'g'), vars[k]); });
        return str;
    }

    // ============================================================
    // 2. ???곗씠??(?쒕쾭 ?놁씠 JS?먯꽌 愿由?- Jinja ?쒗뵆由??泥?
    // ============================================================
    const COUNTRIES_DATA = {{ countries|tojson }};
    const CHECKLIST_DATA = {{ checklist|tojson }};

    const CHECKLIST_CATEGORY_I18N = {
        '?뱥?꾩닔':   { ko:'?뱥 ?꾩닔',   ja:'?뱥 恙낂???,       vi:'?뱥 Thi梳퓍 y梳퓎',        th:'?뱥 錫댽립仙錫쎹퉯錫?,                'zh-CN':'?뱥 恙끻쨭',   'zh-TW':'?뱥 恙끻굺',   en:'?뱥 Essentials' },
        '?몭?섎쪟':   { ko:'?몭 ?섎쪟',   ja:'?몭 烏ｉ줊',         vi:'?몭 Qu梳쬷 찼o',          th:'?몭 仙錫む막仙됢릎錫쒉퉱錫?,              'zh-CN':'?몭 ?띹즳',   'zh-TW':'?몭 ?띹짔',   en:'?몭 Clothing' },
        '?뵆?꾩옄湲곌린':{ ko:'?뵆 ?꾩옄湲곌린',ja:'?뵆 ?삣춴艅잌솳',    vi:'?뵆 Thi梳퓍 b沼?휃i沼뇆 t沼?, th:'?뵆 錫?만錫쎹툈錫｀툜仙뚟릎錫닮?錫?퉯錫곟툠錫｀릎錫쇸릿錫곟릉仙?,'zh-CN':'?뵆 ?드춴溫얍쨭','zh-TW':'?뵆 ?삣춴鼇?굺',en:'?뵆 Electronics' },
        '?㎢?몃㈃/?꾩깮':{ ko:'?㎢ ?몃㈃/?꾩깮',ja:'?㎢ 域쀩씊?삭줇??, vi:'?㎢ V沼?sinh c찼 nh창n',  th:'?㎢ 錫귖릎錫뉋퉫錫듺퉱錫む퉰錫㏅툢錫뺖릴錫?,         'zh-CN':'?㎢ 域쀦선?ョ뵟','zh-TW':'?㎢ ?ζ킋烏쏁뵟',en:'?㎢ Toiletries' },
        '?럲吏?愿由?: { ko:'?럲 吏?愿由?,ja:'?럲 ?루돥嶸←릤',    vi:'?럲 Qu梳즢 l첵 h횪nh l첵',  th:'?럲 錫댽릴錫붲툈錫｀린仙錫쎹퉳錫?,            'zh-CN':'?럲 烏뚧쓮嶸←릤','zh-TW':'?럲 烏뚧쓮嶸←릤',en:'?럲 Packing' }
    };

    const CHECKLIST_ITEM_I18N = {
        '?ш텒 & ?щ낯':       { ko:'?ш텒 & ?щ낯',       ja:'?묆궧?앫꺖??& ?녈깞??,  vi:'H沼?chi梳퓎 & B梳즢 sao',      th:'錫ム툢錫긍툏錫む막錫??錫붲릿錫쇸툠錫꿋툏 & 錫む립仙錫쇸림',   'zh-CN':'?ㅷ뀱 & 鸚띶뜲餓?,    'zh-TW':'鈺루뀱 & 筽뉐뜲餓?,    en:'Passport & Copy' },
        '??났沅?:            { ko:'??났沅?,            ja:'?ょ㈉??,              vi:'V챕 m찼y bay',               th:'錫뺖릴仙뗠름仙錫꾝르錫룅퉰錫?툏錫싟릿錫?,           'zh-CN':'?븀ⅷ',             'zh-TW':'艅잏ⅷ',             en:'Flight Ticket' },
        '?ы뻾?먮낫??:         { ko:'?ы뻾?먮낫??,         ja:'?낁죱岳앶쇇',            vi:'B梳즣 hi沼긩 du l沼땉h',         th:'錫쎹르錫겯툈錫긍툢錫곟림錫｀?錫붲릿錫쇸툠錫꿋툏',         'zh-CN':'?낁죱岳앶솴',          'zh-TW':'?낁죱岳앶슞',          en:'Travel Insurance' },
        '?숈냼 ?덉빟?뺤씤??:    { ko:'?숈냼 ?덉빟?뺤씤??,    ja:'?쎼깇?ヤ틛榮꾤▶沃띷쎑',     vi:'X찼c nh梳춏 휃梳톞 ph챵ng',       th:'仙꺺툣錫№막錫쇸륭錫긍툢錫곟림錫｀툑錫?툏錫쀠링仙댽툧錫긍툈',     'zh-CN':'鵝뤷?窯꾥?簾??阿?,     'zh-TW':'鵝뤷??먫쮥閻븃첀??,     en:'Hotel Confirmation' },
        '鍮꾩옄(?꾩슂??':       { ko:'鍮꾩옄(?꾩슂??',       ja:'?볝궣(恙낁쫨?ゅ졃??',     vi:'Visa (n梳퓎 c梳쬷)',           th:'錫㏅링錫뗠퉰錫?(錫뽤퉱錫꿋툑錫녀?錫쎹퉯錫?',        'zh-CN':'嶺얕칮(倻귡?)',        'zh-TW':'怜썼춬(倻귡?)',        en:'Visa (if needed)' },
        '?몃옒釉??붾젢/濡쒓렇 移대뱶':{ ko:'?몃옒釉??붾젢/濡쒓렇 移대뱶',ja:'?덀꺀?쇻꺂?ャ꺖??,   vi:'Th梳?du l沼땉h',              th:'錫싟릴錫뺖르錫쀠퉰錫?툏仙錫쀠링仙댽륭錫?,           'zh-CN':'?낁죱?긷똿/??,       'zh-TW':'?낁죱?℡똿/??,       en:'Travel Wallet/Card' },
        '?꾧툑(?꾩? ?듯솕)':    { ko:'?꾧툑(?꾩? ?듯솕)',    ja:'?얍쑑?싪꺼??뤎??,       vi:'Ti沼걆 m梳톞 (ti沼걆 휃沼땇 ph튼퉤ng)',th:'仙錫뉋릿錫쇸릉錫?(錫む툈錫멘른仙錫뉋릿錫쇸툠仙됢릎錫뉋툟錫닮퉰錫?','zh-CN':'?곈뇫(壤볟쑑兀㎩툈)',     'zh-TW':'?얗뇫(?뜹쑑縕ⓨ묍)',     en:'Cash (local currency)' },
        'e-SIM/?꾩떆??:      { ko:'e-SIM/?꾩떆??,      ja:'e-SIM/?앫궞?껁깉WiFi',  vi:'e-SIM/WiFi t첬i',           th:'e-SIM/WiFi 錫왽툈錫왽림',          'zh-CN':'e-SIM/?뤺벴WiFi',   'zh-TW':'e-SIM/?②벴WiFi',   en:'e-SIM/Pocket WiFi' },
        '?띿샆 & ?묐쭚':       { ko:'?띿샆 & ?묐쭚',       ja:'訝뗧? & ?답툔',          vi:'휂沼?l처t & T梳쩿',             th:'錫듺만錫붲툓錫긍퉱錫쇸퉫錫쇸퉩錫?린錫뽤만錫뉋?錫쀠퉱錫?,       'zh-CN':'?낁。 & 熬쒎춴',       'zh-TW':'?㎬。 & 蜈ゅ춴',       en:'Underwear & Socks' },
        '?곸쓽':              { ko:'?곸쓽',              ja:'?덀긿?쀣궧',             vi:'횁o',                       th:'仙錫む막仙됢릎',                    'zh-CN':'訝딂。',             'zh-TW':'訝딂。',             en:'Tops' },
        '?섏쓽/?먰뵾??:        { ko:'?섏쓽/?먰뵾??,        ja:'?쒌깉?졼궧/??꺍?붵꺖??,  vi:'Qu梳쬷/V찼y li沼걆',            th:'錫곟림錫뉋?錫곟툏/錫듺만錫붲?錫붲르錫?,           'zh-CN':'訝뗨즳/瓦욆。獒?,       'zh-TW':'訝뗨짔/?ｈ。獒?,       en:'Bottoms/Dress' },
        '寃됱샆/媛?붽굔':        { ko:'寃됱샆/媛?붽굔',        ja:'?㏂궑?욍꺖/?ャ꺖?뉎궍?с꺍',vi:'횁o kho찼c/Cardigan',        th:'仙錫む막仙됢릎錫꾝른錫멘륫/錫꾝림錫｀퉴錫붲릿仙곟툈錫?,     'zh-CN':'鸚뽩쪞/凉烏?,         'zh-TW':'鸚뽩쪞/?뗨∥',         en:'Jacket/Cardigan' },
        '?좎샆':              { ko:'?좎샆',              ja:'?묆궦?ｃ깯',             vi:'휂沼?ng沼?,                   th:'錫듺만錫붲툢錫?툢',                  'zh-CN':'?↑。',             'zh-TW':'?↑。',             en:'Pajamas' },
        '?섏쁺蹂??대?/?鍮뚮씪)': { ko:'?섏쁺蹂??대?/?鍮뚮씪)',ja:'麗당?(?볝꺖???쀣꺖??', vi:'휂沼?b퉤i (b찾i bi沼긪/h沼?b퉤i)',th:'錫듺만錫붲름仙댽림錫№툢仙됢립 (錫듺림錫№릊錫꿋툝/錫왽많錫?', 'zh-CN':'力녘즳(役룡빼/力녔콬)',    'zh-TW':'力녘짔(役루걯/力녔콬)',    en:'Swimwear' },
        '?대룞??:            { ko:'?대룞??,            ja:'?밤깑?쇈궖??,            vi:'Gi횪y th沼?thao',            th:'錫｀릎錫뉋?錫쀠퉱錫꿋툥仙됢림仙꺺툣',             'zh-CN':'瓦먨뒯??,            'zh-TW':'?뗥땿??,            en:'Sneakers' },
        '?щ━???뚮뱾':        { ko:'?щ━???뚮뱾',        ja:'?밤꺁?껁깙/?듐꺍???,    vi:'D챕p/X훱ng 휃an',             th:'錫｀릎錫뉋?錫쀠퉱錫꿋퉩錫뺖린/錫｀릴錫붲릉仙됢툢',        'zh-CN':'?뽭엹/?됮엹',         'zh-TW':'?뽭엹/易쇤엹',         en:'Slippers/Sandals' },
        '?ㅻ쭏?명룿 異⑹쟾湲?:    { ko:'?ㅻ쭏?명룿 異⑹쟾湲?,    ja:'?밤깯?쎾뀉?삣솳',          vi:'S梳죅 휃i沼뇆 tho梳죍',           th:'錫쀠링仙댽툓錫꿋르仙뚟툑仙귖툠錫｀릅錫긍툧錫쀠퉴',         'zh-CN':'?뗦쑛?끿뵷??,         'zh-TW':'?뗦찣?낂쎔??,         en:'Phone Charger' },
        '蹂댁“諛고꽣由?:         { ko:'蹂댁“諛고꽣由?,         ja:'?㏂깘?ㅳ꺂?먦긿?녴꺁??,    vi:'Pin d沼?ph챵ng',             th:'錫왽림錫㏅?錫㏅릎錫｀퉴仙곟툣錫뉋툌仙?,            'zh-CN':'燁삣뒯?득틦',          'zh-TW':'烏뚦땿?삥틦',          en:'Power Bank' },
        '硫???대뙌???쇱?肄?':{ ko:'硫???대뙌???쇱?肄?',ja:'?욁꺂?곥궋??쀣궭??,     vi:'B沼?chuy沼긪 휃沼뷼 휃a n훱ng',   th:'錫?린仙곟툝錫쎹?錫뺖릎錫｀퉴錫ム른錫꿋륭錫｀린錫싟툣',       'zh-CN':'鸚싧뒣?썼쉬?εㅄ',       'zh-TW':'鸚싧뒣?썼퐠?ι젺',       en:'Multi Adapter' },
        '?명듃遺??쒕툝由?:      { ko:'?명듃遺??쒕툝由?,      ja:'?롢꺖?늁C/?욍깣?с긿??,  vi:'Laptop/M찼y t챠nh b梳즢g',     th:'仙곟른仙뉋툤錫쀠퉯錫?툤/仙곟툠仙뉋툣仙錫?퉯錫?,        'zh-CN':'寧붻???亮녔씮',       'zh-TW':'嶺녽쎔/亮녔씮',         en:'Laptop/Tablet' },
        '移대찓??& 硫붾え由ъ뭅??:{ ko:'移대찓??& 硫붾え由ъ뭅??,ja:'?ャ깳??& ?▲깴?ゃ궖?쇈깋',vi:'M찼y 梳즢h & Th梳?nh沼?,        th:'錫곟른仙됢릎錫뉋퉩錫?린仙錫□륫仙귖륫錫｀링仙댽툈錫꿋르仙뚟툝',    'zh-CN':'?멩쑛 & 耶섇궓??,      'zh-TW':'?멩찣 & 鼇섉넼??,      en:'Camera & Memory Card' },
        '?댁뼱??:            { ko:'?댁뼱??,            ja:'?ㅳ깶?쎼꺍',             vi:'Tai nghe',                 th:'錫ム많錫잀릴錫?,                   'zh-CN':'?녔쑛',             'zh-TW':'?녔찣',             en:'Earphones' },
        '媛쒖씤 ?몃㈃?꾧뎄':      { ko:'媛쒖씤 ?몃㈃?꾧뎄',      ja:'域쀩씊?ⓨ끁',             vi:'휂沼?v沼?sinh c찼 nh창n',       th:'錫?만錫쎹툈錫｀툜仙뚟릎錫꿋툣錫쇸퉱錫녀릉仙댽름錫쇸툞錫긍름',     'zh-CN':'訝や볶域쀦선?ⓨ뱚',       'zh-TW':'?뗤볶?ζ킋?ⓨ뱚',       en:'Toiletries' },
        '?좏겕由?:            { ko:'?좏겕由?,            ja:'?η꽱?묉???,            vi:'Kem ch沼몁g n梳칗g',           th:'錫꾝르錫듀륫錫곟릴錫쇸퉩錫붲툝',               'zh-CN':'?꿩솒??,            'zh-TW':'?꿩쎂阿?,            en:'Sunscreen' },
        '?ㅽ궓耳??湲곗큹':      { ko:'?ㅽ궓耳??湲곗큹',      ja:'?븀쨴?뽫꺌??,            vi:'D튼沼죒g da c퉤 b梳즢',          th:'錫쒉른錫닮툞錫졷릴錫볙툚仙뚟툣錫녀르錫멘툏錫쒉릿錫?,        'zh-CN':'?븀??ㅸ궎??,         'zh-TW':'?븀쨴岳앶쨰??,         en:'Basic Skincare' },
        '鍮꾩긽??:            { ko:'鍮꾩긽??,            ja:'躍멨굺??,               vi:'Thu沼멵 d沼?ph챵ng',           th:'錫№림錫됢만錫곟?錫됢릿錫?,                'zh-CN':'?ζ븨??뱚',          'zh-TW':'?ζ븨?ε뱚',          en:'Emergency Medicine' },
        '?뚰솕??:            { ko:'?뚰솕??,            ja:'?껇끂??,               vi:'Thu沼멵 ti챗u h처a',           th:'錫№림錫듺퉰錫㏅륭錫№퉰錫?륭',               'zh-CN':'易덂뙑??,            'zh-TW':'易덂뙑??,            en:'Digestive Medicine' },
        '吏?ъ젣':            { ko:'吏?ъ젣',            ja:'訝뗧뿢閭㏂굙',             vi:'Thu沼멵 ti챗u ch梳즭',          th:'錫№림仙곟툈仙됢툠仙됢릎錫뉋?錫む링錫?,            'zh-CN':'閭€내??,            'zh-TW':'閭®됭뿥',            en:'Anti-diarrheal' },
        '紐④린 湲고뵾??:        { ko:'紐④린 湲고뵾??,        ja:'?ラ솮?묆궧?쀣꺃??,        vi:'Thu沼멵 ch沼몁g mu沼뾦',         th:'錫む?錫쎹르錫№퉴錫곟릴錫쇸륭錫멘툏',             'zh-CN':'要김쉳??,            'zh-TW':'?꿱쉳易?,            en:'Mosquito Repellent' },
        '留덉뒪??:            { ko:'留덉뒪??,            ja:'?욁궧??,               vi:'Kh梳쯷 trang',               th:'錫ム툢仙됢림錫곟림錫곟릎錫쇸림錫□릴錫?,            'zh-CN':'?ｇ쉘',             'zh-TW':'?ｇ쉘',             en:'Mask' },
        '?ы뻾??罹먮━??媛諛?:  { ko:'?ы뻾??罹먮━??媛諛?, ja:'?밤꺖?꾠궞?쇈궧/?먦긿??,  vi:'Va li/T첬i du l沼땉h',        th:'錫곟르錫겯?錫쎹퉳錫꿋?錫붲릿錫쇸툠錫꿋툏',           'zh-CN':'?낁죱嶸???,         'zh-TW':'?낁죱嶸???,         en:'Luggage/Bag' },
        '?뺤텞 ?뚯슦移?:        { ko:'?뺤텞 ?뚯슦移?,        ja:'?㎫리?앫꺖??,            vi:'T첬i n챕n 휃沼?,               th:'錫뽤만錫뉋릎錫긍툝錫む만錫띭툖錫꿋툈錫꿋릅',            'zh-CN':'?뗧섄?띄볐熬?,         'zh-TW':'鶯볡리?띄킀熬?,         en:'Compression Pouch' },
        '?먮Ъ??:            { ko:'?먮Ъ??,            ja:'?쀤벵??,               vi:'沼?kh처a',                   th:'錫곟만錫띭퉩錫댽른仙뉋릎錫?,               'zh-CN':'??,               'zh-TW':'??,               en:'Padlock' },
        '紐?踰좉컻':           { ko:'紐?踰좉컻',           ja:'?띲긿??깞??꺖',          vi:'G沼멼 c沼?,                   th:'錫ム륫錫?툢錫｀릎錫뉋툌錫?,               'zh-CN':'窯덃옎',             'zh-TW':'?멩옎',             en:'Neck Pillow' },
        '?덈? & 洹留덇컻':      { ko:'?덈? & 洹留덇컻',      ja:'?㏂궎?욁궧??& ?녔젗',    vi:'M梳톞 n梳?ng沼?& N첬t tai',    th:'錫쀠링仙댽툤錫닮툝錫뺖림仙곟른錫겯툠錫듀퉰錫?만錫붲릊錫?,       'zh-CN':'?쇘쉘 & ?녑줊',       'zh-TW':'?쇘쉘 & ?녑줊',       en:'Eye Mask & Earplugs' },
        '?곗궛/?곕퉬':          { ko:'?곗궛/?곕퉬',          ja:'???с궎?녈궠?쇈깉',       vi:'횚/횁o m튼a',                 th:'錫｀퉰錫?仙錫む막仙됢릎錫곟릴錫쇸툦錫?,           'zh-CN':'?ⓧ폔/?②。',         'zh-TW':'?ⓨ굹/?②。',         en:'Umbrella/Raincoat' }
    };

    const ALLERGY_VOCAB = {
        shrimp: { ko: '새우', ja: 'えび', vi: 'tôm', th: 'กุ้ง', 'zh-CN': '虾', 'zh-TW': '蝦', en: 'shrimp' },
        crab: { ko: '게', ja: 'かに', vi: 'cua', th: 'ปู', 'zh-CN': '蟹', 'zh-TW': '蟹', en: 'crab' },
        shellfish: { ko: '조개/갑각류', ja: '貝類/甲殻類', vi: 'động vật có vỏ', th: 'หอยและสัตว์เปลือกแข็ง', 'zh-CN': '贝类/甲壳类', 'zh-TW': '貝類/甲殼類', en: 'shellfish' },
        peanut: { ko: '땅콩', ja: 'ピーナッツ', vi: 'đậu phộng', th: 'ถั่วลิสง', 'zh-CN': '花生', 'zh-TW': '花生', en: 'peanut' },
        egg: { ko: '계란', ja: '卵', vi: 'trứng', th: 'ไข่', 'zh-CN': '鸡蛋', 'zh-TW': '雞蛋', en: 'egg' },
        milk: { ko: '우유', ja: '牛乳', vi: 'sữa', th: 'นม', 'zh-CN': '牛奶', 'zh-TW': '牛奶', en: 'milk' },
        wheat: { ko: '밀', ja: '小麦', vi: 'lúa mì', th: 'ข้าวสาลี', 'zh-CN': '小麦', 'zh-TW': '小麥', en: 'wheat' },
        buckwheat: { ko: '메밀', ja: 'そば', vi: 'kiều mạch', th: 'บักวีต', 'zh-CN': '荞麦', 'zh-TW': '蕎麥', en: 'buckwheat' }
    };

    const LANG_NAMES = {
        ko:'?쒓뎅??, ja:'?ζ쑍沃?, vi:'Ti梳퓆g Vi沼뇍', th:'仙꾝툠錫?, 'zh-CN':'嶸鵝볞릎??, 'zh-TW':'濚곲쳱訝?뻼', en:'English'
    };

    const LANG_TO_CURRENCY = {
        ko:'KRW', ja:'JPY', vi:'VND', th:'THB', 'zh-CN':'TWD', 'zh-TW':'TWD', en:'USD'
    };

    // ============================================================
    // 3. ?곹깭
    // ============================================================
    let userSelectedLang = localStorage.getItem('selectedLang') || 'ko';
    let currentCountryId = new URLSearchParams(location.search).get('country') || 'osaka';
    let currentDisplayRate = 1;
    let sourceCurrency = 'JPY';
    let targetCurrency = 'KRW';

    // ============================================================
    // 4. UI ?띿뒪???쇨큵 援먯껜 (data-i18n)
    // ============================================================
    function applyI18n() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });
        // btn_to_local? ?꾩떆 ?몄뼱 湲곕컲
        const cityLang = COUNTRIES_DATA[currentCountryId]?.lang || 'en';
        const targetBtn = document.getElementById('targetLangBtn');
        if (targetBtn) {
            targetBtn.textContent = t('btn_to_local', {lang: LANG_NAMES[cityLang]});
        }
        // calcUnitMsg ?낅뜲?댄듃
        const calcUnitMsg = document.getElementById('calcUnitMsg');
        if (calcUnitMsg) calcUnitMsg.textContent = t('calc_unit_msg', {curr: sourceCurrency, unit: formatNumber(getUnit(sourceCurrency, targetCurrency))});
    }

    // ============================================================
    // 5. ?몄뼱 蹂寃?(reload ?놁쓬, localStorage ???
    // ============================================================
    function changeLang(langCode) {
        userSelectedLang = langCode;
        localStorage.setItem('selectedLang', langCode);
        updateCalcCurrencies();   // targetCurrency 癒쇱? ?명똿
        updateRateDisplay();      // 洹??ㅼ쓬 ?섏쑉 API ?몄텧
        applyI18n();
        updateTranslateButtons();
        updateAllergyPhrase();
        refreshWeatherDisplay();  // ?좎뵪 ?ㅻ챸???꾩옱 ?몄뼱濡??ы몴??        const _d = COUNTRIES_DATA[currentCountryId];
        if (_d) { renderCityContent(_d); applyI18n(); }
        renderChecklist();        // 泥댄겕由ъ뒪??移댄뀒怨좊━紐??щ젋?붾쭅
    }

    // ============================================================
    // 6. ?ы뻾吏 蹂寃?    // ============================================================
    function changeCity(cityId) {
        currentCountryId = cityId;
        const data = COUNTRIES_DATA[cityId];
        if (!data) return;
        sourceCurrency = data.currency;
        renderCityContent(data);
        updateRateDisplay();
        updateCalcCurrencies();
        applyI18n();
        updateTranslateButtons();
        updateAllergyPhrase();
        fetchWeather(data.lat, data.lon, data.city);
        // URL ?낅뜲?댄듃 (reload ?놁쓬)
        history.replaceState(null, '', '/?country=' + cityId);
    }

    // ============================================================
    // 7. ?꾩떆 肄섑뀗痢??뚮뜑留?    // ============================================================
    // ============================================================
    // 踰덉뿭 罹먯떆 + gtx 踰덉뿭 ?ы띁 (??寃쎄퀬 ?먮룞 踰덉뿭)
    // ============================================================
    const _transCache = {};

    async function gtxTranslate(text, tl) {
        if (tl === 'ko') return text;
        const key = tl + '|' + text;
        if (_transCache[key]) return _transCache[key];
        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;
            const res = await fetch(url);
            const json = await res.json();
            const result = json?.[0]?.map(s => s?.[0] || '').join('') || text;
            _transCache[key] = result;
            return result;
        } catch { return text; }
    }

    async function translateItems(items, tl) {
        if (tl === 'ko') return items;
        return Promise.all(items.map(item => gtxTranslate(item, tl)));
    }

    const COUNTRY_TO_STORE_REGION = {
        tokyo: 'JP',
        osaka: 'JP',
        fukuoka: 'JP',
        danang: 'VN',
        hochiminh: 'VN',
        bangkok: 'TH',
        taipei: 'TW',
        hongkong: 'HK',
        nyc: 'US',
        seoul: 'KR'
    };

    const APP_NAME_I18N = {
        '구글맵': { ko: '구글맵', ja: 'Googleマップ', vi: 'Google Maps', th: 'Google Maps', 'zh-CN': '谷歌地图', 'zh-TW': 'Google 地图', en: 'Google Maps' },
        'Google Maps': { ko: '구글맵', ja: 'Googleマップ', vi: 'Google Maps', th: 'Google Maps', 'zh-CN': '谷歌地图', 'zh-TW': 'Google 地图', en: 'Google Maps' },
        'Visit Japan Web': { ko: 'Visit Japan Web', ja: 'Visit Japan Web', vi: 'Visit Japan Web', th: 'Visit Japan Web', 'zh-CN': 'Visit Japan Web', 'zh-TW': 'Visit Japan Web', en: 'Visit Japan Web' },
        '오사카 e-패스': { ko: '오사카 e-패스', ja: 'Osaka e-Pass', vi: 'Osaka e-Pass', th: 'Osaka e-Pass', 'zh-CN': '大阪 e-Pass', 'zh-TW': '大阪 e-Pass', en: 'Osaka e-Pass' },
        '파파고': { ko: '파파고', ja: 'Papago', vi: 'Papago', th: 'Papago', 'zh-CN': 'Papago', 'zh-TW': 'Papago', en: 'Papago' },
        'Papago': { ko: '파파고', ja: 'Papago', vi: 'Papago', th: 'Papago', 'zh-CN': 'Papago', 'zh-TW': 'Papago', en: 'Papago' },
        'Grab': { ko: 'Grab', ja: 'Grab', vi: 'Grab', th: 'Grab', 'zh-CN': 'Grab', 'zh-TW': 'Grab', en: 'Grab' },
        'Bolt': { ko: 'Bolt', ja: 'Bolt', vi: 'Bolt', th: 'Bolt', 'zh-CN': 'Bolt', 'zh-TW': 'Bolt', en: 'Bolt' },
        'EasyWallet': { ko: 'EasyWallet', ja: 'EasyWallet', vi: 'EasyWallet', th: 'EasyWallet', 'zh-CN': 'EasyWallet', 'zh-TW': 'EasyWallet', en: 'EasyWallet' },
        'Uber': { ko: 'Uber', ja: 'Uber', vi: 'Uber', th: 'Uber', 'zh-CN': 'Uber', 'zh-TW': 'Uber', en: 'Uber' },
        'Octopus': { ko: 'Octopus', ja: 'Octopus', vi: 'Octopus', th: 'Octopus', 'zh-CN': '八达通', 'zh-TW': '八達通', en: 'Octopus' },
        'Yelp': { ko: 'Yelp', ja: 'Yelp', vi: 'Yelp', th: 'Yelp', 'zh-CN': 'Yelp', 'zh-TW': 'Yelp', en: 'Yelp' },
        'Naver Map': { ko: '네이버 지도', ja: 'Naver Map', vi: 'Naver Map', th: 'Naver Map', 'zh-CN': 'Naver 地图', 'zh-TW': 'Naver 地圖', en: 'Naver Map' },
        'Kakao T': { ko: '카카오 T', ja: 'Kakao T', vi: 'Kakao T', th: 'Kakao T', 'zh-CN': 'Kakao T', 'zh-TW': 'Kakao T', en: 'Kakao T' },
        'Catch Table': { ko: '캐치테이블', ja: 'Catch Table', vi: 'Catch Table', th: 'Catch Table', 'zh-CN': 'Catch Table', 'zh-TW': 'Catch Table', en: 'Catch Table' }
    };

    function getPlayStoreLocale(langCode) {
        return langCode === 'zh-CN' || langCode === 'zh-TW' ? langCode : langCode.split('-')[0];
    }

    function localizeAppName(name, langCode) {
        return APP_NAME_I18N[name]?.[langCode] || APP_NAME_I18N[name]?.en || name;
    }

    function localizeAppLink(link) {
        try {
            const url = new URL(link, window.location.origin);
            if (url.hostname.includes('play.google.com')) {
                url.searchParams.set('hl', getPlayStoreLocale(userSelectedLang));
                url.searchParams.set('gl', COUNTRY_TO_STORE_REGION[currentCountryId] || 'KR');
            }
            return url.toString();
        } catch {
            return link;
        }
    }

    function renderCityContent(data) {
        // ??二쇱쓽 ???몄뼱??留욊쾶 踰덉뿭 ???쒖떆
        const tipsList = document.getElementById('tipsList');
        const warningsList = document.getElementById('warningsList');
        const tl = userSelectedLang;

        // ?쇰떒 ?먮Ц(?쒓뎅?? 癒쇱? ?쒖떆
        if (tipsList) tipsList.innerHTML = data.tips.map(item => `<li>${item}</li>`).join('');
        if (warningsList) warningsList.innerHTML = data.warnings.map(w => `<li>${w}</li>`).join('');

        // ?쒓뎅?닿? ?꾨땲硫?踰덉뿭 ??援먯껜
        if (tl !== 'ko') {
            translateItems(data.tips, tl).then(translated => {
                if (tipsList) tipsList.innerHTML = translated.map(item => `<li>${item}</li>`).join('');
            });
            translateItems(data.warnings, tl).then(translated => {
                if (warningsList) warningsList.innerHTML = translated.map(w => `<li>${w}</li>`).join('');
            });
        }

        // ??        const appsList = document.getElementById('appsList');
        if (appsList) {
            const renderApps = (apps) => {
                appsList.innerHTML = apps.map(app => `
                <div class="app-item-compact">
                    <div class="app-icon-small"><i class="fa-solid fa-mobile-screen"></i></div>
                    <div class="app-info-small"><strong>${app.name}</strong><small>${app.desc}</small></div>
                    <a href="${localizeAppLink(app.link)}" target="_blank" rel="noopener noreferrer" class="app-btn-small">
                        <i class="fa-solid fa-download"></i>
                    </a>
                </div>`).join('');
            };
            renderApps(data.apps);
            const tl = userSelectedLang;
            if (tl !== 'ko') {
                Promise.all(data.apps.map(async app => ({
                    ...app,
                    name: localizeAppName(app.name, tl),
                    desc: await gtxTranslate(app.desc, tl)
                }))).then(renderApps);
            }
        }

        // ?쇳븨 ??踰덉뿭 ???쒖떆
        const shoppingGrid = document.getElementById('shoppingGrid');
        const renderShopping = (items) => {
            if (shoppingGrid) {
                shoppingGrid.innerHTML = items.map(item => `
                    <a href="https://www.google.com/search?q=${encodeURIComponent(data.city + ' ' + item)}&tbm=isch"
                       target="_blank" rel="noopener noreferrer" class="shop-item">
                        <i class="fa-solid fa-magnifying-glass"></i><span>${item}</span>
                    </a>`).join('');
            }
        };
        renderShopping(data.shopping);
        if (tl !== 'ko') {
            translateItems(data.shopping, tl).then(renderShopping);
        }

        // ?뚰솕 ??        renderPhrases(data.lang);
    }

    // ?뚰솕 ?곗씠??(怨듯넻 key濡?濡쒕뱶 - 湲곗〈 Jinja ?뚮뜑留??泥?
    function renderPhrases(cityLang) {
        const phraseData = COUNTRIES_DATA[currentCountryId]?.phrases;
        const tabs = document.getElementById('phraseTabs');
        const contents = document.getElementById('phraseContents');
        if (!tabs || !contents || !phraseData) return;

        const uiLang = userSelectedLang;
        const cats = Object.keys(phraseData);

        tabs.innerHTML = cats.map((cat, i) =>
            `<button class="phrase-tab-btn${i===0?' active':''}" onclick="showPhraseTab(event,'pcat${i}')">${cat}</button>`
        ).join('');

        contents.innerHTML = cats.map((cat, i) => `
            <div id="pcat${i}" class="phrase-tab-content${i===0?' active':''}">
                <div class="phrase-card-new">
                    ${phraseData[cat].map(p => `
                        <div class="phrase-item-new">
                            <div class="phrase-ko">${p[uiLang] || p.en || p.ko}</div>
                            <div class="phrase-local">${p.local}</div>
                        </div>`).join('')}
                </div>
            </div>`).join('');
    }

    // 泥댄겕由ъ뒪???뚮뜑留?    function renderChecklist() {
        const tabs = document.getElementById('checklistTabs');
        const contents = document.getElementById('checklistContents');
        if (!tabs || !contents) return;

        const cats = Object.keys(CHECKLIST_DATA);

        // ??踰꾪듉
        tabs.innerHTML = cats.map((cat, i) => {
            const label = (CHECKLIST_CATEGORY_I18N[cat] || {})[userSelectedLang] || cat;
            return `<button class="phrase-tab-btn${i===0?' active':''}" onclick="showChecklistTab(event,'chtab${i}')">${label}</button>`;
        }).join('');

        // ???댁슜
        contents.innerHTML = cats.map((cat, catIdx) => {
            const items = CHECKLIST_DATA[cat];
            const itemsHtml = items.map((item, i) => {
                const id = `chk_${catIdx}_${i}`;
                const checked = localStorage.getItem('chk_' + id) === '1';
                const itemLabel = (CHECKLIST_ITEM_I18N[item] || {})[userSelectedLang] || item;
                return `<div class="checklist-item">
                    <input type="checkbox" id="${id}" ${checked?'checked':''} onchange="saveCheck(this)">
                    <label for="${id}">${itemLabel}</label>
                </div>`;
            }).join('');
            return `<div id="chtab${catIdx}" class="phrase-tab-content${catIdx===0?' active':''}">${itemsHtml}</div>`;
        }).join('');
    }

    function showChecklistTab(e, tabId) {
        document.querySelectorAll('#checklistContents .phrase-tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('#checklistTabs .phrase-tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(tabId)?.classList.add('active');
        e.target.classList.add('active');
    }

    function saveCheck(el) {
        localStorage.setItem('chk_' + el.id, el.checked ? '1' : '0');
    }

    // ============================================================
    // 8. ?섏쑉
    // ============================================================
    async function fetchExchangeRate(from, to) {
        try {
            const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
            const data = await res.json();
            return data.rates[to] || 1;
        } catch { return 1; }
    }

    // ?좎뵪 ?ㅻ챸 ?ㅺ뎅??踰덉뿭 ?뚯씠釉?    const WEATHER_I18N = {
        ko: { '留묒쓬':'留묒쓬','?먮┝':'?먮┝','鍮?:'鍮?,'?댁뒳鍮?:'?댁뒳鍮?,'?뚯슦':'?뚯슦','??:'??,'?덇컻':'?덇컻','?곕Т':'?곕Т','?ㅼ븞媛?:'?ㅼ븞媛?,'癒쇱?':'癒쇱?','吏숈? ?덇컻':'吏숈? ?덇컻','?⑹궗':'?⑹궗','?붿궛??:'?붿궛??,'?뚰뭾':'?뚰뭾','?좊꽕?대룄':'?좊꽕?대룄' },
        ja: { '留묒쓬':'?담굦','?먮┝':'?뉎굤','鍮?:'??,'?댁뒳鍮?:'?㏝썾','?뚯슦':'?룬썾','??:'??,'?덇컻':'??,'?곕Т':'?숅쑇','?ㅼ븞媛?:'?꾦쑇','癒쇱?':'?귛〉','吏숈? ?덇컻':'嚥껈쑇','?⑹궗':'容꾤쟼','?붿궛??:'?ュ굇??,'?뚰뭾':'?밤궠?쇈꺂','?좊꽕?대룄':'塋쒎렌' },
        vi: { '留묒쓬':'Tr沼쓎 quang','?먮┝':'Nhi沼걏 m창y','鍮?:'M튼a','?댁뒳鍮?:'M튼a ph첫n','?뚯슦':'Gi척ng b찾o','??:'Tuy梳퓍','?덇컻':'S튼퉤ng m첫','?곕Т':'Kh처i m첫','?ㅼ븞媛?:'S튼퉤ng nh梳?,'癒쇱?':'B沼쩳','吏숈? ?덇컻':'S튼퉤ng d횪y','?⑹궗':'B찾o c찼t','?붿궛??:'Tro n첬i l沼춁','?뚰뭾':'Gi처 gi梳춗','?좊꽕?대룄':'L沼멵 xo찼y' },
        th: { '留묒쓬':'仙곟툝錫붲툑錫긍툝','?먮┝':'錫□링仙錫□툎','鍮?:'錫앧툢錫뺖툈','?댁뒳鍮?:'錫앧툢錫쎹르錫?륭','?뚯슦':'錫왽림錫№만錫앧툢錫잀퉱錫꿋툌錫겯툢錫?툏','??:'錫ム릿錫□린','?덇컻':'錫ム륫錫?툈','?곕Т':'錫꾝름錫긍툢錫ム륫錫?툈','?ㅼ븞媛?:'錫ム륫錫?툈錫싟림錫?,'癒쇱?':'錫앧만仙댽툢','吏숈? ?덇컻':'錫ム륫錫?툈錫ム툢錫?,'?⑹궗':'錫왽림錫№만錫쀠르錫꿋륭','?붿궛??:'仙錫뽤퉱錫꿋툩錫밝?錫귖림仙꾝툨','?뚰뭾':'錫왽림錫№만錫앧툢錫곟르錫겯퉪錫듺툈','?좊꽕?대룄':'錫왽림錫№만錫쀠릎錫｀퉴錫쇸림仙귖툝' },
        'zh-CN': { '留묒쓬':'?닷ㄹ','?먮┝':'鸚싦틧','鍮?:'訝뗩썾','?댁뒳鍮?:'驪쎿캒??,'?뚯슦':'?룡슫','??:'訝뗩쎀','?덇컻':'??,'?곕Т':'?잓쎗','?ㅼ븞媛?:'?꾦쎗','癒쇱?':'亦쇿컲','吏숈? ?덇컻':'役볣쎗','?⑹궗':'亦쇿컲??,'?붿궛??:'?ュ굇??,'?뚰뭾':'繇?,'?좊꽕?대룄':'榕쇿뜼繇? },
        'zh-TW': { '留묒쓬':'?닷ㄹ','?먮┝':'鸚싮쎊','鍮?:'訝뗩썾','?댁뒳鍮?:'驪쎿캒??,'?뚯슦':'?룡슫','??:'訝뗩쎀','?덇컻':'??,'?곕Т':'?숅쑇','?ㅼ븞媛?:'?꾦쑇','癒쇱?':'亦쇿〉','吏숈? ?덇컻':'嚥껈쑇','?⑹궗':'亦쇿〉??,'?붿궛??:'?ュ굇??,'?뚰뭾':'窯?,'?좊꽕?대룄':'榕띷뜴窯? },
        en: { '留묒쓬':'Clear','?먮┝':'Cloudy','鍮?:'Rain','?댁뒳鍮?:'Drizzle','?뚯슦':'Thunderstorm','??:'Snow','?덇컻':'Fog','?곕Т':'Smoke','?ㅼ븞媛?:'Haze','癒쇱?':'Dust','吏숈? ?덇컻':'Dense Fog','?⑹궗':'Sand','?붿궛??:'Ash','?뚰뭾':'Squall','?좊꽕?대룄':'Tornado' }
    };

    function translateWeatherDesc(koDesc) {
        const table = WEATHER_I18N[userSelectedLang] || WEATHER_I18N.en;
        return table[koDesc] || koDesc;
    }

    // 留덉?留됱쑝濡?諛쏆? ?좎뵪 ?뺣낫 罹먯떆 (?몄뼱 蹂寃????ы몴?쒖슜)
    let _lastWeather = null;

    async function fetchWeather(lat, lon, cityName) {
        const el = document.getElementById('weatherDisplay');
        if (!el) return;
        el.textContent = '...';
        try {
            // 諛깆뿏??Flask API ?ъ슜 (OpenWeatherMap ?ㅻ뒗 ?쒕쾭?먯꽌 愿由?
            const res = await fetch(`/api/weather/${encodeURIComponent(cityName)}`);
            const json = await res.json();
            _lastWeather = { cityName, temp: json.temp, descKo: json.desc };
            el.textContent = `${cityName} ${json.temp}째C ${translateWeatherDesc(json.desc)}`;
        } catch(e) {
            el.textContent = `${cityName} -`;
        }
    }

    function refreshWeatherDisplay() {
        if (!_lastWeather) return;
        const el = document.getElementById('weatherDisplay');
        if (el) el.textContent = `${_lastWeather.cityName} ${_lastWeather.temp}째C ${translateWeatherDesc(_lastWeather.descKo)}`;
    }

    // ?듯솕蹂??섏쟾??理쒖냼 ?⑥쐞
    // 怨꾩궛湲곗슜 ?섏쟾 理쒖냼 ?⑥쐞 (?낅젰媛?諛섏삱由?湲곗?)
    const CURRENCY_UNIT = {
        JPY: 100,
        VND: 100,
    };

    function getUnit(sourceCurrency, targetCurrency) {
        return CURRENCY_UNIT[sourceCurrency] || 1;
    }

    // 寃곌낵媛??щ㎎: ?뚯닔??2?먮━, 泥쒕떒??肄ㅻ쭏
    function formatResult(value) {
        const fixed = value.toFixed(2).replace(/\.00$/, '');
        const parts = fixed.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    // ?곷떒 移??꾩슜: target 湲곗? 蹂닿린 醫뗭? ?⑥쐞 ?먮룞 怨꾩궛
    // - KRW쨌JPY ???뺤닔 ?듯솕: 寃곌낵 1 ?댁긽 ?섏삤??理쒖냼 ?⑥쐞
    // - USD쨌EUR ???뚯닔 ?듯솕: 寃곌낵 0.01 ?댁긽 ?섏삤??理쒖냼 ?⑥쐞 (?뚯닔??2?먮━ ?섎??덇쾶)
    const DECIMAL_CURRENCIES = ['USD', 'EUR'];
    function calcDisplayUnit(rate, targetCurrency) {
        const threshold = DECIMAL_CURRENCIES.includes(targetCurrency) ? 0.01 : 1;
        const steps = [1, 10, 100, 1000, 10000, 100000];
        for (const step of steps) {
            if (rate * step >= threshold) return step;
        }
        return 100000;
    }

    async function updateRateDisplay() {
        const rateDisplay = document.getElementById('rateDisplay');
        const rateCurrencyLabel = document.getElementById('rateCurrencyLabel');
        if (!rateDisplay) return;

        const langCurrency = LANG_TO_CURRENCY[userSelectedLang] || 'KRW';
        sourceCurrency = COUNTRIES_DATA[currentCountryId]?.currency || 'JPY';

        if (langCurrency === sourceCurrency) {
            rateDisplay.textContent = '-';
            if (rateCurrencyLabel) rateCurrencyLabel.textContent = t('same_currency');
            targetCurrency = sourceCurrency;
            currentDisplayRate = 1;
            return;
        }

        targetCurrency = langCurrency;
        rateDisplay.textContent = '...';

        const rate = await fetchExchangeRate(sourceCurrency, targetCurrency);
        currentDisplayRate = rate;

        // ?곷떒 移? 寃곌낵媛 1 ?댁긽 ?섏삤???⑥쐞 ?먮룞 ?좏깮
        const displayUnit = calcDisplayUnit(rate, targetCurrency);
        const rawValue = rate * displayUnit;

        rateDisplay.textContent = `${formatResult(rawValue)} ${targetCurrency}`;
        if (rateCurrencyLabel) rateCurrencyLabel.textContent = `${formatNumber(displayUnit)} ${sourceCurrency}`;
    }

    function updateCalcCurrencies() {
        sourceCurrency = COUNTRIES_DATA[currentCountryId]?.currency || 'JPY';
        targetCurrency = LANG_TO_CURRENCY[userSelectedLang] || 'KRW';
        const src = document.getElementById('calcSourceCurrency');
        const tgt = document.getElementById('calcTargetCurrency');
        const unitInfo = document.getElementById('calcUnitInfo');
        const unitMsg = document.getElementById('calcUnitMsg');
        if (src) src.textContent = sourceCurrency;
        if (tgt) tgt.textContent = targetCurrency;
        if (unitInfo) unitInfo.style.display = (getUnit(sourceCurrency, targetCurrency) > 1) ? 'flex' : 'none';
        if (unitMsg) unitMsg.textContent = t('calc_unit_msg', {curr: sourceCurrency, unit: formatNumber(getUnit(sourceCurrency, targetCurrency))});
    }

    function calculateExchange() {
        const fi = document.getElementById('foreignInput');
        const ko = document.getElementById('krwOutput');
        let val = parseFloat(removeCommas(fi.value));
        if (!val || isNaN(val)) { alert(t('alert_enter_amount')); return; }

        // ?듯솕蹂?理쒖냼 ?섏쟾 ?⑥쐞濡?諛섏삱由?(0???섎㈃ 理쒖냼 ?⑥쐞濡??щ┝)
        const unit = getUnit(sourceCurrency, targetCurrency);
        if (unit > 1) {
            let rounded = Math.round(val / unit) * unit;
            if (rounded === 0) rounded = unit;  // 理쒖냼 ?⑥쐞 誘몃쭔?대㈃ 1?⑥쐞濡??щ┝
            if (rounded !== val) {
                fi.value = formatNumber(rounded);
                val = rounded;
                alert(t('alert_unit_adjust', {curr: sourceCurrency, unit: formatNumber(unit), val: formatNumber(rounded)}));
            }
        }

        const rawResult = val * currentDisplayRate;
        ko.value = formatResult(rawResult) + ' ' + targetCurrency;
    }

    // ============================================================
    // 9. 踰덉뿭湲?    // ============================================================
    function updateTranslateButtons() {
        const cityLang = COUNTRIES_DATA[currentCountryId]?.lang || 'en';
        const targetBtn = document.getElementById('targetLangBtn');
        const reverseBtn = document.getElementById('reverseBtn');
        if (targetBtn) targetBtn.textContent = t('btn_to_local', {lang: LANG_NAMES[cityLang]});
        if (reverseBtn) reverseBtn.textContent = t('btn_to_ui');
    }

    function translateAction(mode) {
        const text = document.getElementById('sourceText').value;
        if (!text) { alert(t('alert_empty')); return; }
        const cityLang = COUNTRIES_DATA[currentCountryId]?.lang || 'en';
        const targetLang = mode === 'target' ? cityLang : userSelectedLang;
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`)
            .then(r => r.json())
            .then(data => {
                const rb = document.getElementById('transResult');
                if (data?.[0]?.[0]?.[0]) { rb.innerText = data[0][0][0]; rb.style.display = 'block'; }
            })
            .catch(() => alert(t('alert_translate_error')));
    }

    // ============================================================
    // 10. ?뚮젅瑜닿린
    // ============================================================
    function buildAllergySentence(lang, itemText) {
        const tpl = {
            ko: `${itemText} 알레르기가 있어요.`,
            ja: `${itemText} アレルギーがあります。`,
            vi: `Tôi bị dị ứng ${itemText}.`,
            th: `ฉันแพ้${itemText}`,
            'zh-CN': `我对${itemText}过敏。`,
            'zh-TW': `我對${itemText}過敏。`,
            en: `I am allergic to ${itemText}.`
        };
        return tpl[lang] || tpl.en;
    }

    function updateAllergyPhrase() {
        const sel = document.getElementById('allergySelector');
        const koEl = document.getElementById('allergyKoPhrase');
        const localEl = document.getElementById('allergyLocalPhrase');
        if (!sel || !koEl || !localEl) return;
        const vocab = ALLERGY_VOCAB[sel.value];
        if (!vocab) return;
        const uiLang = userSelectedLang || 'ko';
        const cityLang = COUNTRIES_DATA[currentCountryId]?.lang || 'en';
        const uiItemText = vocab[uiLang] || vocab.en || vocab.ko;
        const localItemText = vocab[cityLang] || vocab.en || vocab.ko;
        koEl.textContent = buildAllergySentence(uiLang, uiItemText);
        localEl.textContent = buildAllergySentence(cityLang, localItemText);
    }

    // ============================================================
    // 11. ?щ씪?대뜑 / ??    // ============================================================
    function goInfoSlide(index) {
        const track = document.getElementById('infoSliderTrack');
        if (!track) return;
        track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
        setActiveInfoSlideBtn(index);
    }

    function syncInfoSlideNav() {
        const track = document.getElementById('infoSliderTrack');
        if (!track) return;
        setActiveInfoSlideBtn(Math.round(track.scrollLeft / Math.max(track.clientWidth, 1)));
    }

    function setActiveInfoSlideBtn(index) {
        document.querySelectorAll('#infoSliderNav .info-slider-btn').forEach((btn, idx) => {
            btn.classList.toggle('active', idx === index);
        });
    }

    function showTab(event, id) {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        event.currentTarget.classList.add('active');
    }

    function showPhraseTab(event, id) {
        document.querySelectorAll('.phrase-tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.phrase-tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        event.currentTarget.classList.add('active');
    }

    // ============================================================
    // 12. ?좏떥
    // ============================================================
    function formatNumber(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
    function removeCommas(s) { return s.replace(/,/g, ''); }

    // ============================================================
    // 13. 珥덇린??    // ============================================================
    document.addEventListener('DOMContentLoaded', function() {
        // ?몄뼱 ?좏깮湲?蹂듭썝
        const langSel = document.getElementById('langSelector');
        if (langSel) langSel.value = userSelectedLang;

        // ?꾩떆 ?좏깮湲??ㅼ젙
        const citySel = document.getElementById('countrySelector');
        if (citySel) citySel.value = currentCountryId;

        // 肄섑뀗痢??뚮뜑留?        const data = COUNTRIES_DATA[currentCountryId];
        if (data) { sourceCurrency = data.currency; renderCityContent(data); fetchWeather(data.lat, data.lon, data.city); }
        renderChecklist();

        // ?섏쑉 ?낅젰 ?щ㎎
        const fi = document.getElementById('foreignInput');
        if (fi) fi.addEventListener('input', function(e) {
            let v = removeCommas(e.target.value);
            if (v && !isNaN(v)) e.target.value = formatNumber(v);
        });

        // i18n ?곸슜
        applyI18n();
        updateTranslateButtons();
        updateAllergyPhrase();
        updateCalcCurrencies();
        updateRateDisplay();
        syncInfoSlideNav();
    });
    