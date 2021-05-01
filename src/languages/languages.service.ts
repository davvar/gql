import { Injectable } from '@nestjs/common';
import repos from 'src/databases';

@Injectable()
export class LanguagesService {
  findAll() {
    return repos.languages.get();
  }

  findOne(id: string) {
    return repos.languages.getById(id);
  }
}
