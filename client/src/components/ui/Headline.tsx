import React from 'react'

type Props = {
  children: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Headline = ({ children, level = 1 }: Props) => {
  const Component = `h${level}` as const

  return <Component>{children}</Component>
}
