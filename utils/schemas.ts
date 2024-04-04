import { z } from 'zod'

export const currencySchema = z.object({
  id: z.number(),
  symbol: z.string(),
})

export const priceSchema = z.object({
  amount: z.number().min(0),
  currency: currencySchema,
})

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number().min(0),
  price: priceSchema,
})

export const expanseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format, should be an ISO date string',
  }),
  products: z.array(productSchema),
  price: priceSchema,
})

export const expansePaginationSchema = z.object({
  data: z.array(expanseSchema),
  currentPage: z.number().min(1).int(),
  totalPage: z.number().min(0).int(),
})

export const sessionUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
})

export const pageSchema = z.number().min(0).int()

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

export const imageSchema = z
  .instanceof(File)
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )
