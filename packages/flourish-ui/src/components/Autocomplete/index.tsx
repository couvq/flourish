import React from 'react'
import {
  ComboBox,
  ComboBoxProps,
  Input,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover
} from 'react-aria-components'
import { Testable } from '../../common-props'
import './Autocomplete.scss'

export interface AutocompleteProps<T extends object>
  extends ComboBoxProps<T>,
    Testable {
  /** Accessible label for the component */
  label: string
}

export interface AutocompleteItemProps extends ListBoxItemProps, Testable {

}

export const AutocompleteItem = ({
  'data-testId': testId,
  ...props
}: AutocompleteItemProps) => {
  return <ListBoxItem {...props} data-testId={testId} />
}

export const Autocomplete = <T extends object>({
  label,
  children,
  'data-testId': testId,
  ...props
}: AutocompleteProps<T>) => {
  return (
    <ComboBox {...props} data-testId={testId}>
      <Input aria-label={label} data-testId={`${testId}-trigger`} />
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </ComboBox>
  )
}
