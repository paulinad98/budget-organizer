'use client'
import { ExpensesSummary } from '@/components/expense/ExpensesSummary/ExpensesSummary'
import { ExpenseList } from '@/components/expense/ExpenseList/ExpenseList'
import { Typography } from '@/components/ui/Typography/Typography'

export default function ExpenseAll() {
  return (
    <>
      <ExpensesSummary />

      <Typography className="mb-4 mt-6" variant="h2">
        All My Expenses
      </Typography>
      <ExpenseList />
    </>
  )
}
