import React, { useState } from 'react'
import type { Product } from '../../types/product'
import { EditProduct } from '../editProduct/EditProduct'

type Props = Product & {
  onEdit: () => void
}

export const ProductItem = ({
  id,
  name,
  brand,
  type,
  sizes,
  features,
  onEdit
}: Props) => {
  const [isEditMode, setIsEditMode] = useState(false)

  const handleEdit = () => {
    setIsEditMode(true)
  }
  const handleSave = () => {
    setIsEditMode(false)
  }
  const handleCancel = () => {
    setIsEditMode(false)
  }

  if (isEditMode) {
    return (
      <EditProduct
        onSave={handleSave}
        onCancel={handleCancel}
        id={id}
        type={type}
        name={name}
        brand={brand}
        sizes={sizes}
        features={features}
        onAdd={onEdit}
      />
    )
  }

  return (
    <div onClick={handleEdit} className="border">
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>{type}</p>
      {sizes ? (
        <ul>
          {sizes.map((size) => (
            <li key={size.replace(' ', '-')}>{size}</li>
          ))}
        </ul>
      ) : null}
      {features ? (
        <ul>
          {features.map((feature) => (
            <li key={feature.replace(' ', '-')}>{feature}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
