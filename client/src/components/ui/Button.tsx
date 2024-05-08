import React, { MouseEvent } from 'react'

type Props = {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'primary' | 'secondary'
}

export const Button = ({ children, onClick, type }: Props) => {
  return <button onClick={onClick}>{children}</button>
}
