import React, { ReactNode, MouseEvent } from 'react'
import { Customizable, Testable } from '../../../../common-props'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../../../utils'
import './SecondaryBtn.scss'

interface SecondaryButtonProps extends Testable, Customizable {
  /** The content of the component. */
  children: ReactNode
  /** Click event handler for the button. */
  onClick?: (e: MouseEvent) => void
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label?: string
}

const SecondaryBtn = ({
  children,
  onClick = (e: MouseEvent) => {},
  label,
  className,
  style,
  'data-testId': testId
}: SecondaryButtonProps) => {
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
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
