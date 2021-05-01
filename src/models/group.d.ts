type GroupName = 'Tenants'
type GroupFinance = 'admin' | 'view'

interface IGroup {
  finance: GroupFinance
  id: string
  name: GroupName
}
