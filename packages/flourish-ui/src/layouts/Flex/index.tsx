import React from 'react'
import { Customizable, Testable } from '../../common-props'
import { classMerge } from '../../utils'
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

enum AlignItems {
  STRETCH = 'stretch',
  CENTER = 'center',
  START = 'start',
  END = 'end'
}

interface FlexProps extends Testable, Customizable {
  /** Content of flex-box wrapper. */
  children: React.ReactNode
  /** Direction for flex-box wrapper. */
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  /**  Alignment of flex items along the main axis. */
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Alignment of flex items along the cross axis. */
  alignItems?: 'stretch' | 'center' | 'start' | 'end'
  /** Amount of space between each flex item, from 0-16. */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
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

const getFlexAlignItemsClass = (alignItems?: string): string => {
  switch (alignItems) {
    case AlignItems.STRETCH:
      return 'f-flex-ai-stretch'
    case AlignItems.CENTER:
      return 'f-flex-ai-center'
    case AlignItems.START:
      return 'f-flex-ai-start'
    case AlignItems.END:
      return 'f-flex-ai-end'
    default:
      return 'f-flex-ai-stretch'
  }
}

const getFlexGapClass = (gap?: number): string => {
  if (!gap || gap < 0) {
    return 'f-flex-gap-0'
  }

  if (gap > 16) {
    return 'f-flex-gap-16'
  }

  return `f-flex-gap-${gap}`
}

export const Flex = ({
  children,
  direction,
  justifyContent,
  alignItems,
  gap,
  className,
  style,
  'data-testId': testId
}: FlexProps) => {
  return (
    <div
      style={style}
      data-testId={testId}
      className={classMerge(
        'f-flex',
        className,
        getFlexDirectionClass(direction),
        getFlexJustifyContentClass(justifyContent),
        getFlexAlignItemsClass(alignItems),
        getFlexGapClass(gap)
      )}
    >
      {children}
    </div>
  )
}
