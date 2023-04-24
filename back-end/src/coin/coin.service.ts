import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { SearchService } from 'src/search/search.service';
import { RequestCoinDto } from './dto/request/request-coin.dto';
import { ResponseCoinDto } from './dto/response/response-coin.dto';

@Injectable()
export class CoinService {
  constructor(private readonly searchService: SearchService) {}

  async getMinerInfo(requestCoinDto: RequestCoinDto) {
    let ip: any;
    let port: any;

    const miner_ip_data = await this.searchService.search_ip(requestCoinDto.ip);
    miner_ip_data.results.map((item) => {
      ip = item['destination'];
      port = item['dst_port'];
    });

    const response: ResponseCoinDto = {
      Kind_coin: '1',
      price: '192.168.0.1',
      score: '37.012345678910',
      outer_ip: ip,
      outer_port: port,
      direction: 'Seoul',
    };
    return response;
  }
}
