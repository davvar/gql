import { Field, ObjectType } from '@nestjs/graphql';
import { Language } from 'src/models/languages/entities/language.entity';
import { Address } from './address.entity';

@ObjectType()
export class Account implements IUser {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  surname: string;

  @Field(() => String)
  photo: string;

  @Field(() => String)
  email: string;

  @Field(() => Boolean)
  isVerified: boolean;

  @Field(() => Number)
  timezone: number;

  @Field(() => String)
  nickname: string;

  @Field(() => String)
  invoicePrefix?: string;

  @Field(() => String)
  group: string;

  @Field(() => String)
  colorTheme: IColorTheme;

  @Field(() => Language)
  language: Language;

  @Field(() => String)
  currency: ICurrency;

  @Field(() => String)
  paidPlan: IPaidPlan;

  @Field(() => Address, { nullable: true })
  businessAddress?: Address;

  @Field(() => String)
  businessName?: string;

  @Field(() => String)
  password?: string;

  @Field(() => String)
  phone?: string;
}
