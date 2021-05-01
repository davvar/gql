import { Injectable } from '@nestjs/common';
import { CreateRegionInput } from './dto/create-region.input';
import { UpdateRegionInput } from './dto/update-region.input';

@Injectable()
export class RegionService {
  create(createRegionInput: CreateRegionInput) {
    return 'This action adds a new region';
  }

  findAll() {
    return `This action returns all region`;
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateRegionInput: UpdateRegionInput) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }
}
