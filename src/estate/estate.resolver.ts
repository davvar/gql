import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EstateService } from './estate.service';
import { Test } from './entities/estate.entity';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';

// createTest(@Args('createTestInput') createTestInput: CreateTestInput) {

@Resolver(() => Test)
export class EstateResolver implements IEntity {
  constructor(private readonly testService: EstateService) {
    this.testService = new EstateService();
  }

  @Query(() => Test, { name: 'test' })
  get(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }

  @Query(() => Test, { name: 'test' })
  getById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Mutation(() => Test)
  create(data: Partial<any>): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Mutation(() => Test)
  update(id: string, data: Partial<any>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  @Mutation(() => Test)
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
