import { Injectable } from '@nestjs/common';
import { RequestGeoDto } from './dto/request/request-geo.dto';
import { RequestShortGeoDto } from './dto/request/request-shortgeo.dto';
import { RequestIpDto } from './dto/request/request-ip.dto';
import { ResponseGeoDto } from './dto/response/response-geo.dto';
import { ResponseShortGeoDto } from './dto/response/response-shortgeo.dto';
import { ResponseIdDto } from './dto/response/response-id.dto';
import { SearchService } from '../search/search.service';

@Injectable()
export class GeoService {
  constructor(private readonly searchService: SearchService) {}

  async getGeoInfo(requestGeoDto: RequestGeoDto) {
    const range = requestGeoDto.range;
    const time = requestGeoDto.time;
    // 지도의 범위 안에 있는 ip들의 정보 리턴

    let search_result = await this.searchService.search_range(range[3][0],range[1][0],range[3][1],range[1][1]);

    return search_result.results;
  }

  async getShortGeoInfo(requestGeoDto: RequestGeoDto) {
    // 지도의 범위 안에 있는 ip들의 정보 리턴

    //var search_result = await this.searchService.search_range("1","2","3","4");

    const response: ResponseShortGeoDto[] = [
      {
      lat: '37.012345678910',
      long: '127.012345678910',
      country: 'SouthKorea',
      count: '352',
    },
    {
      lat: '38.012345678910',
      long: '127.012345678910',
      country: 'SouthKorea',
      count: '111',
    }
  ];

    return response;
  }

  getDetailIpInfo(requestIpDto: RequestIpDto) {
    // 지도의 범위 안에 있는 ip들의 정보 리턴
    const id = requestIpDto.ip;
    const response: ResponseIdDto = {
      id: id,
      ip: '192.168.0.1',
      lat: '37.012345678910',
      long: '127.012345678910',
      country: 'SouthKorea',
      city: 'Seoul',
      domain: 'test.com',
    };
    return response;
  }
}
