import React from 'react'
import { ProductItem } from './ProductItem'
import { Product } from '../../types/product'

type Props = {
  onEdit: () => void
  isLoading: boolean
  list: Array<Product>
}

export const ProductList = ({ isLoading, list, onEdit }: Props) => {
  return isLoading ? (
    <p>Loading in progress...</p>
  ) : (
    list.map(({ id, brand, name, type, sizes, features }: Product) => (
      <ProductItem
        onEdit={onEdit}
        id={id}
        key={id}
        name={name}
        brand={brand}
        type={type}
        sizes={sizes}
        features={features}
      />
    ))
  )
}
