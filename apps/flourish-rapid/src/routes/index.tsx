import Links from '../components/Links'
import TypographyPage from '../components/TypographyPage'

interface RouteEntry {
  path: string
  label: string
  element: React.ReactNode
}

export const routes: RouteEntry[] = [
  {
    path: '/',
    label: 'Home page',
    element: <Links />
  },
  {
    path: '/typography',
    label: 'Typography',
    element: <TypographyPage />
  }
]
