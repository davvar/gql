import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Region implements IRegion {
  @Field(() => String)
  alpha3: string;

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  regionId: string;
}
