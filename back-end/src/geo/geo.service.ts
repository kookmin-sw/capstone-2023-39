import { Injectable } from '@nestjs/common';
import { RequestGeoDto } from './dto/request/request-geo.dto';
import { RequestIdDto } from './dto/request/request-id.dto';
import { ResponseGeoDto } from './dto/response/response-geo.dto';
import { ResponseIdDto } from './dto/response/response-id.dto';

@Injectable()
export class GeoService {
  getGeoInfo(requestGeoDto: RequestGeoDto) {
    const range = requestGeoDto.range;
    const time = requestGeoDto.time;
    // 지도의 범위 안에 있는 ip들의 정보 리턴
    const response: ResponseGeoDto = {
      id: '1',
      ip: '192.168.0.1',
      lat: '37.012345678910',
      long: '127.012345678910',
      country: 'SouthKorea',
      city: 'Seoul',
      domain: 'test.com',
    };

    return response;
  }

  getDetailIdInfo(requestIdDto: RequestIdDto) {
    // 지도의 범위 안에 있는 ip들의 정보 리턴
    const id = requestIdDto.id;
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
