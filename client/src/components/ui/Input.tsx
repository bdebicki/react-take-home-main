import React, { ChangeEvent, forwardRef } from 'react'

type Props = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  id?: string
  name: string
  type?: HTMLInputElement['type']
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ onChange, id, value, type = 'text', name }, ref) => {
    return (
      <input
        className="h-9 rounded-md border border-indigo-300 px-2 font-light focus:outline-0"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    )
  }
)

Input.displayName = 'Input'
