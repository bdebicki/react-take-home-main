import React from 'react'

type SelectProps = {
  value: any
  options?: Array<{
    label: string
    value: string
  }>
  onChange?: () => void
}

export const Select = ({ value, options, onChange }: SelectProps) => (
  <p>{value}</p>
)
