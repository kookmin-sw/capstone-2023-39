import { ApiProperty } from '@nestjs/swagger';

export class ResponseCoinDto {
  @ApiProperty()
  inner_ips: string;
  dates: string;
  doc_count: string;
}
