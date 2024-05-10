import React, { forwardRef, ComponentProps } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'

type Options = Array<{
  label: string
  value: string
}>

type Props = Pick<
  ComponentProps<typeof SelectPrimitive.Root>,
  'defaultValue' | 'value' | 'onValueChange'
> & {
  options: Options
  id?: string
  name?: string
}

const renderOptions = (options: Options) => {
  return options.map(({ label, value }) => (
    <SelectPrimitive.Item
      value={value}
      key={value}
      className="relative cursor-pointer rounded-md px-6 py-1 pr-2 font-light focus:bg-indigo-50 focus:text-indigo-700"
    >
      <SelectPrimitive.ItemIndicator className="absolute left-1 top-1/2 -translate-y-1/2">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ))
}
export const Select = forwardRef<HTMLButtonElement, Props>(
  ({ defaultValue, value, onValueChange, options, id, name }, ref) => {
    return (
      <SelectPrimitive.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        name={name}
      >
        <SelectPrimitive.Trigger
          id={id}
          ref={ref}
          className="flex h-9 flex-row items-center justify-between rounded-md border border-indigo-300 px-2 font-light focus:outline-0"
        >
          <SelectPrimitive.Value aria-label={value} />
          <SelectPrimitive.Icon>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="z-40 rounded-md border border-indigo-50 bg-white p-1 shadow-2xl">
            <SelectPrimitive.ScrollUpButton />
            <SelectPrimitive.Viewport>
              {renderOptions(options)}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton />
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

Select.displayName = 'Select'
