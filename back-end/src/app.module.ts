import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoController } from './geo/geo.controller';
import { GeoModule } from './geo/geo.module';
import { GeoService } from './geo/geo.service';

@Module({
  imports: [GeoModule],
  controllers: [AppController, GeoController],
  providers: [AppService, GeoService],
})
export class AppModule {}
