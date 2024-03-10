'use client'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ className, href, children, ...props }: LinkProps) {
  const pathname = usePathname()

  return (
    <NextLink
      {...props}
      href={href}
      className={cn(pathname === href ? 'is-active group' : '', className)}
    >
      {children}
    </NextLink>
  )
}
