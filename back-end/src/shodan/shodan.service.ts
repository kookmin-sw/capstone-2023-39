import { long } from '@elastic/elasticsearch/lib/api/types';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ShodanService {
  constructor(private readonly httpService: HttpService) {}

  url = 'https://api.shodan.io/';

  async ip(ip: string): Promise<any> {
    var api_url = this.url + 'shodan/host/' + ip;
    api_url += '?key=' + process.env.SHODAN_KEY;
    var data = {
      httpStatus: 200,
      ip: '',
      country_code: '',
      country_name: '',
      region_code: '',
      city: '',
      longitude: '',
      latitude: '',
      hostname: '',
      domains: '',
      os: '',
      isp: '',
    };
    try {
      var shodanData = await this.httpService.get(api_url).toPromise();
      data.httpStatus = shodanData.status;
      data.ip = ip;
      data.country_code = shodanData.data.country_code;
      data.country_name = shodanData.data.country_name;
      data.region_code = shodanData.data.region_code;
      data.city = shodanData.data.city;
      data.longitude = shodanData.data.longitude;
      data.latitude = shodanData.data.latitude;
      data.hostname = shodanData.data.hostname;
      data.domains = shodanData.data.domains;
      data.os = shodanData.data.os;
      data.isp = shodanData.data.isp;
    } catch (e) {
      console.log(e);
      data.httpStatus = e.response.status || 500;
    }
    return data;
  }
}
