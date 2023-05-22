import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoinService } from './coin.service';
import { RequestPoolDto } from './dto/request/request-pool.dto';

@ApiTags('Coin')
@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get('/get_pool_accessed_ip')
  @ApiOperation({
    summary: '특정 Pool에 접속한 IP 정보',
  })
  get_pool_accessed_ip(@Query('pool_ip') pool_ip: string) {
    return this.coinService.get_pool_accessed_ip(pool_ip);
  }

  @Get('/get_ordered_pool_list')
  @ApiOperation({
    summary: '특정 Pool에 접속한 IP 정보',
  })
  get_ordered_pool_list(
    @Query('start_date') start_date: string,
    @Query('end_date') end_date: string,
  ) {
    return this.coinService.get_ordered_pool_list(start_date, end_date);
  }
}
