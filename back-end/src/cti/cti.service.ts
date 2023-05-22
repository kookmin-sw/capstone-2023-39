import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class CtiService {
  constructor(
    private readonly esService: ElasticsearchService,
  ) {}

  async data(ip: string): Promise<any> {
    const results = new Set();
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_INDEX_CTI,
      body: {
      query: {
          match: {
              ip: ip
          }
      }
      },
    });
    if(response.hits.hits.length > 0)
      return response.hits.hits[0]['_source'];
    else
      return {}
  }

  async update_abusedip(ip: string,score: number): Promise<any> {
    const results = new Set();
    const response = await this.esService.updateByQuery({
      index: process.env.ELASTICSEARCH_INDEX_CTI,
      body: {
        script:{
          source: "ctx._source['Abused IP score'] = "+score+";",
          lang: "painless"
        },
      query: {
          match: {
              ip: ip
          }
      }
      },
    });
    var is_success:boolean = false;
    if(response.updated > 0)
      is_success = true

    return {
      status: is_success
    };
  }

  async update_greynoise(ip: string,label: number,attack: string): Promise<any> {
    const results = new Set();
    const response = await this.esService.updateByQuery({
      index: process.env.ELASTICSEARCH_INDEX_CTI,
      body: {
        script:{
          source: 
          "ctx._source['Grey Noise Label'] = "+label+";"+
          "ctx._source['Grey Noise Attack'] = \""+attack+"\";",
          lang: "painless"
        },
      query: {
          match: {
              ip: ip
          }
      }
      },
    });
    var is_success:boolean = false;
    if(response.updated > 0)
      is_success = true

    return {
      status: is_success
    };
  }
}
