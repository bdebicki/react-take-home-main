import React from 'react'
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Tag } from './Tag'

type Props = {
  options: Array<string>
  value: Array<string>
  onChange: (selectedOptions: Array<string>) => void
}

export const MultiCheckbox = ({ options, value, onChange }: Props) => {
  const handleCheckboxChange = (option: string) => {
    const updatedSelectedOptions = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option]

    onChange(updatedSelectedOptions)
  }

  return (
    <ul className="flex flex-row gap-1">
      {options.map((option) => {
        const id = option.replace(' ', '-').toLowerCase()
        const isChecked = value.includes(option)

        return (
          <li key={id}>
            <VisuallyHidden>
              <input
                id={id}
                type="checkbox"
                value={option}
                checked={isChecked}
                onChange={() => handleCheckboxChange(option)}
              />
            </VisuallyHidden>
            <Tag
              as="label"
              isActive={isChecked}
              htmlFor={id}
              className="cursor-pointer"
            >
              {option}
            </Tag>
          </li>
        )
      })}
    </ul>
  )
}
