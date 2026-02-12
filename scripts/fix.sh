#!/bin/bash

# 색상 코드
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}=== Flask 앱 문제 자동 수정 ===${NC}\n"

# 1. static, templates 폴더 생성
echo -e "${GREEN}1. 폴더 구조 확인 및 생성${NC}"
mkdir -p static templates
echo "✅ static, templates 폴더 생성 완료"
echo ""

# 2. Git에서 최신 파일 가져오기
echo -e "${GREEN}2. Git 최신 버전 가져오기${NC}"
git pull origin main
echo ""

# 3. 파일 권한 설정
echo -e "${GREEN}3. 파일 권한 설정${NC}"
chmod 755 static/ templates/
chmod 644 static/*.css 2>/dev/null
chmod 644 templates/*.html 2>/dev/null
echo "✅ 권한 설정 완료"
echo ""

# 4. 기존 Flask 프로세스 종료
echo -e "${GREEN}4. 기존 Flask 프로세스 종료${NC}"
pkill -f app.py
sleep 2
echo "✅ 기존 프로세스 종료 완료"
echo ""

# 5. Flask 앱 재시작
echo -e "${GREEN}5. Flask 앱 재시작${NC}"
nohup python3 app.py > app.log 2>&1 &
sleep 3
echo "✅ Flask 앱 재시작 완료"
echo ""

# 6. 상태 확인
echo -e "${GREEN}6. 최종 상태 확인${NC}"
echo "Flask 프로세스:"
ps aux | grep app.py | grep -v grep

echo -e "\nstatic/style.css:"
if [ -f "static/style.css" ]; then
    echo -e "${GREEN}✅ 존재 ($(wc -c < static/style.css) bytes)${NC}"
else
    echo -e "${RED}❌ 파일 없음${NC}"
fi

echo -e "\ntemplates/index.html:"
if [ -f "templates/index.html" ]; then
    echo -e "${GREEN}✅ 존재 ($(wc -c < templates/index.html) bytes)${NC}"
else
    echo -e "${RED}❌ 파일 없음${NC}"
fi

echo ""
echo -e "${YELLOW}=== 수정 완료 ===${NC}"
echo ""
echo -e "${GREEN}이제 브라우저에서 Ctrl+Shift+R을 눌러 강제 새로고침하세요!${NC}"
