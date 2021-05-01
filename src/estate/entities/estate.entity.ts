import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Estate implements IEstate {
  @Field(() => String)
  creatorAccount: IUser;

  @Field(() => String)
  name: string;

  @Field(() => String)
  id: string;

  @Field(() => Boolean)
  creatorIsOwner: boolean;

  @Field(() => Int)
  recordNo: string;

  @Field(() => Int)
  owners: IEstateOwner[];

  @Field(() => Int)
  associatedAccounts: IAssociatedAccount[];

  @Field(() => Int)
  photos: IEstatePhoto[];

  @Field(() => Int)
  purchases: IPurchase[];

  @Field(() => Int)
  managingCompanyFees: IManagingCompanyFee[];

  @Field(() => Int)
  address?: IAddress;

  @Field(() => Int)
  primaryUse?: string;

  @Field(() => Int)
  mapData?: any;

  @Field(() => Int)
  wwwData?: IWwwData;

  @Field(() => Int)
  reconstructionDate?: string;

  @Field(() => Int)
  constructionDate?: string;
}
