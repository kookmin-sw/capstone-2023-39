import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ShodanService } from './shodan.service';
import { ShodanController } from './shodan.controller';

@Module({
  controllers: [ShodanController],
  providers: [ShodanService],
  imports: [HttpModule],
})
export class ShodanModule {}
