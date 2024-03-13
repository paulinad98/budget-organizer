import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('test', 12)
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Test User',
      password,
    },
  })

  const currency = await prisma.currency.create({
    data: {
      symbol: 'zł',
    },
  })

  const country = await prisma.country.create({
    data: {
      name: 'poland',
      code: 'pl',
      currency: {
        connect: { id: currency.id },
      },
    },
  })

  const product = await prisma.product.create({
    data: {
      name: 'Product 1',
      price: {
        create: {
          amount: 100,
          currency: {
            connect: { id: currency.id },
          },
        },
      },
    },
  })

  const expanses = await prisma.expense.create({
    data: {
      name: 'Product 1',
      userId: user.id,
      productsOnExpenses: {
        create: {
          product: {
            connect: { id: product.id },
          },
          quantity: 1,
        },
      },
    },
  })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
