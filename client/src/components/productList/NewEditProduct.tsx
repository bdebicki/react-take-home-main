import React from 'react'
import type { Product } from '../../types/product'
import { Root, Submit } from '@radix-ui/react-form'
import { Field } from '../ui/Field'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Button } from '../ui/Button'

type NewEditProductProps = {
  name?: Product['name']
  sizes?: Product['sizes']
  type?: Product['type']
  features?: Product['features']
  brand?: Product['brand']
  id?: Product['id']
  onSave: () => void
}

export const NewEditProduct = ({
  name,
  sizes,
  type,
  features,
  brand,
  id,
  onSave
}: NewEditProductProps) => (
  <Root>
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
    <Submit asChild>
      <Button onClick={onSave}>save</Button>
    </Submit>
  </Root>
)