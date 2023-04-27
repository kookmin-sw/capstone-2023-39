// import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class RequestIpDto {
  @ApiProperty({ description: 'ip' })
  ip: string;
}
