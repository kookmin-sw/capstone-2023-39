// import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class RequestPoolDto {
  @ApiProperty({ description: 'Mining Pool Info' })
  pool_ip: number;
  pool_name: string;
}
