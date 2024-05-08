import React, { MouseEvent } from 'react'

type Props = {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>
}
