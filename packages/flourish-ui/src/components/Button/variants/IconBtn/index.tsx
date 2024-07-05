import {
  faXmark,
  faBars,
  faLightbulb,
  faSun,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
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
  icon: 'close' | 'bars' | 'light bulb' | 'sun'
  /** Adds an aria-label to the button to override the accessible name for screenreaders. */
  label: string
  /** The content of the component. */
  children?: never
}

interface IconBtnProps {
  /** The type of icon to display in the button. */
  icon?: 'close' | 'bars' | 'light bulb' | 'sun'
  /** Adds an aria-label to the button to override the accessible name for screenreaders.
   * This is important for icon buttons as they don't contain text content for the accessible name.
   */
  label: string
}

export const getFontawesomeIconForIconType = (
  iconType: IconBtnProps['icon']
): IconDefinition => {
  switch (iconType) {
    case 'close':
      return faXmark
    case 'bars':
      return faBars
    case 'light bulb':
      return faLightbulb
    case 'sun':
      return faSun
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
      onFocus={toggleFocusGrowEffect}
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
