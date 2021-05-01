import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Region } from './entities/region.entity';
import { RegionService } from './region.service';

@Resolver(() => Region)
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}

  @Query(() => [Region], { name: 'regions' })
  findAll() {
    return this.regionService.findAll();
  }

  @Query(() => Region, { name: 'region' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.regionService.findOne(id);
  }
}
