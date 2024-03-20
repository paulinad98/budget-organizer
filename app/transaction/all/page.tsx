'use client'
import { ExpensesSummary } from '@/components/transactions/ExpensesSummary/ExpensesSummary'
import { TransactionList } from '@/components/transactions/TransactionList/TransactionList'
import { Typography } from '@/components/ui/Typography/Typography'

export default function TransactionAll() {
  const page = 6

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
