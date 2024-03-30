export default function SimpleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  Component: any
}>) {
  return <div className="h-screen">{children}</div>
}
