import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly cityService: CitiesService) {}

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.cityService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.findOne(id);
  }
}
