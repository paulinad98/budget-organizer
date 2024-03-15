import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { Sidemenu } from '@/app/components/app/Sidemenu/Sidemenu'
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs/Breadcrumbs'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'

const lato = Lato({
  weight: ['300', '400', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Budget organzer',
  description: 'App for budget organizer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  Component: any
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="container py-5">
          <header>
            <div className="flex items-center justify-between">
              <Sidemenu />
              <h1>Logo</h1>
            </div>

            <Breadcrumbs className="mt-2" />
          </header>

          <main className=" pt-4">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
