import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(req: NextRequest) {
  const PER_PAGE = 4

  try {
    const session = await getServerSession(authOptions)
    const user = session?.user

    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'unauthorized' }), {
        status: 401,
      })
    }

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '0', 10)
    if (isNaN(page)) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid page number' }),
        {
          status: 422,
        }
      )
    }

    const productsCount = await prisma.expense.count({
      where: {
        userId: user.id,
      },
    })

    if ((page - 1) * PER_PAGE > productsCount) {
      return NextResponse.json(
        { message: 'Invalid page number', data: [] },
        { status: 422 }
      )
    }

    const products = await prisma.expense.findMany({
      take: PER_PAGE,
      skip: (page - 1) * PER_PAGE,
      where: {
        userId: user.id,
      },
      orderBy: {
        created_at: 'asc',
      },
    })

    return NextResponse.json(
      {
        data: products,
        currentPage: page,
        totalPage: Math.ceil(productsCount / PER_PAGE),
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { message: 'Initial server error' },
      { status: 500 }
    )
  }
}
