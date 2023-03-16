// import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class RequestIdDto {
  @ApiProperty({ description: 'id' })
  id: string;
}
