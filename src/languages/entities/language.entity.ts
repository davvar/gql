import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';

export enum Locale {
  EN = 'EN',
  RU = 'RU',
  SK = 'SK',
}

registerEnumType(Locale, {
  name: 'Locale',
});

@ObjectType()
export class Language {
  @Field(() => String)
  name: string;

  @Field(() => Locale)
  short: Locale;

  @Field(() => String)
  id: string;
}
