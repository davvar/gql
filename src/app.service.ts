import { Injectable } from '@nestjs/common';
import repos from './databases';

@Injectable()
export class AppService {
  async getHello() {
    return repos.estates.get();
  }
}
