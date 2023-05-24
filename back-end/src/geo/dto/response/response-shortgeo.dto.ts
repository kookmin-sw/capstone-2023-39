import { ApiProperty } from '@nestjs/swagger';

export class ResponseShortGeoDto {
  // 저 정보들이 리스트로 존재해야함

  @ApiProperty({ description: '위도' })
  lat: string;

  @ApiProperty({ description: '경도' })
  long: string;

  @ApiProperty({ description: '국가' })
  country: string;

  @ApiProperty({ description: '접속횟수' })
  count: string;
}
