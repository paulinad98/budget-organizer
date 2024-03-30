import { Sidemenu } from '@/components/app/Sidemenu/Sidemenu'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  Component: any
}>) {
  return (
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
  )
}
