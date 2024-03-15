'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { InfiniteScroll } from '@/app/components/app/InfiniteScroll/InfiniteScroll'
import { TransactionBox } from '@/app/components/transactions/TransactionBox/TransactionBox'

function getExpenses(page: number) {
  return fetch(`/api/expense?page=${page}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

export function TransactionList() {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['expense'],
      queryFn: ({ pageParam = 1 }) => getExpenses(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage
      },
    })

  const transactions = data ? data.pages.flatMap((page) => page.data) : []

  return (
    <InfiniteScroll
      className="space-y-4"
      onIntersecting={() => fetchNextPage()}
    >
      {transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <TransactionBox transaction={transaction} />
          </li>
        )
      })}

      {(isLoading || isFetchingNextPage) && <li>Loading</li>}
    </InfiniteScroll>
  )
}
