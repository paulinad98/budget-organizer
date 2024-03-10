'use client'

import { Fragment } from 'react'
import FeatherIcon from 'feather-icons-react'
import { cn } from '@/lib/utils'
import { Link } from '@/app/components/ui/Link/Link'
import { Typography } from '@/app/components/ui/Typography/Typography'
import { useBreadcrumbs } from '@/app/hooks/useBreadcrumbs'

type BreadcrumbsProps = React.BaseHTMLAttributes<HTMLElement>

export function Breadcrumbs({ className, ...props }: BreadcrumbsProps) {
  const breadcrumbs = useBreadcrumbs()

  function isCurrentLink(index: number): boolean {
    return index < breadcrumbs.length - 1
  }

  return (
    <nav
      className={cn('flex items-center gap-1 text-text', className)}
      {...props}
    >
      {breadcrumbs.map(({ text, href }, index) => {
        return (
          <Fragment key={index}>
            <Link className="capitalize" href={href}>
              <Typography
                className={
                  isCurrentLink(index)
                    ? 'transition-colors hover:text-primary'
                    : 'cursor-default text-primary'
                }
                variant={isCurrentLink(index) ? 'lead' : 'h1'}
              >
                {text}
              </Typography>
            </Link>

            {isCurrentLink(index) ? (
              <FeatherIcon className="h-4 w-4" icon="chevron-right" />
            ) : null}
          </Fragment>
        )
      })}
    </nav>
  )
}
