import { ApiProperty } from '@nestjs/swagger';

export class ResponseCoinListDto {
  @ApiProperty()
  pool_names: string;
  pool_ips: string;
  counts: string;
}
