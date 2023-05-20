import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/ip')
  @ApiOperation({
    summary: '해당 ip의 접속 내역 및 분석 결과',
    description: '입력: ip주소',
  })
  async search_ip(@Query('ip') ip: string) {
    return await this.searchService.search_ip(ip);
  }

  @Get('/date')
  @ApiOperation({
    summary: '해당 기간의 접속 내역 및 분석 결과',
    description: '입력: 검색 시작일, 종료일',
  })
  async search_date(@Query('date_start') date_start: string,@Query('date_end') date_end: string) {
    return await this.searchService.search_date(date_start,date_end);
  }
}
