
import { long } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

type dataResponse = {
  //출력구조
};

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
  ) {}

  async search_ip(ip: string) {
    let results = new Set();
    const response = await this.esService.search({
      index: '',
      body: {
        query: {
          match: {
            source: ip
          }
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
    let results = new Set();
    const response = await this.esService.search({
      index: '',
      body: {
        query: {
          range: {
            label: {
              gt: label_over
            }
          }
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }
}