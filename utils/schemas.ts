import { z } from 'zod'

export const expanseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  createdAt: z.string(),
})

export const expansePaginationSchema = z.object({
  data: expanseSchema.array(),
  currentPage: z.number().min(1),
  totalPage: z.number().min(0),
})
