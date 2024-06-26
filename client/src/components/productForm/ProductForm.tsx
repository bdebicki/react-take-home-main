import React, { ChangeEvent } from 'react'
import { Root } from '@radix-ui/react-form'
import { Field } from '../ui/Field'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import {
  clothesSize,
  featureList,
  footwearSize,
  productType
} from '../../constants/productValues'
import { MultiCheckbox } from '../ui/MultiCheckbox'
import type { FetchErrors, FormData } from '../../types/form'
import type {
  ProductTypeValues,
  SizeClothes,
  SizeFootwear
} from '../../types/product'
import { Alert } from '../ui/Alert'

type Props = {
  formData: FormData
  errors?: FetchErrors
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (name: string, value: string) => void
  onMultiCheckboxChange: (name: string, selectedOptions: Array<string>) => void
}

export const ProductForm = ({
  formData: { name, type, features, sizes, brand },
  errors,
  onInputChange,
  onSelectChange,
  onMultiCheckboxChange
}: Props) => {
  return (
    <Root className="flex flex-col gap-3">
      {errors && errors.length > 0
        ? errors.map(({ message }, index) => (
            <Alert key={`error-${index}`}>{message}</Alert>
          ))
        : null}
      <Field label="Product name">
        <Input name="name" value={name} onChange={onInputChange} />
      </Field>
      <Field label="Product type">
        <Select
          name="type"
          options={productType}
          value={type}
          onValueChange={(value: ProductTypeValues) =>
            value !== undefined ? onSelectChange('type', value) : null
          }
        />
      </Field>
      {type ? (
        <>
          <Field label="Brand">
            <Input name="brand" onChange={onInputChange} value={brand} />
          </Field>
          {sizes ? (
            <Field label="Sizes" asChild={false}>
              <MultiCheckbox
                value={sizes.map((size: SizeClothes | SizeFootwear) =>
                  size.toString()
                )}
                onChange={(options) => onMultiCheckboxChange('sizes', options)}
                options={type === 'footwear' ? footwearSize : clothesSize}
              />
            </Field>
          ) : null}
          {features ? (
            <Field label="Features" asChild={false}>
              <MultiCheckbox
                value={features.map((feature: string) => feature.toString())}
                onChange={(options) =>
                  onMultiCheckboxChange('features', options)
                }
                options={featureList}
              />
            </Field>
          ) : null}
        </>
      ) : null}
    </Root>
  )
}
