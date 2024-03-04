import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidemenu } from '@/components/app/sidemenu/Sidemenu'

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
          <header className="flex items-center justify-between">
            <h1>Budget Organizer</h1>
            <Sidemenu />
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
