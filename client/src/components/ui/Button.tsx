import React, { MouseEvent } from 'react'
import classnames from 'classnames'

type Props = {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'primary' | 'secondary'
}

export const Button = ({ children, onClick, type = 'primary' }: Props) => {
  const classNames = classnames(
    'rounded-md border border-indigo-700 px-4 py-1.5 text-sm font-light transition-colors',
    {
      'bg-indigo-500 text-white  hover:bg-indigo-600': type === 'primary',
      'bg-transparent text-indigo-800 hover:bg-indigo-400 hover:text-white':
        type === 'secondary'
    }
  )

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  )
}
