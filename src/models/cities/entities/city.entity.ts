import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field(() => String)
  id: string;

  @Field(() => String)
  regionId: string;

  @Field(() => String)
  alpha3: string;

  @Field(() => String)
  name: string;
}
