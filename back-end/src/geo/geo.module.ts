import { Module } from '@nestjs/common';
import { SearchModule } from 'src/search/search.module';
import { SearchService } from 'src/search/search.service';
import { GeoController } from './geo.controller';
import { GeoService } from './geo.service';

@Module({
  controllers: [GeoController],
  providers: [GeoService],
  imports: [SearchModule],
})
export class GeoModule {}
