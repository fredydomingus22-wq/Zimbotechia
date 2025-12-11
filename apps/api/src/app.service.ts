import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      status: 'ok',
      service: 'Zimbotechia API',
      timestamp: new Date().toISOString()
    };
  }
}
