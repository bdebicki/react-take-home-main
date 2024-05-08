import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { ProductForm } from '../productForm/ProductForm'
import { useEditProduct } from '../../api/apiActions'
import type { Product } from '../../types/product'

type Props = Product & {
  onSave: () => void
  onCancel: () => void
  onAdd: () => void
}

export const EditProduct = ({
  id,
  brand,
  name,
  type,
  features,
  sizes,
  style,
  onAdd,
  onSave,
  onCancel
}: Props) => {
  const { isPending, mutate } = useEditProduct(() => {
    onAdd()
  })

  const handleCancel = () => {
    onCancel()
  }

  const handleSave = () => {
    mutate({
      id: id,
      name: `boczek-${new Date()}`,
      brand: `boczek`,
      type: 'footwear',
      sizes: ['US 7'],
      features: [''],
      style: ''
    })
    onSave()
  }

  return (
    <ProductForm
      onSave={handleSave}
      onCancel={handleCancel}
      isPending={isPending}
    />
  )
}
