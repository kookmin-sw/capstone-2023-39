import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoinService } from './coin.service';
import { RequestOuterDto } from './dto/request/request-outer.dto';

@ApiTags('Coin')
@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Post('/OuterInfo')
  @ApiOperation({
    summary: '채굴 서버 정보',
    description: '입력: 채굴 서버 정보 \n출력: 채굴 서버의 detail info',
  })
  getMinerInfo(@Body() requestOuterDto: RequestOuterDto) {
    return this.coinService.getOuterInfo(requestOuterDto);
  }
}
