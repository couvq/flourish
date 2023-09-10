import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Link } from 'flourish-ui'

const LinkPage = () => {
  return (
    <ExamplePage exampleName="Link examples">
      <ExampleGroup groupName="Basic Link">
        <Link href="https://amazon.com/b2b/appcenter" data-testId="basic-link">
          AB App Center
        </Link>
      </ExampleGroup>
      <ExampleGroup groupName="External Link">
        <Link
          href="https://amazon.com/b2b/appcenter"
          label="Opens Amazon in a new tab"
          external
          data-testId="external-link"
        >
          Go to App Center external
        </Link>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default LinkPage
