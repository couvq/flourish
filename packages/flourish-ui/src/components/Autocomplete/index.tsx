import React from 'react'
import {
  ComboBox,
  ComboBoxProps,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover
} from 'react-aria-components'
import './Autocomplete.scss'

interface AutocompleteProps<T extends object> extends ComboBoxProps<T> {
  /** Accessible label for the component */
  label: string
}

export const AutocompleteItem = (props: ListBoxItemProps) => {
  return <ListBoxItem {...props} />
}

export const Autocomplete = <T extends object>({
  label,
  children,
  ...props
}: AutocompleteProps<T>) => {
  return (
    <ComboBox {...props}>
      <Label>{label}</Label>
      <Input />
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </ComboBox>
  )
}
