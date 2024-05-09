import React, { forwardRef } from 'react'
import { Pencil1Icon } from '@radix-ui/react-icons'

export const EditTrigger = forwardRef<HTMLButtonElement>((props, ref) => (
  <button
    ref={ref}
    className="absolute inset-0 flex flex-col items-center justify-center rounded-inherit border border-indigo-800 bg-indigo-800/75 text-indigo-100 opacity-0 transition-opacity group-hover:opacity-100"
    {...props}
  >
    <Pencil1Icon className="size-8 text-indigo-100" />
    Edit product
  </button>
))

EditTrigger.displayName = 'EditTrigger'
