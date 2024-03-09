import { usePathname } from 'next/navigation'

type Breadcrumb = {
  text: string
  href: string
}

function generateBreadcrumbs(path: string): Breadcrumb[] {
  const segments = path.split('/').filter(Boolean)

  return segments.reduce((breadcrumbs: Breadcrumb[], segment) => {
    const href =
      breadcrumbs.length > 0
        ? `${breadcrumbs[breadcrumbs.length - 1].href}/${segment}`
        : `/${segment}`

    breadcrumbs.push({ text: segment, href })
    return breadcrumbs
  }, [])
}

export function useBreadcrumbs() {
  const path = usePathname()
  const breadcrumbs = generateBreadcrumbs(path)

  return breadcrumbs
}
