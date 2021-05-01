interface IInvoice {
  id: string;
  checked?: boolean;
  details: IInvoiceDetails;
  tenant: IUser;
  managingCompany: IManagingCompany;
  estate: IEstate;
  creatorAccount: IUser;
}

interface IInvoiceDetails {
  description: InvoiceDescriptionItem[];
  number: number;
  value: number;
  tax: number;
  issued: string;
  due: string;
  periodical: boolean;
  period: 'weekly' | 'monthly' | 'three_months' | 'yearly';
}

interface InvoiceDescriptionItem {
  id: string | number;
  product: 'RENT' | 'CAPEX' | 'OPEX' | 'TAX';
  description: string;
  quantity: number;
  value: number;
  rate: number;
}
