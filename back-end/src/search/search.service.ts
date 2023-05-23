import { SearchHit } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ShodanService } from 'src/shodan/shodan.service';
import { CtiService } from 'src/cti/cti.service';

interface dataResponse {
  //출력구조
  id: number;
  ip: string;
  lat: string;
  long: string;
  country: string;
  city: string;
  domain: string;
  cti: Promise<any>;
}

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly shodanService: ShodanService,
    private readonly ctiService: CtiService
  ) {}

  async search_ip(ip: string) {
    const results = new Set();
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_INDEX_DATA,
      body: {
        size: 100,
        query: {
          match: {
            target_ip: ip,
          },
        },
        sort: [{ start_time: 'desc' }],
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
      cti: await this.ctiService.data(ip)
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
              date: {
                top_hits: {
                  size: 100, // 100이 최대
                  sort: [
                    {
                      date: {
                        order: 'desc',
                      },
                    },
                  ],
                  _source: {
                    includes: ['date'],
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

  async search_pool_list() {
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_COIN_DATA_INDEX,
      body: {
        size: 0,
        aggs: {
          pool_name_count: {
            terms: {
              field: 'pool_name',
              size: 100,
              order: { _count: 'desc' },
            },
            aggs: {
              pool_ip: {
                top_hits: {
                  size: 1,
                  _source: ['pool_ip'],
                },
              },
            },
          },
        },
      },
    });
    return response.aggregations.pool_name_count;
  }

  async search_date(date_start: string, date_end: string) {
    let results = new Set();
    let response = await this.esService.search({
      index: process.env.ELASTICSEARCH_INDEX_DATA,
      body: {
        size: 100,
        query: {
          range: {
            start_time: {
              gte: date_start + ' 00:00:00',
              lte: date_end + ' 23:59:59',
            },
          },
        },
        sort: [{ start_time: 'asc' }],
      },
    });
    const hits = response.hits.hits;
    results = await this.add_cti(hits);

    return {
      results: Array.from(results),
      total: response.hits.total,
    };
  }

  async add_cti(hits: SearchHit<unknown>[]){
      var result = new Set();
      await Promise.all(hits.map(async (item) => {
        var query_data = item._source;
        query_data['cti'] = await this.ctiService.data(query_data['target_ip']);
        result.add(query_data);
      }));
      return result;
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
