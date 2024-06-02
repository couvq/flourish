import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CommonButtonProps } from '../..'
import {
  classMerge,
  createRipple,
  removeFocusGrowEffect,
  toggleFocusGrowEffect
} from '../../../../utils'
import '../../Button.scss'
import './IconBtn.scss'

export interface IconButtonProps {
  /** The button variant to use. */
  variant: 'icon'
  /** The type of icon to display in the button. */
  icon: 'close'
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label: string
  /** The content of the component. */
  children?: never
}

interface IconBtnProps {
  /** The type of icon to display in the button. */
  icon?: 'close'
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label: string
}

const getFontawesomeIconForIconType = (
  iconType: IconBtnProps['icon']
): IconDefinition => {
  switch (iconType) {
    case 'close':
      return faXmark
    default:
      return faXmark
  }
}

const IconBtn = ({
  icon,
  onClick = (e: React.MouseEvent<Element, MouseEvent>) => {},
  label,
  disabled,
  className,
  style,
  'data-testId': testId
}: CommonButtonProps & IconBtnProps) => {
  return (
    <button
      className={classMerge('f-button', 'f-button-icon', className)}
      style={style}
      data-testId={testId}
      onMouseDown={(e) => e.preventDefault()}
      onFocus={(e) => toggleFocusGrowEffect(e, 0.9)}
      onBlur={removeFocusGrowEffect}
      onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
        createRipple(e)
        onClick(e)
      }}
      aria-label={label}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={getFontawesomeIconForIconType(icon)} />
    </button>
  )
}

export default IconBtn
