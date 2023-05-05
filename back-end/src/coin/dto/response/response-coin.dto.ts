import { ApiProperty } from '@nestjs/swagger';

export class ResponseCoinDto {
  @ApiProperty()
  inner_ips: string;
  timestamps: string;
  doc_count: string;
}
