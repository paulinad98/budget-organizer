import { NextResponse, NextRequest } from 'next/server'
import {
  getPaginationData,
  validatePagination,
} from '@/utils/server/pagination'
import { authenticateUser } from '@/utils/server/auth'
import { handleError } from '@/utils/server/handleError'
import { parseExpenses } from '@/utils/server/expanse'
import { countUserExpenses, findUserExpenses } from '@/utils/db/expense'
import { createFile, getImage } from '@/utils/server/file'

export async function GET(req: NextRequest) {
  try {
    const user = await authenticateUser()

    const { page, skip, take } = getPaginationData(req)
    const expensesCount = await countUserExpenses(user.id)
    validatePagination({ count: expensesCount, skip })

    const expenses = await findUserExpenses(user.id, skip, take)
    const parsedExpanses = parseExpenses(expenses)

    return NextResponse.json(
      {
        data: parsedExpanses,
        currentPage: page,
        totalPage: Math.ceil(expensesCount / take),
      },
      { status: 200 }
    )
  } catch (error) {
    handleError(error as Error)
  }
}

export async function POST(req: NextRequest) {
  try {
    const image = await getImage(req)

    createFile({ file: image, filePath: 'public/expanse' })

    return NextResponse.json({ message: 'Success', status: 201 })
  } catch (error) {
    handleError(error as Error)
  }
}
