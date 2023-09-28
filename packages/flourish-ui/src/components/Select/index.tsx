import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Customizable, Testable } from '../../common-props'
import {
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../utils'
import './Select.scss'

interface SelectOption {
  /** Accessible name for the select option. */
  label: string
  /** Value of the select option. */
  value?: string | number | readonly string[]
  /** Whether or not the select option is disabled */
  disabled?: boolean
}

interface SelectProps extends Testable, Customizable {
  /** Accessible name for the select component. */
  label: string
  /** Whether the select component label should be visible, or only used for screenreaders. */
  labelVisible?: boolean
  /** Options to choose from the select component. */
  options: SelectOption[]
  /** Change event handler for the select component. */
  onChange?: (e: ChangeEvent) => void
}

const toggleCaretIconRotateEffect = () => {
  const caret = document.querySelector('.f-select-caret')
  const containsRotateUp = caret?.classList.contains('rotate-caret-up')
  const containsRotateDown = caret?.classList.contains('rotate-caret-down')

  if (!containsRotateUp && !containsRotateDown) {
    caret?.classList.add('rotate-caret-up')
    return
  }

  if (containsRotateUp) {
    caret?.classList.remove('rotate-caret-up')
    caret?.classList.add('rotate-caret-down')
    return
  }

  if (containsRotateDown) {
    caret?.classList.remove('rotate-caret-down')
    caret?.classList.add('rotate-caret-up')
  }
}

const toggleSelectOptionsOpen = () => {
  const selectOptions = document.querySelector('.f-select-options')
  selectOptions?.classList.toggle('f-closed')
}

/**
 * Checks if an item is selected, if it is then it focuses that item
 */
const moveSelectItemFocus = () => {
  const selectItems = document.querySelectorAll('.f-select-item')
  for (const item of selectItems) {
    // @ts-ignore
    if (item.checked) {
      // @ts-ignore
      item.focus()
      return
    }
  }
  // @ts-ignore
  selectItems[0].focus()
}

export const Select = ({
  label,
  labelVisible,
  options,
  onChange = (e: ChangeEvent) => {},
  className,
  style,
  'data-testId': testId
}: SelectProps) => {
  const [expanded, setExpanded] = useState(false)

  /**
   * Closes the dropdown and moves focus back to the select trigger
   * in the event the escape key is pressed
   */
  const handleSelectItemDismiss = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      toggleCaretIconRotateEffect()
      toggleSelectOptionsOpen()
      // @ts-ignore
      document.querySelector('.f-select-trigger')?.focus()
      setExpanded(!expanded)
    }
  }

  return (
    <>
      <div className="f-select">
        <button
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={expanded}
          aria-controls="f-select-options"
          className="f-select-trigger"
          onFocus={toggleFocusGrowEffect}
          onBlur={removeFocusGrowEffect}
          onMouseDown={(e) => {
            e.preventDefault()
            createRipple(e)
            toggleCaretIconRotateEffect()
            toggleSelectOptionsOpen()
            setExpanded(!expanded)
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              toggleCaretIconRotateEffect()
              toggleSelectOptionsOpen()
              setExpanded(!expanded)
              moveSelectItemFocus()
            }
          }}
        >
          {label}
          <FontAwesomeIcon className="f-select-caret" icon={faCaretDown} />
        </button>
        <fieldset
          role="listbox"
          id="f-select-options"
          className="f-select-options f-closed"
        >
          <input
            className="f-select-item"
            onKeyDown={handleSelectItemDismiss}
            type="radio"
            name="nato"
            id="alphaRadio"
          />
          <label htmlFor="alphaRadio">
            Alpha testing very long content, with a paragraph just to test edge
            case
          </label>
          <input
            className="f-select-item"
            onKeyDown={handleSelectItemDismiss}
            type="radio"
            name="nato"
            id="alphaRadio"
          />
          <label htmlFor="alphaRadio">Alpha</label>
          <input
            className="f-select-item"
            onKeyDown={handleSelectItemDismiss}
            type="radio"
            name="nato"
            id="alphaRadio"
          />
          <label htmlFor="alphaRadio">Alpha</label>
        </fieldset>
      </div>
    </>
  )
}
