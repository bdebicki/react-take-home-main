import React, { forwardRef, MouseEvent } from 'react'
import classnames from 'classnames'

type Props = {
  children: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  type?: HTMLButtonElement['type']
  isDisabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, onClick, variant = 'primary', type = 'button', isDisabled },
    ref
  ) => {
    const classNames = classnames(
      'h-9 rounded-md border border-indigo-700 px-4 py-1.5 text-sm font-light transition-colors',
      {
        'bg-indigo-500 text-white  hover:bg-indigo-600': variant === 'primary',
        'bg-transparent text-indigo-800 hover:bg-indigo-400 hover:text-white':
          variant === 'secondary',
        'pointer-events-none opacity-40': isDisabled
      }
    )

    return (
      <button
        aria-disabled={isDisabled}
        onClick={onClick}
        ref={ref}
        className={classNames}
        type={type}
        disabled={isDisabled}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
