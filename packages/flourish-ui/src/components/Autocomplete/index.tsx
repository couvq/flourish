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
import { Testable } from '../../common-props'
import './Autocomplete.scss'

export interface AutocompleteProps<T extends object>
  extends Pick<ComboBoxProps<T>, 'children' | 'onSelectionChange'>,
    Testable {
  /** Accessible label for the component. */
  label: string
  /** Whether to display the label, if false will attach the label with aria-label. */
  isLabelVisible?: boolean
}

export interface AutocompleteItemProps
  extends Pick<ListBoxItemProps, 'children' | 'id'>,
    Testable {}

export const AutocompleteItem = ({
  'data-testId': testId,
  ...props
}: AutocompleteItemProps) => {
  return <ListBoxItem {...props} data-testId={testId} />
}

export const Autocomplete = <T extends object>({
  label,
  isLabelVisible = true,
  children,
  'data-testId': testId,
  ...props
}: AutocompleteProps<T>) => {
  return (
    <ComboBox {...props} data-testId={testId}>
      <div className="f-autocomplete-trigger-container">
        {isLabelVisible && <Label className="f-autocomplete-label">{label}</Label>}
        <Input data-testId={`${testId}-trigger`} aria-label={label} />
      </div>
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </ComboBox>
  )
}
