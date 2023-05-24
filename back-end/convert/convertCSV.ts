import axios from 'axios';
import { createObjectCsvWriter } from 'csv-writer';

const fileURL = 'https://minerstat.com/mining-pool-whitelist.txt';
const csvPath = '/Users/mj/a.csv';

// 파일 다운로드 함수
async function downloadFile(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`파일 다운로드 중 오류가 발생했습니다: ${error}`);
  }
}

// CSV로 변환하여 저장하는 함수
function saveAsCsv(data, outputPath) {
  const csvWriter = createObjectCsvWriter({
    path: outputPath,
    header: [
      { id: 'domain', title: 'Domain' },
      { id: 'miner_ip', title: 'Miner IP' },
    ],
  });

  const records = data
    .split('\n')
    .slice(2) // 첫 두 줄(주석)을 제외하고 시작합니다.
    .map((line) => {
      const [domain, miner_ip] = line.split(' ');
      return { domain, miner_ip };
    });

  csvWriter
    .writeRecords(records)
    .then(() => {
      console.log('CSV 파일이 저장되었습니다.');
    })
    .catch((error) => {
      console.error('CSV 파일 저장 중 오류가 발생했습니다.', error);
    });
}

// 파일 다운로드 및 CSV로 변환하여 저장
async function downloadAndSaveAsCsv() {
  try {
    const data = await downloadFile(fileURL);
    saveAsCsv(data, csvPath);
  } catch (error) {
    console.error('오류가 발생했습니다.', error);
  }
}

downloadAndSaveAsCsv();
