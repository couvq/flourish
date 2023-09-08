import React from 'react'
import './Flex.scss'

enum FlexDirection {
  ROW = 'row',
  COL = 'col',
  ROW_REVERSE = 'row-reverse',
  COL_REVERSE = 'col-reverse'
}

enum JustifyContent {
  START = 'start',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
  SPACE_EVENLY = 'space-evenly'
}

interface FlexProps {
  /** The content of our flex-box wrapper. */
  children: React.ReactNode
  /** Direction for our flex-box wrapper. */
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  /**  Space distribution and alignment of flex items along the main axis. */
  justifyContent?: /** eslint-disable */
  'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  /** eslint-disable */
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

const getFlexJustifyContentClass = (justifyContent?: string): string => {
  switch (justifyContent) {
    case JustifyContent.START:
      return 'f-flex-jc-start'
    case JustifyContent.CENTER:
      return 'f-flex-jc-center'
    case JustifyContent.SPACE_BETWEEN:
      return 'f-flex-jc-space-between'
    case JustifyContent.SPACE_AROUND:
      return 'f-flex-jc-space-around'
    case JustifyContent.SPACE_EVENLY:
      return 'f-flex-jc-space-evenly'
    default:
      return 'f-flex-jc-start'
  }
}

export const Flex = ({ children, direction, justifyContent }: FlexProps) => {
  return (
    <div
      className={`f-flex ${getFlexDirectionClass(
        direction
      )} ${getFlexJustifyContentClass(justifyContent)}`}
    >
      {children}
    </div>
  )
}
