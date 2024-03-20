import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateUser } from '@/utils/server/auth'
import { ResponseError } from '@/utils/responseError'
import { getPaginationData } from '@/utils/server/pagination'

export async function GET(req: NextRequest) {
  try {
    const user = await authenticateUser()
    const { page, skip, take } = getPaginationData(req)

    const expensesCount = await prisma.expense.count({
      where: {
        userId: user?.id,
      },
    })

    if (skip > expensesCount) {
      return NextResponse.json(
        { message: 'Invalid page number', data: [] },
        { status: 422 }
      )
    }
    const expenses = await prisma.expense.findMany({
      orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
      skip,
      take,
      where: {
        userId: user.id,
      },
      include: {
        productsOnExpenses: {
          select: {
            quantity: true,
            product: {
              select: {
                id: true,
                name: true,
                price: {
                  select: {
                    amount: true,
                    currency: {
                      select: {
                        symbol: true,
                        id: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    const parsedExpanses = expenses.map((expanse) => {
      const price = expanse.productsOnExpenses.reduce(
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

    return NextResponse.json(
      {
        data: parsedExpanses,
        currentPage: page,
        totalPage: Math.ceil(expensesCount / take),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)

    if (error instanceof ResponseError) {
      console.log(error.message)
      return NextResponse.json(
        { message: error.message },
        { status: error.status }
      )
    }

    return NextResponse.json(
      { message: `Server error: ${error}` },
      { status: 500 }
    )
  }
}
