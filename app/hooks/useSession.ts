import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export function useSession() {
  const fetchSession = async () => {
    return await getServerSession(authOptions)
  }

  return { fetchSession }
}
