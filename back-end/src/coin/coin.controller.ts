import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoinService } from './coin.service';
import { RequestCoinDto } from './dto/request/request-coin.dto';

@ApiTags('Coin')
@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Post('/MinerInfo')
  @ApiOperation({
    summary: '이상탐지 된 마이너 정보',
    description: '입력: 마이너 정보 \n출력: 범위 안의 마이너들의 detail info',
  })
  getMinerInfo(@Body() requestCoinDto: RequestCoinDto) {
    return this.coinService.getMinerInfo(requestCoinDto);
  }
}
