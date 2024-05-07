import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../api/products'
import { ProductItem } from './ProductItem'
import { Product } from '../../types/product'

export const ProductList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  return isLoading ? (
    <p>Loading in progress...</p>
  ) : (
    data.map(({ id, brand, name, type, sizes, features }: Product) => (
      <ProductItem
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
