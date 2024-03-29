import { cn } from '@/lib/utils'

type HamburgerProps = React.BaseHTMLAttributes<HTMLElement>

export function Hamburger({ className, ...props }: HamburgerProps) {
  return (
    <div {...props} className={cn('space-y-1.5', className)}>
      <span className="block h-0.5 w-4 bg-gray-600 "></span>
      <span className="block h-0.5 w-6 bg-gray-600"></span>
      <span className="block h-0.5 w-6 bg-gray-600"></span>
    </div>
  )
}
