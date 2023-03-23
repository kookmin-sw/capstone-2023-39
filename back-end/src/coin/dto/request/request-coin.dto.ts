// import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class RequestCoinDto {
  @ApiProperty({ description: '{0:ether, 1:monero, … } (일단 2개 확정)' })
  Kind_coin: string;

  @ApiProperty({
    description:
      '코인 종류만 보내면 백엔드에서 bitsum api 써서 직접 가져오는게 더 편할지도…?',
  })
  price: string;

  @ApiProperty({ description: 'range(0~100) theta 점수로  잘 … 만들기' })
  score: string;

  @ApiProperty({ description: '외부 ip주소' })
  outer_ip: string;

  @ApiProperty({ description: '외부 Port' })
  outer_port: string;

  @ApiProperty({ description: '{0:inbound, 1:outbound)' })
  direction: string;
}
