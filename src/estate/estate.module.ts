import { Module } from '@nestjs/common';
import { EstateService } from './estate.service';
import { EstateResolver } from './estate.resolver';

@Module({
  providers: [EstateResolver, EstateService],
})
export class EstateModule {}
