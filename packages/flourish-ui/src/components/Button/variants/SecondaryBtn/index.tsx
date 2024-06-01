import React, { MouseEvent } from 'react'
import { ButtonProps, CommonButtonProps } from '../..'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../../../utils'
import './SecondaryBtn.scss'

const SecondaryBtn = ({
  children,
  onClick = (e: MouseEvent) => {},
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: CommonButtonProps & ButtonProps) => {
  return (
    <button
      className={classMerge('f-button', 'f-button-secondary', className)}
      style={style}
      data-testId={testId}
      onFocus={toggleFocusGrowEffect}
      onBlur={removeFocusGrowEffect}
      onMouseDown={(e) => e.preventDefault()}
      onClick={(e: MouseEvent) => {
        createRipple(e)
        onClick(e)
      }}
      aria-label={label}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
