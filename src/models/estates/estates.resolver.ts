import { Mutation, Query, Resolver } from '@nestjs/graphql';
import repos from 'src/databases';
import { Estate } from './entities/estate.entity';
import { EstateService } from './estates.service';

// createTest(@Args('createTestInput') createTestInput: CreateTestInput) {

@Resolver(() => Estate)
export class EstateResolver {
  constructor(private readonly testService: EstateService) {
    this.testService = new EstateService();
  }

  @Query(() => [Estate], { name: 'getEstates' })
  get(): Promise<Estate[]> {
    return repos.estates.get().then((res) => (res as any).data);
  }

  @Query(() => Estate)
  getById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Mutation(() => Estate)
  create(data: Partial<any>): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Mutation(() => Estate)
  update(id: string, data: Partial<any>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  @Mutation(() => Estate)
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
