import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/ip')
  async search_ip(@Query('ip') ip: string) {
    return await this.searchService.search_ip(ip);
  }

  @Get('/date')
  async search_date(@Query('date') date: string) {
    return await this.searchService.search_date(date);
  }

  @Get('/test_label')
  async search_label(@Query('label_over') label_over: string) {
    return await this.searchService.search_label_over(label_over);
  }
}
