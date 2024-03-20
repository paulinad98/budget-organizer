import { PrismaUserExpanse } from '@/utils/types'

export function calculateExpensePrice(expanse: PrismaUserExpanse) {
  return expanse.productsOnExpenses.reduce(
    ({ amount }, { quantity, product }) => {
      const total = amount + quantity * product.price.amount

      return {
        amount: total,
        currency: product.price.currency,
      }
    },
    {
      amount: 0,
      currency: {},
    }
  )
}

export function parseExpenses(expenses: PrismaUserExpanse[]) {
  return expenses.map((expanse) => {
    const price = calculateExpensePrice(expanse)

    return {
      id: expanse.id,
      userId: expanse.userId,
      name: expanse.name,
      createdAt: expanse.createdAt,
      price,
      products: expanse.productsOnExpenses.map((product) => {
        return {
          id: product.product.id,
          name: product.product.name,
          quantity: product.quantity,
          price: product.product.price,
        }
      }),
    }
  })
}
