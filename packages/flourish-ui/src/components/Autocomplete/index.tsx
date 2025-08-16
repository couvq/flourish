import React, { useRef, useState } from 'react'
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
import { Button } from '../Button'
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
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const onDelete = (e: React.MouseEvent<Element, MouseEvent>) => {
    setInputValue('')
    inputRef.current?.focus()
  }

  return (
    <ComboBox
      {...props}
      data-testId={testId}
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      <div className="f-autocomplete-trigger-container">
        {isLabelVisible && (
          <Label className="f-autocomplete-label">{label}</Label>
        )}
        <div className="f-searchbar">
          <Input
            ref={inputRef}
            data-testId={`${testId}-trigger`}
            aria-label={label}
          />
          {inputValue.length > 0 && (
            <Button
              className="f-searchbar-clear-btn"
              label="Clear search..."
              variant="icon"
              icon="close"
              onClick={onDelete}
            />
          )}
        </div>
      </div>
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </ComboBox>
  )
}
