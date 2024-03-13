import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        id: '44',
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
