type PaidPlanName = 'Basic'

interface IPaidPlan {
  name: PaidPlanName
  price: number
  yearlyDiscount: number
  id: string
}
