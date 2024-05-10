import React, { ReactElement, useId } from 'react'
import { FormField, FormLabel, FormControl } from '@radix-ui/react-form'
import classnames from 'classnames'

type Props = {
  label: string
  name?: string
  className?: string
  children: ReactElement
  id?: string
  asChild?: boolean
}

export const Field = ({
  name,
  label,
  id,
  className,
  children,
  asChild = true
}: Props) => {
  const fieldName = name
    ? name
    : label.toLowerCase().replace(' ', '-').replace(':', '')
  const fieldClassNames = classnames('flex', 'flex-col', 'gap-1', className)
  const dynamicId = useId()
  const fieldId = id || dynamicId

  return (
    <FormField name={fieldName} className={fieldClassNames}>
      <FormLabel htmlFor={fieldId} className="text-base font-light">
        {label}
      </FormLabel>
      {asChild ? (
        <FormControl id={fieldId} aria-describedby={fieldId} asChild>
          {children}
        </FormControl>
      ) : (
        children
      )}
    </FormField>
  )
}
