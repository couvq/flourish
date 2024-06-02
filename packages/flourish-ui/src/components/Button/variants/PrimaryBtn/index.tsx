import React, { MouseEvent, ReactNode } from 'react'
import { CommonButtonProps } from '../..'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../../../utils'
import '../../Button.scss'
import './PrimaryBtn.scss'

interface PrimaryBtnProps {
   /** The content of the component. */
   children: ReactNode
    /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label?: string
}

const PrimaryBtn = ({
  children,
  onClick = (e: MouseEvent) => {},
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: CommonButtonProps & PrimaryBtnProps) => (
  <button
    className={classMerge('f-button', 'f-button-primary', className)}
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

export default PrimaryBtn
