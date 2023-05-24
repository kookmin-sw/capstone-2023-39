import { ApiProperty } from '@nestjs/swagger';

export class ResponseIdDto {
  @ApiProperty({ description: 'id(식별값)' })
  id: string;

  @ApiProperty({ description: 'ip' })
  ip: string;

  @ApiProperty({ description: '위도' })
  lat: string;

  @ApiProperty({ description: '경도' })
  long: string;

  @ApiProperty({ description: '국가' })
  country: string;

  @ApiProperty({ description: 'city' })
  city: string;

  @ApiProperty({ description: '도메인' })
  domain: string;
}
