import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryService {
  findAll() {
    return `This action returns all country`;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }
}
