// import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class RequestGeoDto {
  @ApiProperty({ description: 'range(좌상단부터 시계방향의 4개 점 입력)' })
  range: string[];

  @ApiProperty({ description: 'time(시간 범위 입력, 시작 - 종료 순)' })
  time: string[];
}
