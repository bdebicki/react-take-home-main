import React, { forwardRef } from 'react'

type Props = {
  value?: string
  onChange?: () => void
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange }, ref) => (
    <input type="text" value={value} onChange={onChange} ref={ref} />
  )
)

Input.displayName = 'Input'
