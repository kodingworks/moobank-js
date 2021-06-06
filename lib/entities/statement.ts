export default interface Statement {
  date: string
  branch: string
  entry: string
  amount: number
  description: string
  hash: string
  pendingHash: string
  balance: number
}