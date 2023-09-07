import React from 'react'

export interface Testable {
  /** Set a unique data-testId on the component for testing purposes. */
  'data-testId'?: string
}

export interface Customizable {
  /** Set your own classes to customize flourish component styles. */
  className?: string
  /** Set your own styles with the native style prop to customize flourish component styles. */
  style?: React.CSSProperties
}
