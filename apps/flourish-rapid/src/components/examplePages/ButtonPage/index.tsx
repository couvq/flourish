import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Flex, Typography } from 'flourish-ui'
import { useState } from 'react'

const ButtonPage = () => {
  const [primaryCount, setPrimaryCount] = useState(0)
  return (
    <ExamplePage exampleName="Button examples">
      <ExampleGroup groupName="Primary button">
        <Flex direction="row" justifyContent="center" alignItems="center" gap={3}>
          <Button
            variant="primary"
            onClick={() => setPrimaryCount(primaryCount + 1)}
            data-testId='primary-button'
          >
            Button
          </Button>
          <Typography data-testId='primary-button-count'>{primaryCount}</Typography>
        </Flex>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default ButtonPage
