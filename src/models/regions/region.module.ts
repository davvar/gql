import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';

@Module({
  providers: [RegionResolver, RegionService]
})
export class RegionModule {}
