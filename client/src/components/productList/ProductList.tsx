import React from 'react'
import { ProductItem } from './ProductItem'
import type { Product, ProductType } from '../../types/product'

type Props = {
  onEdit: () => void
  isLoading: boolean
  list: Array<Product<ProductType>>
}

export const ProductList = ({ isLoading, list, onEdit }: Props) => {
  return (
    <div className="overflow-hidden border border-gray-100 bg-white p-6 shadow-3xl sm:rounded-3xl">
      {isLoading ? (
        <p>Loading in progress...</p>
      ) : (
        list
          .reverse()
          .map(
            ({
              id,
              brand,
              name,
              type,
              sizes,
              features
            }: Product<ProductType>) => (
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
            )
          )
      )}
    </div>
  )
}
