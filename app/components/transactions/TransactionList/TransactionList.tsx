'use client'

import { InfiniteScroll } from '@/app/components/app/InfiniteScroll/InfiniteScroll'
import { TransactionBox } from '@/app/components/transactions/TransactionBox/TransactionBox'

function onIntersecting() {
  console.log('test')
}

export function TransactionList() {
  return (
    <InfiniteScroll className="space-y-4" onIntersecting={onIntersecting}>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
      <li>
        <TransactionBox />
      </li>
    </InfiniteScroll>
  )
}