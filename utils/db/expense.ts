import { prisma } from '@/lib/prisma'
import { PrismaUserExpanse } from '@/utils/types'

export async function countUserExpenses(userId: string): Promise<number> {
  return prisma.expense.count({
    where: { userId },
  })
}

export async function findUserExpenses(
  userId: string,
  skip: number,
  take: number
): Promise<PrismaUserExpanse[]> {
  return prisma.expense.findMany({
    orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
    skip,
    take,
    where: { userId },
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
}
