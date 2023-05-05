import { long } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ShodanService } from 'src/shodan/shodan.service';

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
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly shodanService: ShodanService,
  ) {}

  async search_ip(ip: string) {
    const results = new Set();
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_INDEX_DATA,
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

    return {
      results: Array.from(results),
      total: response.hits.total,
      shodan: await this.shodanService.ip(ip),
    };
  }

  async search_pool_accessed_ip(pool_ip: string) {
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_COIN_DATA_INDEX,
      body: {
        query: {
          bool: {
            filter: {
              term: {
                pool_ip: pool_ip,
              },
            },
          },
        },
        aggs: {
          inner_ips: {
            terms: {
              field: 'inner_ip',
            },
            aggs: {
              timestamps: {
                top_hits: {
                  size: 100, // 100이 최대
                  sort: [
                    {
                      timestamp: {
                        order: 'desc',
                      },
                    },
                  ],
                  _source: {
                    includes: ['timestamp'],
                  },
                },
              },
            },
          },
        },
      },
    });
    return response.aggregations.inner_ips;
  }

  async search_label_over(label_over: string) {
    const results = new Set();
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_INDEX_DATA,
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
      index: process.env.ELASTICSEARCH_INDEX_DATA,
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
