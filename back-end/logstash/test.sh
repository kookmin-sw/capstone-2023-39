#!/bin/bash

# 파일 경로
fileURL="https://minerstat.com/mining-pool-whitelist.txt"
csvPath="/Users/mj/a.csv"

# 이전 해시값을 저장할 파일
hashFile="/Users/mj/hash.txt"

# 이전 해시값 읽기
previousHash=$(cat "$hashFile")

# 새로운 해시값 계산
newHash=$(curl -s "$fileURL" | shasum)

# 이전 해시값과 새로운 해시값 비교
if [ "$previousHash" != "$newHash" ]; then
    echo "파일이 변경되었습니다. CSV 파일을 업데이트합니다."

    # TypeScript 파일을 JavaScript 파일로 변환
    tsc /Users/mj/capstone-2023-39/back-end/convert/convertCSV.ts

    # 파일 다운로드 및 CSV로 변환하여 저장하는 변환된 js 호출
    node /Users/mj/capstone-2023-39/back-end/convert/convertCSV.js
    # 새로운 해시값 저장
    echo "$newHash" > "$hashFile"
else
    echo "파일이 변경되지 않았습니다."
fi
