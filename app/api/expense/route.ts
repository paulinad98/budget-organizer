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
    })

    return NextResponse.json(
      {
        data: expenses,
        currentPage: page,
        totalPage: Math.ceil(expensesCount / take),
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof ResponseError) {
      console.log(error.message)
      return NextResponse.json(
        { message: error.message },
        { status: error.status }
      )
    }

    return NextResponse.json(
      { message: 'Initial server error' },
      { status: 500 }
    )
  }
}
