import { ChevronRight } from 'lucide-react'
import React from 'react'
import {
  Breadcrumb,
  Breadcrumbs as ReactAriaBreadcrumbs,
  BreadcrumbsProps as ReactAriaBreadcrumbsProps,
  Link
} from 'react-aria-components'
import { Testable } from '../../common-props'
import './Breadcrumbs.scss'

export interface BreadcrumbItem {
  /** Unique id of the item. */
  id: number | string
  /** Accessible label of the item. */
  label: string
  /** URL for the item. */
  href: string
}

export interface BreadcrumbsProps<T extends object>
  extends Pick<ReactAriaBreadcrumbsProps<T>, 'children'>,
    Testable {
  /** Items to render as breadcrumb links. */
  items?: BreadcrumbItem[]
}

export const Breadcrumbs = <T extends object>({
  items = [],
  'data-testId': testId
}: BreadcrumbsProps<T>) => {
  const isLastItem = (id: BreadcrumbItem['id']) =>
    id === items[items.length - 1].id

  return (
    <ReactAriaBreadcrumbs items={items}>
      {(item) => (
        <Breadcrumb key={item.id}>
          <Link href={item.href} data-testId={`${testId}-link-${item.id}`}>{item.label}</Link>
          {!isLastItem(item.id) && <ChevronRight width={20} height={20} className="f-breadcrumb-separator" />}
        </Breadcrumb>
      )}
    </ReactAriaBreadcrumbs>
  )
}
