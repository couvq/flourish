import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Customizable, Testable } from '../../common-props'
import { classMerge } from '../../utils'
import './Link.scss'

interface LinkProps extends Testable, Customizable {
  /** The content of the component. */
  children: React.ReactNode
  /** Url the link should take the user to. */
  href: string
  /** Adds an aria-label to the link to override the accessible name for screenreaders. */
  label?: string
  /** Indicates that the link opens in a new tab. */
  external?: boolean
}

export const Link = ({
  children,
  href,
  label,
  external,
  className,
  style,
  'data-testId': testId
}: LinkProps) => {
  return external ? (
    <a
      className={classMerge('f-link', className)}
      style={style}
      data-testId={testId}
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span className="f-icon-external">
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </span>
    </a>
  ) : (
    <a
      className={classMerge('f-link', className)}
      style={style}
      data-testId={testId}
      href={href}
      aria-label={label}
    >
      {children}
    </a>
  )
}
