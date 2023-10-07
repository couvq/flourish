import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Select } from 'flourish-ui'
import { FocusEvent, MouseEvent, useState } from 'react'

const options = [
  {
    label: 'English',
    value: 'English'
  },
  {
    label: 'French',
    value: 'French'
  },
  {
    label: 'Spanish',
    value: 'Spanish'
  },
  {
    label: 'Italian',
    value: 'Italian'
  }
]

const manyOptions = [
  {
    label: 'English',
    value: 'English'
  },
  {
    label: 'French',
    value: 'French'
  },
  {
    label: 'Spanish',
    value: 'Spanish'
  },
  {
    label: 'Italian',
    value: 'Italian'
  },
  {
    label: 'Portugese',
    value: 'Portugese'
  },
  {
    label: 'Arabic',
    value: 'Arabic'
  },
  {
    label: 'Hindi',
    value: 'Hindi'
  }
]

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [manySelectedOption, setManySelectedOption] = useState<string | null>(
    null
  )

  const handleSelect = (e: MouseEvent | FocusEvent, value: string) => {
    e.preventDefault()
    setSelectedOption(value)
  }

  const handleManyOptionSelect = (
    e: MouseEvent | FocusEvent,
    value: string
  ) => {
    e.preventDefault()
    setManySelectedOption(value)
  }

  return (
    <ExamplePage exampleName="Select examples">
      <ExampleGroup groupName="Basic select">
        <Select
          value={selectedOption ?? 'Select language'}
          options={options}
          onSelect={handleSelect}
        />
      </ExampleGroup>
      <ExampleGroup groupName="Select with many options">
        <Select
          value={manySelectedOption ?? 'Select language'}
          options={manyOptions}
          onSelect={handleManyOptionSelect}
        />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default SelectPage
