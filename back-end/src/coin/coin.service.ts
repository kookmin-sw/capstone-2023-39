import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { RequestCoinDto } from './dto/request/request-coin.dto';
import { ResponseCoinDto } from './dto/response/response-coin.dto';

@Injectable()
export class CoinService {
  getMinerInfo(requestCoinDto: RequestCoinDto) {
    const response: ResponseCoinDto = {
      Kind_coin: '1',
      price: '192.168.0.1',
      score: '37.012345678910',
      outer_ip: '127.012345678910',
      outer_port: 'SouthKorea',
      direction: 'Seoul',
    };
    return response;
  }
}
