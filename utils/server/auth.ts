import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { ResponseError } from '../responseError'
import { sessionUserSchema } from '../schemas'

type SessionUser = z.infer<typeof sessionUserSchema>

export async function authenticateUser(): Promise<SessionUser> {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    throw new ResponseError('Unauthorized', 401)
  }

  const parsedSessionUserSchema = sessionUserSchema.safeParse(session?.user)

  if (!parsedSessionUserSchema.success) {
    throw new ResponseError('Unauthorized', 401)
  }

  return session.user as SessionUser
}
