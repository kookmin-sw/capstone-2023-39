import { long } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

interface dataResponse {
  //출력구조
  id: number;
  ip: string;
  lat: string;
  long: string;
  country: string;
  city: string;
  domain: string;
}

@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService) {}

  async search_ip(ip: string) {
    let results = new Set();
    let response = await this.esService.search({
      index: 'netflow',
      body: {
        query: {
          match: {
            target_ip: ip,
          },
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }

  async search_label_over(label_over: string) {
    const results = new Set();
    const response = await this.esService.search({
      index: 'netflow',
      body: {
        query: {
          range: {
            label: {
              gt: label_over,
            },
          },
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }

  async search_range(
    lat_start: string,
    lat_end: string,
    long_start: string,
    long_end: string,
  ) {
    const results = new Set();
    const response = await this.esService.search({
      index: 'netflow',
      size: 100,
      body: {
        query: {
          range: {
            label: {
              gt: 0,
            },
          },
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      const result = {
        id: 1,
        ip: item._source['source'],
        lat: '37.6100021',
        long: '126.9971053',
        country: 'SouthKorea',
        city: 'Seoul',
        domain: 'kookmin.ac.kr',
      };
      results.add(result);
    });

    return { total: response.hits.total, results: Array.from(results) };
  }
}