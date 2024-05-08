import React, { ElementType, ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  as?: ElementType
  children: ReactNode
  className?: string
}

export const LayoutCenterer = ({ as = 'div', children, className }: Props) => {
  const Comment = as
  const classNames = classnames('mx-auto max-w-screen-lg px-9', className)

  return <Comment className={classNames}>{children}</Comment>
}
