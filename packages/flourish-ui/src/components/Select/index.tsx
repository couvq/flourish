import React, { ChangeEvent, useId } from 'react'
import { Customizable, Testable } from '../../common-props'

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

export const Select = ({
  label,
  labelVisible,
  options,
  onChange = (e: ChangeEvent) => {},
  className,
  style,
  'data-testId': testId
}: SelectProps) => {
  const accessibleUniqId = useId()
  return (
    <>
      {labelVisible ? (
        <label htmlFor={`f-select-${accessibleUniqId}`}>{label}</label>
      ) : null}
      <select
        aria-label={label}
        id={`f-select-${accessibleUniqId}`}
        onChange={onChange}
        className={className}
        style={style}
        data-testId={testId}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  )
}
