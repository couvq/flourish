import FlexPage from '@/components/examplePages/FlexPage'
import Links from '../components/Links'
import TypographyPage from '../components/examplePages/TypographyPage'
import LinkPage from '@/components/examplePages/LinkPage'

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
  },
  {
    path: '/flex',
    label: 'Flex',
    element: <FlexPage />
  },
  {
    path: '/link',
    label: 'Link',
    element: <LinkPage />
  }
]
