#!/bin/bash

# 색상 코드
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Flask 앱 상태 진단 ===${NC}\n"

# 1. 현재 위치 확인
echo -e "${GREEN}1. 현재 디렉토리:${NC}"
pwd
echo ""

# 2. 파일 구조 확인
echo -e "${GREEN}2. 파일 구조:${NC}"
ls -la
echo ""

# 3. static 폴더 확인
echo -e "${GREEN}3. static 폴더 내용:${NC}"
if [ -d "static" ]; then
    ls -la static/
    if [ -f "static/style.css" ]; then
        echo -e "${GREEN}✅ style.css 파일 존재${NC}"
        echo "파일 크기: $(wc -c < static/style.css) bytes"
    else
        echo -e "${RED}❌ style.css 파일 없음!${NC}"
    fi
else
    echo -e "${RED}❌ static 폴더 없음!${NC}"
fi
echo ""

# 4. templates 폴더 확인
echo -e "${GREEN}4. templates 폴더 내용:${NC}"
if [ -d "templates" ]; then
    ls -la templates/
    if [ -f "templates/index.html" ]; then
        echo -e "${GREEN}✅ index.html 파일 존재${NC}"
    else
        echo -e "${RED}❌ index.html 파일 없음!${NC}"
    fi
else
    echo -e "${RED}❌ templates 폴더 없음!${NC}"
fi
echo ""

# 5. Flask 프로세스 확인
echo -e "${GREEN}5. 실행 중인 Flask 프로세스:${NC}"
ps aux | grep app.py | grep -v grep
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Flask 앱 실행 중${NC}"
else
    echo -e "${RED}❌ Flask 앱 실행 중이 아님${NC}"
fi
echo ""

# 6. 포트 사용 확인
echo -e "${GREEN}6. 포트 5000 사용 여부:${NC}"
netstat -tuln | grep 5000 || lsof -i :5000
echo ""

# 7. CSS 링크 확인
echo -e "${GREEN}7. index.html의 CSS 링크:${NC}"
if [ -f "templates/index.html" ]; then
    grep -n "stylesheet" templates/index.html
else
    echo -e "${RED}index.html 파일을 찾을 수 없습니다${NC}"
fi
echo ""

# 8. 권한 확인
echo -e "${GREEN}8. 파일 권한:${NC}"
ls -la static/style.css 2>/dev/null || echo "style.css 파일 없음"
echo ""

echo -e "${YELLOW}=== 진단 완료 ===${NC}"
echo ""
echo -e "${YELLOW}문제 해결 방법:${NC}"
echo "1. static/style.css 파일이 없으면: git pull 후 다시 확인"
echo "2. Flask가 실행 중이 아니면: python3 app.py 실행"
echo "3. 권한 문제가 있으면: chmod 644 static/style.css"
echo "4. 브라우저 캐시 문제: Ctrl+Shift+R (강제 새로고침)"
