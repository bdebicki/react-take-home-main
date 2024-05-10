import React from 'react'
import { ProductItem } from './ProductItem'
import { Product } from '../../types/product'

type Props = {
  onEdit: () => void
  isLoading: boolean
  list: Array<Product>
}

export const ProductList = ({ isLoading, list, onEdit }: Props) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-3xl">
      {isLoading ? (
        <p>Loading in progress...</p>
      ) : (
        list
          .reverse()
          .map(({ id, brand, name, type, sizes, features }: Product) => (
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
      )}
    </div>
  )
}
