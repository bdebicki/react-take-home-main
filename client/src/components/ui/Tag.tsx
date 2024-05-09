import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Tag = ({ children }: Props) => (
  <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800">
    {children}
  </span>
)
