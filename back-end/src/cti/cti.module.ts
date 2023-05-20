import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { CtiService } from './cti.service';
import { CtiController } from './cti.controller';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useFactory: async () => ({
        node: process.env.ELASTICSEARCH_NODE,
        maxRetries: 10,
        requestTimeout: 60000,
      }),
    }),
    HttpModule,
  ],
  controllers: [CtiController],
  providers: [CtiService],
  exports: [CtiService],
})
export class CtiModule {}
