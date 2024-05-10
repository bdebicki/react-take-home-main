import React, { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  as?: 'span' | 'label'
  children: ReactNode
  htmlFor?: string
  isActive?: boolean
  className?: string
}

export const Tag = ({
  children,
  as = 'span',
  htmlFor,
  isActive,
  className
}: Props) => {
  const Component = as
  const classNames = classnames(
    'whitespace-nowrap rounded bg-gray-100 px-2 py-1 text-xs text-gray-800',
    {
      'bg-indigo-200': isActive
    },
    className
  )

  return (
    <Component className={classNames} htmlFor={htmlFor}>
      {children}
    </Component>
  )
}
