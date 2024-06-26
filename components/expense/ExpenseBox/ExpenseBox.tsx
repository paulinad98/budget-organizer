import type Prisma from '@prisma/client'
import { cn } from '@/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { Typography } from '@/components/ui/Typography/Typography'

type ExpenseBoxProps = React.BaseHTMLAttributes<HTMLElement> &
  Omit<Readonly<Prisma.Expense>, 'createdAt'> & { createdAt: string }

export function ExpenseBox({
  className,
  id,
  createdAt,
  name,
  userId,
  ...props
}: ExpenseBoxProps) {
  const createdAtDate = new Date(createdAt).toLocaleDateString()

  return (
    <button
      className={cn(
        'flex w-full items-center gap-4 rounded-md bg-surface px-4 py-3 text-left',
        className
      )}
      {...props}
    >
      <div className="h-full rounded-md bg-light-background p-3">
        <FeatherIcon className="w-5 text-light-icon" icon="shopping-bag" />
      </div>

      <div className="space-y-1">
        <Typography className="text-text" variant="lead">
          {id}
        </Typography>
        <Typography className="text-secondary" variant="small">
          {createdAtDate}
        </Typography>
      </div>

      <Typography className="ml-auto text-light-error" variant="lead">
        $-300.49
      </Typography>
    </button>
  )
}
