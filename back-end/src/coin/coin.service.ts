import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { SearchService } from 'src/search/search.service';
import { ResponseCoinDto } from './dto/response/response-coin.dto';
import { ResponseCoinListDto } from './dto/response/response-coin-list.dto';

interface dataResponse_coin {
  //출력구조
  buckets;
}

@Injectable()
export class CoinService {
  constructor(private readonly searchService: SearchService) {}

  async get_pool_accessed_ip(pool_ip: string) {
    const result = (await this.searchService.search_pool_accessed_ip(
      pool_ip,
    )) as dataResponse_coin;
    const inner_ips = result.buckets.map((buckets) => buckets.key);
    const doc_count = result.buckets.map((buckets) => buckets.doc_count);
    const dates = result.buckets.map((bucket) =>
      bucket.date.hits.hits.map((hit) => hit._source.date),
    );

    const response: ResponseCoinDto = {
      inner_ips: inner_ips,
      doc_count: doc_count,
      dates: dates,
    };
    return response;
  }

  async get_ordered_pool_list(start_date: string, end_date: string) {
    const result = (await this.searchService.search_pool_list(
      start_date,
      end_date,
    )) as dataResponse_coin;
    const pool_names = result.buckets.map((buckets) => buckets.key);
    const counts = result.buckets.map((buckets) => buckets.doc_count);
    const pool_ips = result.buckets.flatMap((bucket) =>
      bucket.pool_ip.hits.hits.map((hit) => hit._source.pool_ip),
    );

    const response: ResponseCoinListDto = {
      pool_names: pool_names,
      pool_ips: pool_ips,
      counts: counts,
    };
    return response;
  }
}
