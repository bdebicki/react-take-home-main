import React, { forwardRef, MouseEvent } from 'react'
import classnames from 'classnames'

type Props = {
  children: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  type?: HTMLButtonElement['type']
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, variant = 'primary', type = 'button' }, ref) => {
    const classNames = classnames(
      'h-9 rounded-md border border-indigo-700 px-4 py-1.5 text-sm font-light transition-colors',
      {
        'bg-indigo-500 text-white  hover:bg-indigo-600': variant === 'primary',
        'bg-transparent text-indigo-800 hover:bg-indigo-400 hover:text-white':
          variant === 'secondary'
      }
    )

    return (
      <button onClick={onClick} ref={ref} className={classNames} type={type}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
