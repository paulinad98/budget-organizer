import { redirect } from 'next/navigation'

export default function ExpenseIndex() {
  redirect('/expense/all')
}
