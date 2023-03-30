// import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class RequestCoinDto {
  @ApiProperty({ description: '마이너 IP 주소' })
  ip: string;
}
