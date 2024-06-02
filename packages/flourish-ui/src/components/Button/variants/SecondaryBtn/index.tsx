import React, { MouseEvent, ReactNode } from 'react'
import { CommonButtonProps } from '../..'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../../../utils'
import './SecondaryBtn.scss'

interface SecondaryBtnProps {
  /** The content of the component. */
  children: ReactNode
   /** Adds an aria-label to the button to override the accessible name for screenreaders. */
   label?: string
}

const SecondaryBtn = ({
  children,
  onClick = (e: MouseEvent) => {},
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: CommonButtonProps & SecondaryBtnProps) => {
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
