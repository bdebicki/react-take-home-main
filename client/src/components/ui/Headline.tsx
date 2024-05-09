import React from 'react'
import classnames from 'classnames'

type Props = {
  children: string
  level?: 1 | 2 | 3
  className?: string
}

const levelToSizeMap = {
  1: 'text-6xl font-bold',
  2: 'text-4xl font-normal',
  3: 'text-xl font-bold'
}

export const Headline = ({ children, level = 1, className }: Props) => {
  const Component = `h${level}` as const
  const classNames = classnames(
    'text-gray-900',
    levelToSizeMap[`${level}`],
    className
  )

  return <Component className={classNames}>{children}</Component>
}
