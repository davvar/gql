import { Module } from '@nestjs/common';
import { CitiesResolver } from './cities.resolver';
import { CitiesService } from './cities.service';

@Module({
  providers: [CitiesResolver, CitiesService],
})
export class CitiesModule {}
