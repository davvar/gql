import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country implements ICountry {
  @Field(() => String)
  alpha2: string;

  @Field(() => String)
  alpha3: string;

  @Field(() => String)
  code: string;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  eu: boolean;

  @Field(() => String)
  id: string;
}
