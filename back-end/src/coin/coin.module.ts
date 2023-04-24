import { Module } from '@nestjs/common';
import { SearchModule } from 'src/search/search.module';
import { SearchService } from 'src/search/search.service';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';

@Module({
  controllers: [CoinController],
  providers: [CoinService],
  imports: [SearchModule],
})
export class CoinModule {}
