import React, { ReactNode, MouseEvent } from 'react'
import { Customizable, Testable } from '../../../../common-props'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../../../utils'
import '../../Button.scss'
import './PrimaryBtn.scss'

interface PrimaryButtonProps extends Testable, Customizable {
  /** The content of the component. */
  children: ReactNode
  /** Click event handler for the button. */
  onClick?: (e: MouseEvent) => void
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label?: string
}

const PrimaryBtn = ({
  children,
  onClick = (e: MouseEvent) => {},
  label,
  className,
  style,
  'data-testId': testId
}: PrimaryButtonProps) => (
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
  >
    {children}
  </button>
)

export default PrimaryBtn
