'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { ExpenseBox } from '@/components/expense/ExpenseBox/ExpenseBox'
import { InfiniteScroll } from '@/components/app/InfiniteScroll/InfiniteScroll'
import { fetcher } from '@/utils/fetcher'
import { expansePaginationSchema } from '@/utils/schemas'

async function getExpenses(page: number) {
  return await fetcher(`/api/expense?page=${page}`, {
    method: 'GET',
    schema: expansePaginationSchema,
  })
}

export function ExpenseList() {
  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['expense'],
      queryFn: ({ pageParam = 1 }) => getExpenses(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.currentPage + 1

        if (nextPage > lastPage.totalPage) {
          return null
        }

        return nextPage
      },
    })

  const expenses = data ? data.pages.flatMap((page) => page.data) : []

  return (
    <InfiniteScroll
      className="space-y-4"
      onIntersecting={() => fetchNextPage()}
    >
      {expenses.map((expense) => {
        return (
          <li key={expense.id}>
            <ExpenseBox {...expense} />
          </li>
        )
      })}

      {!hasNextPage ? 'no more pages' : null}

      {(isLoading || isFetchingNextPage) && <li>Loading</li>}
    </InfiniteScroll>
  )
}
