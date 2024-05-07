import React, { forwardRef } from 'react'

type InputProps = {
  value?: string
  onChange?: () => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange }, ref) => (
    <input type="text" value={value} onChange={onChange} ref={ref} />
  )
)

Input.displayName = 'Input'
