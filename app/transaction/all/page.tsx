import { ExpensesSummary } from '@/components/transactions/ExpensesSummary/ExpensesSummary'
import { TransactionBox } from '@/components/transactions/TransactionBox/TransactionBox'
import { Typography } from '@/components/ui/Typography/Typography'

export default function TransactionAll() {
  return (
    <>
      <ExpensesSummary />

      <Typography className="mb-4 mt-6" variant="h2">
        All My Expenses
      </Typography>

      <div className="space-y-4">
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
      </div>
    </>
  )
}
