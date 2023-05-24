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
    description: '입력: ip주소',
  })
  get_pool_accessed_ip(@Query('pool_ip') pool_ip: string) {
    return this.coinService.get_pool_accessed_ip(pool_ip);
  }

  @Get('/get_ordered_pool_list')
  @ApiOperation({
    summary: '해당 기간의 Pool 접속 횟수 및 정보',
    description: '입력: 검색 시작일, 종료일',
  })
  get_ordered_pool_list(
    @Query('start_date') start_date: string,
    @Query('end_date') end_date: string,
  ) {
    return this.coinService.get_ordered_pool_list(start_date, end_date);
  }
}
