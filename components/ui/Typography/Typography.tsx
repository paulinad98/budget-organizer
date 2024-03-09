import { cn } from '@/lib/utils'

type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'lead' | 'large' | 'small'

type TypographyProps = React.BaseHTMLAttributes<HTMLElement> & {
  variant: Variant
  children: React.ReactNode
}

const typographyConfig: {
  [key in Variant]: { className: string; component: React.ElementType }
} = {
  h1: {
    className: 'scroll-m-20 text-base font-normal tracking-tight lg:text-xl',
    component: 'h1',
  },
  h2: {
    className: 'scroll-m-20 text-base font-normal tracking-tight lg:text-3xl',
    component: 'h2',
  },
  h3: {
    className: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    component: 'h3',
  },
  p: {
    className: 'leading-7 [&:not(:first-child)]:mt-6',
    component: 'p',
  },
  lead: {
    className: 'text-base text-muted-foreground lg:text-xl',
    component: 'p',
  },
  large: {
    className: 'text-lg font-semibold',
    component: 'p',
  },
  small: {
    className: 'text-sm font-medium leading-none',
    component: 'p',
  },
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const { className: variantClassName, component: Component } =
    typographyConfig[variant]

  return (
    <Component {...props} className={cn(variantClassName, className)}>
      {children}
    </Component>
  )
}
