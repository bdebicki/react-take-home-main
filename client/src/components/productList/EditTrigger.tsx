import React from 'react'
import { Pencil1Icon } from '@radix-ui/react-icons'

type Props = {
  onClick: () => void
}

export const EditTrigger = ({ onClick }: Props) => (
  <button
    className="rounded-inherit absolute inset-0 flex flex-col items-center justify-center border border-indigo-800 bg-indigo-800/75 text-indigo-100 opacity-0 transition-opacity group-hover:opacity-100"
    onClick={onClick}
  >
    <Pencil1Icon className="size-8 text-indigo-100" />
    Edit product
  </button>
)
