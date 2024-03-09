'use client'

import { cn } from '@/lib/utils'
import { Link } from '@/components/ui/Link/Link'
import { Typography } from '@/components/ui/Typography/Typography'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import { Fragment } from 'react'

type BreadcrumbsProps = React.BaseHTMLAttributes<HTMLElement>

export function Breadcrumbs({ className, ...props }: BreadcrumbsProps) {
  const breadcrumbs = useBreadcrumbs()

  function isCurrentLink(index: number): boolean {
    return index < breadcrumbs.length - 1
  }

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {breadcrumbs.map(({ text, href }, index) => {
        return (
          <Fragment key={index}>
            <Link className="capitalize" href={href}>
              <Typography
                className={
                  isCurrentLink(index)
                    ? 'text-text transition-colors hover:text-primary'
                    : 'cursor-default text-primary'
                }
                variant={isCurrentLink(index) ? 'lead' : 'h1'}
              >
                {text}
              </Typography>
            </Link>

            {isCurrentLink(index) ? (
              <Typography className=" text-text" variant="lead">
                {'>'}
              </Typography>
            ) : null}
          </Fragment>
        )
      })}
    </nav>
  )
}
