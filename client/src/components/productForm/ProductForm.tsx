import React, { MouseEvent } from 'react'
import type { Product } from '../../types/product'
import { Root, Submit } from '@radix-ui/react-form'
import { Field } from '../ui/Field'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Button } from '../ui/Button'

type Props = {
  name?: Product['name']
  sizes?: Product['sizes']
  type?: Product['type']
  features?: Product['features']
  brand?: Product['brand']
  id?: Product['id']
  onSave: () => void
  onCancel: () => void
  isPending?: boolean
}

export const ProductForm = ({
  name,
  sizes,
  type,
  features,
  brand,
  id,
  onSave,
  onCancel,
  isPending
}: Props) => {
  const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSave()
  }
  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onCancel()
  }

  return (
    <Root className="bg-gray-50">
      <Field label="Product name">
        <Input value={name} />
      </Field>
      <Field label="Product type">
        <Select value={type} />
      </Field>
      {type ? (
        <>
          {sizes ? (
            <Field label="Sizes">
              <Select value={sizes} />
            </Field>
          ) : null}
          {features ? (
            <Field label="Features">
              <Select value={features} />
            </Field>
          ) : null}
          {brand ? (
            <Field label="Brand">
              <Input value={brand} />
            </Field>
          ) : null}
        </>
      ) : null}
      <Button onClick={handleSave}>{isPending ? 'Saving' : 'Save'}</Button>
      <Button type="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Root>
  )
}
