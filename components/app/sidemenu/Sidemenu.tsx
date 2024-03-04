import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet/sheet'
import { Button } from '@/components/ui/button/button'
import { Hamburger } from '@/components/ui/hamburger/hamburger'
import { Link } from '@/components/ui/link/link'

const menu = [
  { text: 'Transactions', href: '/transaction/all' },
  { text: 'Add transaction', href: '/transaction/add' },
  { text: 'Stats', href: '/transaction/stats' },
  { text: 'Settings', href: '/settings' },
]

export function Sidemenu() {
  return (
    <Sheet>
      <Button asChild={true} size="icon" variant="ghost">
        <SheetTrigger>
          <Hamburger />
        </SheetTrigger>
      </Button>

      <SheetContent className="flex flex-col gap-1 py-8">
        {menu.map(({ href, text }) => (
          <Link key={href} href={href}>
            <Button className="w-full" asChild={true} variant="ghost" size="sm">
              <SheetClose className="w-full">{text}</SheetClose>
            </Button>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  )
}
