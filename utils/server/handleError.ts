import { ResponseError } from '@/utils/responseError'
import { NextResponse } from 'next/server'

export function handleError(error: Error) {
  if (error instanceof ResponseError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    )
  } else {
    console.error(error)
    return NextResponse.json(
      { message: `Server error: ${error.message}` },
      { status: 500 }
    )
  }
}
