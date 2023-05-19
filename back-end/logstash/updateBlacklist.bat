@echo off

REM 파일 경로
set fileURL=https://minerstat.com/mining-pool-whitelist.txt
set csvPath=C:\Users\mj\a.csv

REM 이전 해시값을 저장할 파일
set hashFile=C:\Users\mj\hash.txt

REM 이전 해시값 읽기
set /p previousHash=<"%hashFile%"

REM 새로운 해시값 계산
for /f %%i in ('curl -s "%fileURL%" ^| shasum') do set newHash=%%i

REM 이전 해시값과 새로운 해시값 비교
if not "%previousHash%"=="%newHash%" (
    echo 파일이 변경되었습니다. CSV 파일을 업데이트합니다.

    REM TypeScript 파일을 JavaScript 파일로 변환
    tsc C:\Users\mj\capstone-2023-39\back-end\convert\convertCSV.ts

    REM 파일 다운로드 및 CSV로 변환하여 저장하는 변환된 js 호출
    node C:\Users\mj\capstone-2023-39\back-end\convert\convertCSV.js

    REM 새로운 해시값 저장
    echo %newHash% > "%hashFile%"
) else (
    echo 파일이 변경되지 않았습니다.
)
