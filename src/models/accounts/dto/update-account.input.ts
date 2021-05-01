import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Account } from '../entities/account.entity';

@InputType()
export class UpdateAccountInput extends PartialType(Account) {
  @Field(() => String)
  id: string;
}
