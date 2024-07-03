import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Flex, Select, Typography } from 'flourish-ui'
import { useState } from 'react'

const ButtonPage = () => {
  const [primaryCount, setPrimaryCount] = useState(0)
  const [secondaryCount, setSecondaryCount] = useState(0)
  const [selectedIcon, setSelectedIcon] = useState('close')
  const icons = [
    {
      label: 'close',
      value: 'close'
    },
    {
      label: 'bars',
      value: 'bars'
    }
  ]
  console.log(selectedIcon)

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
      <ExampleGroup groupName="Icon button">
        <Select
          value={selectedIcon}
          options={icons}
          onSelect={(e, value: string) => {
            e.preventDefault()
            setSelectedIcon(value)
          }}
        />
        <Button
          variant="icon"
          // @ts-ignore
          icon={selectedIcon}
          label="icon button label"
          data-testId="icon-button"
        />
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
      <ExampleGroup groupName="Icon button - disabled">
        <Button
          variant="icon"
          icon="close"
          label="icon button label"
          data-testId="icon-button"
          disabled
        />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default ButtonPage
