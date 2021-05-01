import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { Account } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import repos from 'src/databases';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Mutation(() => Account)
  createAccount(
    @Args('createAccountInput') createAccountInput: CreateAccountInput,
  ) {
    return repos.accounts.create(createAccountInput);
  }

  @Query(() => [Account], { name: 'accounts' })
  findAll() {
    return repos.accounts.get();
  }

  @Query(() => Account, { name: 'account' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return repos.accounts.getById(id);
  }

  @Mutation(() => Account)
  updateAccount(
    @Args('updateAccountInput') updateAccountInput: UpdateAccountInput,
  ) {
    return repos.accounts.update(updateAccountInput.id, updateAccountInput);
  }

  @Mutation(() => Account)
  removeAccount(@Args('id', { type: () => String }) id: string) {
    return repos.accounts.delete(id);
  }
}
