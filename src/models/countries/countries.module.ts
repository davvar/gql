import { Module } from '@nestjs/common';
import { CountryResolver } from './countries.resolver';
import { CountryService } from './countries.service';

@Module({
  providers: [CountryResolver, CountryService],
})
export class CountriesModule {}
