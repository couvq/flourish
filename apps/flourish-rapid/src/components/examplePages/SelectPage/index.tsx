import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Select } from 'flourish-ui'
import { FocusEvent, MouseEvent, useState } from 'react'

const options = [
  {
    label: 'Dog',
    value: 'Dog'
  },
  {
    label: 'Cat',
    value: 'Cat'
  },
  {
    label: 'Horse',
    value: 'Horse'
  }
]

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null)

  const handleChange = (e: MouseEvent | FocusEvent, value: string) => {
    e.preventDefault()
    setSelectedOption(value)
  }

  return (
    <ExamplePage exampleName="Select examples">
      <ExampleGroup groupName="Basic select">
        <Select
          value={selectedOption ?? 'Choose your pet'}
          options={options}
          onChange={handleChange}
        />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default SelectPage
