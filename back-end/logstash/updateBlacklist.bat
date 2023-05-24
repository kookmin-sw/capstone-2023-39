@echo off

set fileURL=https://minerstat.com/mining-pool-whitelist.txt
set csvPath=C:\backend\capstone-2023-39\data-processing\detect_miner\coin_blacklist.csv

echo CSV 파일을 업데이트합니다.

REM 파일 다운로드 및 CSV로 변환하여 저장하는 변환된 js 호출
node C:\backend\capstone-2023-39\back-end\convert\convertCSV.js