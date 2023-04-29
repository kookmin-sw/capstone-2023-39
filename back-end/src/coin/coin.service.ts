import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { SearchService } from 'src/search/search.service';
import { RequestOuterDto } from './dto/request/request-outer.dto';
import { ResponseCoinDto } from './dto/response/response-coin.dto';

@Injectable()
export class CoinService {
  constructor(private readonly searchService: SearchService) {}

  async getOuterInfo(requestOuterDto: RequestOuterDto) {
    let ip: any;
    let port: any;
    console.log('first');
    const miner_ip_data = await this.searchService.search_coin_ip(
      requestOuterDto.ip,
    );
    console.log(miner_ip_data);
    miner_ip_data.results.map((item) => {
      ip = item['packets_from_outer_ip'];
      port = item['packets_from_outer_port'];
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

  async loadData() {
    // 지금 필요한가? 모르겠음
  }

  async getPacketAsymmetry(requestOuterDto: RequestOuterDto) {
    // user가 외부 ip 클릭 -> 그 외부 IP의 packets_from_inner_ip packets_from_outer_ip 비율을 보여줌

  }

  async getByteAsymmetry(requestOuterDto: RequestOuterDto) {
    // user가 외부 ip 클릭 -> 그 외부 IP의 packets_from_inner_ip bytes_from_outer_ip 비율을 보여줌
  }
}
