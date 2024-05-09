import React, { forwardRef, ReactElement } from 'react'
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import classnames from 'classnames'

type Props = {
  icon: ReactElement
  label: string
  onClick?: () => void
  type?: HTMLButtonElement['type']
  className?: string
}
export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ icon, label, onClick, className, type = 'button' }, ref) => {
    const classNames = classnames(
      'rounded-full p-1 text-indigo-900 hover:bg-indigo-200 active:bg-indigo-400 active:text-indigo-50',
      className
    )

    return (
      <button
        onClick={onClick}
        title={label}
        aria-label={label}
        ref={ref}
        type={type}
        className={classNames}
      >
        {icon}
        <VisuallyHidden>{label}</VisuallyHidden>
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
