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
  }
]

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null)

  const handleSelect = (e: MouseEvent | FocusEvent, value: string) => {
    e.preventDefault()
    setSelectedOption(value)
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
    </ExamplePage>
  )
}

export default SelectPage
