export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH'

export type PrismaUserExpanse = {
  id: string
  name: string
  createdAt: Date
  userId: string
  productsOnExpenses: {
    product: {
      id: string
      name: string
      price: {
        currency: {
          symbol: string
          id: number
        }
        amount: number
      }
    }
    quantity: number
  }[]
}

export type UserExpanse = {
  id: string
  userId: string
  name: string
  createdAt: Date
  price: {
    amount: number
    currency: {}
  }
  products: {
    id: string
    name: string
    quantity: number
    price: {
      currency: {
        symbol: string
        id: number
      }
      amount: number
    }
  }[]
}
