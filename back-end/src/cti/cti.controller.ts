import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CtiService } from './cti.service';
import { RequestAbusedipDto } from './request/request-abusedip.dto';
import { RequestGreynoiseDto } from './request/request-greynoise.dto';

@ApiTags('Cti')
@Controller('cti')
export class CtiController {
  constructor(private readonly ctiService: CtiService) {}

  @Get('/data')
  @ApiOperation({
    summary: 'Abused IP, Greynoise의 CTI 정보 출력',
    description: '입력: ip주소',
  })
  async data(@Query('ip') ip: string) {
    return await this.ctiService.data(ip);
  }

  @Post('/update/abusedip')
  @ApiOperation({
    summary: 'Abused IP CTI 정보 갱신',
    description: '입력: ip주소, Abused IP 점수',
  })
  async abusedip(@Body() param: RequestAbusedipDto) {
    return await this.ctiService.update_abusedip(param.ip,param.score);
  }

  @Post('/update/greynoise')
  @ApiOperation({
    summary: 'Greynoise CTI 정보 갱신',
    description: '입력: ip주소, Greynoise 라벨, Greynoise 공격 종류',
  })
  async ip(@Body() param: RequestGreynoiseDto) {
    return await this.ctiService.update_greynoise(param.ip,param.label,param.attack);
  }
}
