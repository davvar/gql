interface IUser {
  id: string;
  name: string;
  surname: string;
  photo: string;
  email: string;
  isVerified: boolean;
  timezone: number;
  group: string;
  nickname: string;
  invoicePrefix?: string;

  colorTheme: IColorTheme;
  language: ILanguage;
  currency: ICurrency;
  paidPlan: IPaidPlan;
  businessAddress?: IAddress;

  businessName?: string;
  password?: string;
  phone?: string;
}
