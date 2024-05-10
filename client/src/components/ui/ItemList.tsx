import React, { ReactNode } from 'react'
import { Tag } from './Tag'
import classnames from 'classnames'

type Item = ReactNode

type Props = {
  label?: string
  presentation: 'tag' | 'dot' | 'pipe'
  items: Array<Item>
  className?: string
}

export const ItemList = ({
  label,
  presentation = 'dot',
  items,
  className
}: Props) => {
  const liClassNames = classnames(
    {
      'before:text-indigo-200 from-2nd:before:pr-2': presentation !== 'tag',
      "from-2nd:before:content-['|'] ": presentation === 'pipe',
      "from-2nd:before:content-['•']": presentation === 'dot'
    },
    className
  )

  return (
    <div className="flex">
      {label ? <span className="mr-1 text-gray-400">{label}</span> : null}
      <ul className="flex flex-wrap gap-x-2">
        {items.map((item: Item) => (
          <li className={liClassNames} key={`${label}-${item?.toString()}`}>
            {presentation === 'tag' ? <Tag>{item}</Tag> : item}
          </li>
        ))}
      </ul>
    </div>
  )
}
