import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ShodanService } from './shodan.service';

@ApiTags('Shodan')
@Controller('shodan')
export class ShodanController {
  constructor(private readonly shodanService: ShodanService) {}

  @Get('/ip')
  @ApiOperation({
    summary: 'Shodan CTI 정보 출력',
    description: '입력: ip주소',
  })
  async ip(@Query('ip') ip: string) {
    return await this.shodanService.ip(ip);
  }
}
