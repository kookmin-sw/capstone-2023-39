import { ApiProperty } from '@nestjs/swagger';

export class RequestGreynoiseDto {
  @ApiProperty({ description: 'ip주소' })
  ip: string;

  @ApiProperty({ description: 'Greynoise 라벨' })
  label: number;

  @ApiProperty({ description: 'Greynoise 공격 종류' })
  attack: string;
}
