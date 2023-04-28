import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { HttpModule } from '@nestjs/axios';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { ShodanService } from 'src/shodan/shodan.service';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useFactory: async () => ({
        node: process.env.ELASTICSEARCH_NODE,
        maxRetries: 10,
        requestTimeout: 60000,
      }),
    }),
    HttpModule
  ],
  controllers: [SearchController],
  providers: [SearchService,ShodanService],
  exports: [SearchService],
})
export class SearchModule {}
