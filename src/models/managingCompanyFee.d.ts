interface IManagingCompanyFee {
  managingCompany: IManagingCompany;
  start: string;
  end: string;
  /** Fee of the company in percents */
  remuneration: number;
}
