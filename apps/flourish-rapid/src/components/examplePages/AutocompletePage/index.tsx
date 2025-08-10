import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Autocomplete, AutocompleteItem } from 'flourish-ui'
import { useState } from 'react'

const options = [
  { id: 1, name: 'Aerospace' },
  { id: 2, name: 'Mechanical' },
  { id: 3, name: 'Civil' },
  { id: 4, name: 'Biomedical' },
  { id: 5, name: 'Nuclear' },
  { id: 6, name: 'Industrial' },
  { id: 7, name: 'Chemical' },
  { id: 8, name: 'Agricultural' },
  { id: 9, name: 'Electrical' }
]

const AutocompletePage = () => {
  const [majorId, setMajorId] = useState()

  // @ts-ignore
  const onSelectionChange = (id) => {
    setMajorId(id)
  }

  return (
    <ExamplePage exampleName="Autocomplete examples">
      <ExampleGroup groupName="Basic autocomplete">
        Selected id is {majorId}
        <Autocomplete
          label="Pick a major"
          onSelectionChange={onSelectionChange}
        >
          {options.map((option) => (
            <AutocompleteItem key={option.id} id={option.id}>
              {option.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default AutocompletePage
