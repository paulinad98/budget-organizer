import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(req: NextRequest) {
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
          status: 400,
        }
      )
    }

    const products = await prisma.expense.findMany({
      take: 4,
      skip: +page * 4,
      where: {
        userId: user.id,
      },
      orderBy: {
        created_at: 'asc',
      },
    })

    return NextResponse.json({ data: products }, { status: 200 })
  } catch {
    return NextResponse.json(
      { message: 'Initial server error' },
      { status: 500 }
    )
  }
}
