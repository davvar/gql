interface ICost {
  id: string
  checked?: boolean
  details: ICostDetails
  costType: { id: string; name: string }
  managingCompany: IManagingCompany
  estate: IEstate
  creatorAccount: IUser
}

type ICostDetails = IInvoiceDetails
