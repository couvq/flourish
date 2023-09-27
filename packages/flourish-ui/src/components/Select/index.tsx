import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent } from 'react'
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

export const Select = ({
  label,
  labelVisible,
  options,
  onChange = (e: ChangeEvent) => {},
  className,
  style,
  'data-testId': testId
}: SelectProps) => {
  return (
    <>
      <div className='f-select'>
        <button
          className="f-select-trigger"
          onFocus={toggleFocusGrowEffect}
          onBlur={removeFocusGrowEffect}
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            createRipple(e)
            toggleCaretIconRotateEffect()
            toggleSelectOptionsOpen()
          }}
        >
          {label}
          <FontAwesomeIcon className="f-select-caret" icon={faCaretDown} />
        </button>
        <fieldset className="f-select-options f-closed">
          <input type="radio" name="nato" id="alphaRadio" />
          <label htmlFor="alphaRadio">Alpha testing very long content</label>
          <input type="radio" name="nato" id="alphaRadio" />
          <label htmlFor="alphaRadio">Alpha</label>
          <input type="radio" name="nato" id="alphaRadio" />
          <label htmlFor="alphaRadio">Alpha</label>
        </fieldset>
      </div>
    </>
  )
}
