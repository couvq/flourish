import React from 'react'
import {
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover
} from 'react-aria-components'

interface TypeaheadProps {
  label: string
  options: string[]
}

export const Typeahead = ({ label, options }: TypeaheadProps) => {
  return (
    <ComboBox>
      <Label>{label}</Label>
      <Input />
      <Popover>
        <ListBox>
          {options.map((option) => (
            <ListBoxItem key={option}>{option}</ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  )
}
