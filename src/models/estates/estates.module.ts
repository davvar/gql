import { Module } from '@nestjs/common';
import { EstateResolver } from './estates.resolver';
import { EstateService } from './estates.service';

@Module({
  providers: [EstateResolver, EstateService],
})
export class EstateModule {}
