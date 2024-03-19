import { NextRequest } from 'next/server'
import { fromZodError } from 'zod-validation-error'
import { ResponseError } from '@/utils/responseError'
import { pageSchema } from '@/utils/schemas'

const PER_PAGE = 4

export function getPage(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const parsedPage = pageSchema.safeParse(Number(searchParams?.get('page')))

  if (!parsedPage.success) {
    throw new ResponseError(fromZodError(parsedPage.error).toString(), 422)
  }

  return parsedPage.data
}

export function getSkippedPages(page: number) {
  return (page - 1) * PER_PAGE
}

export function getPaginationData(req: NextRequest) {
  const page = getPage(req)
  const skip = getSkippedPages(page)
  const take = PER_PAGE

  return { page, skip, take }
}
