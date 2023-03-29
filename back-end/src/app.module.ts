import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoController } from './geo/geo.controller';
import { GeoService } from './geo/geo.service';
import { CoinController } from './coin/coin.controller';
import { CoinService } from './coin/coin.service';
import { CoinModule } from './coin/coin.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [CoinModule, SearchModule],
  controllers: [AppController, GeoController, CoinController],
  providers: [AppService, GeoService, CoinService],
})
export class AppModule {}
