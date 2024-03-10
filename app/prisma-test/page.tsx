import { prisma } from '@/lib/prisma'

export default async function TransactionAll() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com',
    },
  })

  return <div>{user?.name}</div>
}
