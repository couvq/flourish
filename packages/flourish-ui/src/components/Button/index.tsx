import React, { MouseEvent, ReactNode } from 'react'
import { Customizable, Testable } from '../../common-props'
import IconBtn from './variants/IconBtn'
import PrimaryBtn from './variants/PrimaryBtn'
import SecondaryBtn from './variants/SecondaryBtn'

export interface CommonButtonProps extends Testable, Customizable {
  /** Click event handler for the button. */
  onClick?: (e: MouseEvent) => void
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label?: string
  /** Whether or not the button is disabled */
  disabled?: boolean
}

export interface ButtonProps {
  /** The button variant to use. */
  variant?: 'primary' | 'secondary' | 'icon'
  /** The content of the component. */
  children: ReactNode
}

export const Button = ({
  children,
  variant = 'secondary',
  onClick,
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: ButtonProps & CommonButtonProps) => {
  return (
    <>
      {variant === 'primary' ? (
        <PrimaryBtn
          onClick={onClick}
          label={label}
          disabled={disabled}
          className={className}
          style={style}
          data-testId={testId}
        >
          {children}
        </PrimaryBtn>
      ) : null}
      {variant === 'secondary' ? (
        <SecondaryBtn
          onClick={onClick}
          label={label}
          disabled={disabled}
          className={className}
          style={style}
          data-testId={testId}
        >
          {children}
        </SecondaryBtn>
      ) : null}
      {variant === 'icon' ? <IconBtn /> : null}
    </>
  )
}
