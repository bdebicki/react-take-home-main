import React from 'react'
import type { Product } from '../../types/product'
import { Root } from '@radix-ui/react-form'
import { Field } from '../ui/Field'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'

type Props = {
  name?: Product['name']
  sizes?: Product['sizes']
  type?: Product['type']
  features?: Product['features']
  brand?: Product['brand']
}

export const ProductForm = ({ name, sizes, type, features, brand }: Props) => {
  return (
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
    </Root>
  )
}
