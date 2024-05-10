import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

type Props = {
  children: string
}

export const Alert = ({ children }: Props) => (
  <span className="relative flex gap-1 rounded-md border border-red-200 bg-red-50 py-1 pl-7 pr-3 text-sm font-light text-red-700">
    <ExclamationTriangleIcon className="absolute left-2 top-[7px]" /> {children}
  </span>
)
