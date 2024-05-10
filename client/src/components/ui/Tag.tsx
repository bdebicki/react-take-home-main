import React, { ReactNode } from 'react'
import classnames from 'classnames'

type Props = {
  as?: 'span' | 'label'
  children: ReactNode
  htmlFor?: string
  isActive?: boolean
}

export const Tag = ({ children, as = 'span', htmlFor, isActive }: Props) => {
  const Component = as
  const classNames = classnames(
    'rounded bg-gray-100 px-2 py-1 text-xs text-gray-800',
    {
      'bg-indigo-200': isActive
    }
  )

  return (
    <Component className={classNames} htmlFor={htmlFor}>
      {children}
    </Component>
  )
}
