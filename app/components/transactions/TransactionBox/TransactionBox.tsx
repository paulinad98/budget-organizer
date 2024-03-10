import { cn } from '@/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { Typography } from '@/app/components/ui/Typography/Typography'

type TransactionBoxProps = React.BaseHTMLAttributes<HTMLElement>

export function TransactionBox({ className, ...props }: TransactionBoxProps) {
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
          Grocery Shopping
        </Typography>
        <Typography className="text-secondary" variant="small">
          22 July 2021
        </Typography>
      </div>

      <Typography className="ml-auto text-light-error" variant="lead">
        $-300.49
      </Typography>
    </button>
  )
}
