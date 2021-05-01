interface IPurchase {
  /** Fee of the estate agent */
  agentFee: number
  date: string
  price: number
  period: 'weekly' | 'monthly' | 'three_month' | 'yearly'
  otherFee: number[]
}
