import React from 'react'
import './Flex.scss'

enum FlexDirection {
  ROW = 'row',
  COL = 'col',
  ROW_REVERSE = 'row-reverse',
  COL_REVERSE = 'col-reverse'
}

interface FlexProps {
  /** The content of our flex-box wrapper. */
  children: React.ReactNode
  /** Direction for our flex-box wrapper. */
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
}

const getFlexDirectionClass = (direction?: string): string => {
  switch (direction) {
    case FlexDirection.COL:
      return 'f-flex-col'
    case FlexDirection.COL_REVERSE:
      return 'f-flex-col-reverse'
    case FlexDirection.ROW:
      return 'f-flex-row'
    case FlexDirection.ROW_REVERSE:
      return 'f-flex-row-reverse'
    default:
      return 'f-flex-col'
  }
}

export const Flex = ({ children, direction }: FlexProps) => {
  return (
    <div className={`f-flex ${getFlexDirectionClass(direction)}`}>
      {children}
    </div>
  )
}
