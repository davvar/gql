import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { Account } from '../entities/account.entity';

@InputType()
export class CreateAccountInput extends Account {}
