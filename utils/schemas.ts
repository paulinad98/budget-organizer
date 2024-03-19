import { z } from 'zod'

export const expanseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  createdAt: z.string().datetime(),
})

export const expansePaginationSchema = z.object({
  data: expanseSchema.array(),
  currentPage: z.number().min(1).int(),
  totalPage: z.number().min(0).int(),
})

export const sessionUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
})

export const pageSchema = z.number().min(0).int()
