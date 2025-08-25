import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { BreadcrumbItem, Breadcrumbs } from 'flourish-ui'

const items: BreadcrumbItem[] = [
  {
    id: 0,
    label: 'Amazon website',
    href: 'https://amazon.com'
  },
  {
    id: 1,
    label: 'Components',
    href: '/'
  },
  {
    id: 2,
    label: 'Breadcrumbs',
    href: '/breadcrumbs'
  }
]

const BreadcrumbsPage = () => {
  return (
    <ExamplePage exampleName="Breadcrumb examples">
      <ExampleGroup groupName="Basic Breadcrumbs">
        <Breadcrumbs items={items} data-testId="basic-breadcrumb" />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default BreadcrumbsPage
