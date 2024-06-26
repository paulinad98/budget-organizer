import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/Sheet/Sheet'
import { Button } from '@/components/ui/Button/Button'
import { Hamburger } from '@/components/ui/Hamburger/Hamburger'
import { Link } from '@/components/ui/Link/Link'

const menu = [
  { text: 'Expenses', href: '/expense/all' },
  { text: 'Add expense', href: '/expense/add' },
  { text: 'Stats', href: '/expense/stats' },
  { text: 'Settings', href: '/settings' },
]

export function Sidemenu() {
  return (
    <Sheet>
      <Button asChild={true} size="icon" variant="ghost">
        <SheetTrigger className="flex-start">
          <Hamburger />
        </SheetTrigger>
      </Button>

      <SheetContent className="flex flex-col gap-1 py-8 ">
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
