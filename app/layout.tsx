import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidemenu } from '@/components/app/Sidemenu/Sidemenu'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <div className="container py-5">
          <header>
            <div className="flex items-center justify-between">
              <Sidemenu />
              <h1>Logo</h1>
            </div>

            <Breadcrumbs className=" mt-1 justify-center" />
          </header>

          <main className=" pt-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
