"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var csv_writer_1 = require("csv-writer");
var fileURL = 'https://minerstat.com/mining-pool-whitelist.txt';
var csvPath = "C:/backend/capstone-2023-39/data-processing/detect_miner/coin_blacklist.csv";
// 파일 다운로드 함수
function downloadFile(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _a.sent();
                    throw new Error("\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ".concat(error_1));
                case 3: return [2 /*return*/];
            }
        });
    });
}
// CSV로 변환하여 저장하는 함수
function saveAsCsv(data, outputPath) {
    var csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
        path: outputPath,
        header: [
            { id: 'domain', title: 'Domain' },
            { id: 'miner_ip', title: 'Miner IP' },
        ],
    });
    var records = data
        .split('\n')
        .slice(2) // 첫 두 줄(주석)을 제외하고 시작합니다.
        .map(function (line) {
        var _a = line.split(' '), domain = _a[0], miner_ip = _a[1];
        return { domain: domain, miner_ip: miner_ip };
    });
    csvWriter
        .writeRecords(records)
        .then(function () {
        console.log('CSV 파일이 저장되었습니다.');
    })
        .catch(function (error) {
        console.error('CSV 파일 저장 중 오류가 발생했습니다.', error);
    });
}
// 파일 다운로드 및 CSV로 변환하여 저장
function downloadAndSaveAsCsv() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, downloadFile(fileURL)];
                case 1:
                    data = _a.sent();
                    saveAsCsv(data, csvPath);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('오류가 발생했습니다.', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
downloadAndSaveAsCsv();