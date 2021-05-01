interface IEstate {
  creatorAccount: IUser;
  name: string;
  id: string;
  creatorIsOwner: boolean;
  /**The number of the official document that says who is the owner of the real estate */
  recordNo: string;

  owners: IEstateOwner[];
  associatedAccounts: IAssociatedAccount[];
  photos: IEstatePhoto[];
  purchases: IPurchase[];
  managingCompanyFees: IManagingCompanyFee[];

  address?: IAddress;
  primaryUse?: string;
  mapData?: IMapData;
  wwwData?: IWwwData;
  reconstructionDate?: string;
  constructionDate?: string;
}

interface IEstatePhoto {
  isMain: boolean;
  path: string;
}

interface IWwwData {
  accommodation: 'property';
  activate: boolean;
  currencyId: string;
  header: string;
  isPublic: boolean;
  languages: string[];
  logoPath: string;
  ownUrl: string;
  subdomain: string;
}

interface IEstateOwner {
  name: string;
  isCompany: boolean;
  address: IAddress;
  metadata: any;
}
