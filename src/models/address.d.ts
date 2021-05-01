interface IAddress {
  city?: ICity
  region?: IRegion
  country?: ICountry
  number: string
  street: string
  zip: string
}

interface IToDbAddress {
  city?: string
  number: string
  street: string
  zip: string
}
