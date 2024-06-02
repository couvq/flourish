import React from 'react'
import { CommonButtonProps } from '../..'

export interface IconButtonProps {
  /** The button variant to use. */
  variant: 'icon'
  /** The type of icon to display in the button. */
  icon: 'close'
  /** The content of the component. */
  children?: never
}

interface IconBtnProps {
  /** The type of icon to display in the button. */
  icon?: 'close'
}

const IconBtn = ({
  icon,
  onClick,
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: CommonButtonProps & IconBtnProps) => {
  return <div>{icon}</div>
}

export default IconBtn
