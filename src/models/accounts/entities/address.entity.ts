import { Field, ObjectType } from '@nestjs/graphql';
import { City } from 'src/models/cities/entities/city.entity';
import { Country } from 'src/models/countries/entities/country.entity';
import { Region } from 'src/models/regions/entities/region.entity';

@ObjectType()
export class Address implements IAddress {
  @Field(() => City, { nullable: true })
  city?: City;

  @Field(() => Region, { nullable: true })
  region?: IRegion;

  @Field(() => Country, { nullable: true })
  country?: ICountry;

  @Field(() => String)
  number: string;

  @Field(() => String)
  street: string;

  @Field(() => String)
  zip: string;
}
