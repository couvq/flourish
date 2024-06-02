import React, { MouseEvent, ReactNode } from 'react'
import { Customizable, Testable } from '../../common-props'
import IconBtn, { IconButtonProps } from './variants/IconBtn'
import PrimaryBtn from './variants/PrimaryBtn'
import SecondaryBtn from './variants/SecondaryBtn'

export interface CommonButtonProps extends Testable, Customizable {
  /** Click event handler for the button. */
  onClick?: (e: MouseEvent) => void
  /** Whether or not the button is disabled */
  disabled?: boolean
}

export interface ButtonProps {
  /** The button variant to use. */
  variant?: 'primary' | 'secondary'
  /** The content of the component. */
  children: ReactNode
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label?: string
  /** The type of icon to display in the button. */
  icon?: never
}

type ButtonConditionalProps = ButtonProps | IconButtonProps

export const Button = ({
  children,
  icon,
  variant = 'secondary',
  onClick,
  label = '',
  disabled,
  className,
  style,
  'data-testId': testId
}: CommonButtonProps & ButtonConditionalProps) => {
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
      {variant === 'icon' ? (
        <IconBtn
          icon={icon}
          onClick={onClick}
          label={label}
          disabled={disabled}
          className={className}
          style={style}
          data-testId={testId}
        />
      ) : null}
    </>
  )
}
