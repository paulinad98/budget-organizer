import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { Sidemenu } from '@/components/app/Sidemenu/Sidemenu'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs'
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
      <body className={lato.className}>{children}</body>
    </html>
  )
}
