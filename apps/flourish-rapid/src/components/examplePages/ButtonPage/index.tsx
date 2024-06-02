import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Flex, Typography } from 'flourish-ui'
import { useState } from 'react'

const ButtonPage = () => {
  const [primaryCount, setPrimaryCount] = useState(0)
  const [secondaryCount, setSecondaryCount] = useState(0)
  return (
    <ExamplePage exampleName="Button examples">
      <ExampleGroup groupName="Primary button">
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Button
            variant="primary"
            onClick={() => setPrimaryCount(primaryCount + 1)}
            data-testId="primary-button"
          >
            Button
          </Button>
          <Typography data-testId="primary-button-count">
            {primaryCount}
          </Typography>
        </Flex>
      </ExampleGroup>
      <ExampleGroup groupName="Secondary button">
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Button
            onClick={() => setSecondaryCount(secondaryCount + 1)}
            data-testId="secondary-button"
          >
            Button
          </Button>
          <Typography data-testId="secondary-button-count">
            {secondaryCount}
          </Typography>
        </Flex>
      </ExampleGroup>
      <ExampleGroup groupName="Primary button - disabled">
        <Button
          variant="primary"
          onClick={() => setPrimaryCount(primaryCount + 1)}
          data-testId="primary-button-disabled"
          disabled
        >
          Button
        </Button>
      </ExampleGroup>
      <ExampleGroup groupName="Secondary button - disabled">
        <Button
          onClick={() => setSecondaryCount(primaryCount + 1)}
          data-testId="secondary-button-disabled"
          disabled
        >
          Button
        </Button>
      </ExampleGroup>
      <ExampleGroup groupName="Icon button">
        <Button
          variant='icon'
          icon='close'
          data-testId="secondary-button-disabled"
        />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default ButtonPage
