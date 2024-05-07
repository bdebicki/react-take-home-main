import React, { forwardRef } from 'react'

type SelectProps = {
  value?: any
  options?: Array<{
    label: string
    value: string
  }>
  onChange?: () => void
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ value, options, onChange }, ref) => <p ref={ref}>{value}</p>
)

Select.displayName = 'Select'
