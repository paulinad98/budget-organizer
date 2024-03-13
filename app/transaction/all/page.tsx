'use client'
import { ExpensesSummary } from '@/app/components/transactions/ExpensesSummary/ExpensesSummary'
import { TransactionList } from '@/app/components/transactions/TransactionList/TransactionList'
import { Typography } from '@/app/components/ui/Typography/Typography'
import { useEffect } from 'react'

export default function TransactionAll() {
  useEffect(() => {
    fetch('/api/product')
      .then((response) => {
        console.log(response.status)
        console.log(response.ok)

        return response.json()
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

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
