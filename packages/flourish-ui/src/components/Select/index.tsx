import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useId,
  useRef,
  useState
} from 'react'
import { Customizable, Testable } from '../../common-props'
import { useClickOutsideEffect } from '../../hooks'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../utils'
import './Select.scss'

interface SelectOption {
  /** Accessible name for the select option. */
  label: string
  /** Value of the select option. */
  value: string
  /** Whether or not the select option is disabled */
  disabled?: boolean
}

interface SelectProps extends Testable, Customizable {
  /** Controls text content of the trigger for the component. */
  value: string
  /** Options to select from the component. */
  options: SelectOption[]
  /** Change event handler for the component, can use to set a new value when selected. */
  onSelect?: (e: MouseEvent | FocusEvent, value: string) => void
}

const toggleCaretIconRotateEffect = (uniqId: string) => {
  const caret = document.querySelector(
    `#f-select-${CSS.escape(uniqId)} .f-select-caret`
  )
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

const toggleSelectOptionsOpen = (uniqId: string) => {
  const selectOptions = document.querySelector(
    `#f-select-${CSS.escape(uniqId)} .f-select-options`
  )
  selectOptions?.classList.toggle('f-closed')
}

/**
 * Checks if an item is selected, if it is then it focuses that item
 */
const moveSelectItemFocus = (uniqId: string) => {
  const selectItems = document.querySelectorAll(
    `#f-select-${CSS.escape(uniqId)} .f-select-item-radio`
  )
  for (const item of selectItems) {
    // @ts-ignore
    if (item.parentNode.classList.contains('f-select-item-selected')) {
      // @ts-ignore
      item.focus()
      return
    }
  }
  // @ts-ignore
  selectItems[0].focus()
}

export const Select = ({
  value,
  options,
  onSelect = (e: MouseEvent | FocusEvent) => {},
  className,
  style,
  'data-testId': testId
}: SelectProps) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const a11yUniqId = useId()
  const selectRef = useRef(null)
  const triggerRef = useRef(null)

  /**
   * Closes select options when click detected outside
   * todo - focus not moving back on close with custom hook
   */
  const handleClickOutside = () => {
    if (expanded) {
      toggleCaretIconRotateEffect(a11yUniqId)
      toggleSelectOptionsOpen(a11yUniqId)
      setExpanded(false)
    }
  }
  useClickOutsideEffect(selectRef, handleClickOutside, [expanded])

  /**
   * Closes the dropdown and moves focus back to the select trigger
   * in the event the escape or enter key is pressed
   */
  const handleSelectItemDismissKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      toggleCaretIconRotateEffect(a11yUniqId)
      toggleSelectOptionsOpen(a11yUniqId)
      // @ts-ignore
      triggerRef.current.focus()
      setExpanded(!expanded)
    }
  }

  /**
   * Closes the dropdown and moves focus back to the select trigger
   * in the event the select item is clicked
   */
  const handleSelectItemDismissClick = (e: MouseEvent) => {
    toggleCaretIconRotateEffect(a11yUniqId)
    toggleSelectOptionsOpen(a11yUniqId)
    // @ts-ignore
    triggerRef.current.focus()
    setExpanded(!expanded)
  }

  return (
    <>
      <div ref={selectRef} id={`f-select-${a11yUniqId}`} className="f-select">
        <button
          ref={triggerRef}
          role="combobox"
          aria-label={value}
          aria-haspopup="listbox"
          aria-expanded={expanded}
          aria-controls="f-select-options"
          className="f-select-trigger"
          onFocus={toggleFocusGrowEffect}
          onBlur={removeFocusGrowEffect}
          onMouseDown={(e) => {
            e.preventDefault()
            createRipple(e)
            toggleCaretIconRotateEffect(a11yUniqId)
            toggleSelectOptionsOpen(a11yUniqId)
            setExpanded(!expanded)
            moveSelectItemFocus(a11yUniqId)
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              toggleCaretIconRotateEffect(a11yUniqId)
              toggleSelectOptionsOpen(a11yUniqId)
              setExpanded(!expanded)
              moveSelectItemFocus(a11yUniqId)
            }
          }}
        >
          {value}
          <FontAwesomeIcon className="f-select-caret" icon={faCaretDown} />
        </button>
        <div
          role="listbox"
          id="f-select-options"
          className="f-select-options f-closed"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={classMerge(
                options.length > 1 ? 'f-select-item' : 'f-select-item-single',
                selectedItemIndex === index
                  ? 'f-select-item-selected'
                  : undefined
              )}
              onMouseDown={(e) => {
                setSelectedItemIndex(index)
                onSelect(e, option.value)
                createRipple(e)
                handleSelectItemDismissClick(e)
              }}
              onFocus={(e) => {
                setSelectedItemIndex(index)
                onSelect(e, option.value)
              }}
            >
              <input
                className="f-select-item-radio"
                onKeyDown={handleSelectItemDismissKey}
                value={option.value}
                type="radio"
                name="nato"
                id={`${option.value}-${a11yUniqId}`}
              />
              <label
                className="f-select-item-label"
                htmlFor={`${option.value}-${a11yUniqId}`}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
