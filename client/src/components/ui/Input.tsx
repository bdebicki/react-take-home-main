import React from 'react'

type InputProps = {
  value: string
  onChange?: () => void
}

export const Input = ({ value, onChange }: InputProps) => (
  <input type="text" value={value} onChange={onChange} />
)
