import React, { useState } from 'react'
import type { Product } from '../../types/product'
import { NewEditProduct } from './NewEditProduct'

type ProductItemProps = Product

export const ProductItem = ({
  id,
  name,
  brand,
  type,
  sizes,
  features
}: ProductItemProps) => {
  const [isEditMode, setIsEditMode] = useState(false)

  const handleEdit = () => {
    setIsEditMode(true)
  }
  const handleSave = () => {
    setIsEditMode(false)
  }

  if (isEditMode) {
    return (
      <NewEditProduct
        onSave={handleSave}
        id={id}
        type={type}
        name={name}
        brand={brand}
        sizes={sizes}
        features={features}
      />
    )
  }

  return (
    <div onClick={handleEdit}>
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
