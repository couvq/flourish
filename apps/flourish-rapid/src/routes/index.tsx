import AutocompletePage from '@/components/examplePages/AutocompletePage'
import ButtonPage from '@/components/examplePages/ButtonPage'
import DrawerPage from '@/components/examplePages/DrawerPage'
import FlexPage from '@/components/examplePages/FlexPage'
import LinkPage from '@/components/examplePages/LinkPage'
import ModalPage from '@/components/examplePages/ModalPage'
import SelectPage from '@/components/examplePages/SelectPage'
import TextFieldPage from '@/components/examplePages/TextFieldPage'
import TypographyPage from '../components/examplePages/TypographyPage'
import Links from '../components/Links'

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
  },
  {
    path: '/button',
    label: 'Button',
    element: <ButtonPage />
  },
  {
    path: '/select',
    label: 'Select',
    element: <SelectPage />
  },
  {
    path: '/modal',
    label: 'Modal',
    element: <ModalPage />
  },
  {
    path: '/drawer',
    label: 'Drawer',
    element: <DrawerPage />
  },
  {
    path: '/text-field',
    label: 'Text Field',
    element: <TextFieldPage />
  },
  {
    path: '/autocomplete',
    label: 'Autocomplete',
    element: <AutocompletePage />
  }
]
