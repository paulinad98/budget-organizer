import { ExpensesSummary } from '@/app/components/transactions/ExpensesSummary/ExpensesSummary'
import { TransactionList } from '@/app/components/transactions/TransactionList/TransactionList'
import { Typography } from '@/app/components/ui/Typography/Typography'

export default function TransactionAll() {
  return (
    <>
      <ExpensesSummary />

      <Typography className="mb-4 mt-6" variant="h2">
        All My Expenses
      </Typography>
      <TransactionList />
    </>
  )
}
