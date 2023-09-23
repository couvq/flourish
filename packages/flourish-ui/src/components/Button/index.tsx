import React, { MouseEvent, ReactNode } from 'react'
import { Customizable, Testable } from '../../common-props'
import PrimaryBtn from './variants/PrimaryBtn'
import SecondaryBtn from './variants/SecondaryBtn'

interface CommonButtonProps extends Testable, Customizable {
  /** The content of the component. */
  children: ReactNode
  /** The button variant to use. */
  variant?: 'primary' | 'secondary'
  /** Click event handler for the button. */
  onClick?: (e: MouseEvent) => void
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label?: string
  /** Whether or not the button is disabled */
  disabled?: boolean
}

type ButtonProps = CommonButtonProps

export const Button = ({
  children,
  variant = 'secondary',
  onClick,
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: ButtonProps) => {
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
          className={className}
          style={style}
          data-testId={testId}
        >
          {children}
        </SecondaryBtn>
      ) : null}
    </>
  )
}
