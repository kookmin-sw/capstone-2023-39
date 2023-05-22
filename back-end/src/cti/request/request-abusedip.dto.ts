import { ApiProperty } from '@nestjs/swagger';

export class RequestAbusedipDto {
  @ApiProperty({ description: 'ip주소' })
  ip: string;

  @ApiProperty({ description: 'Abused IP 점수' })
  score: number;
}
