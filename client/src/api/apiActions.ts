import { useMutation, useQuery } from '@tanstack/react-query'
import { addProducts, fetchProducts, updateProduct } from './products'
import type { NewProduct, Product, ProductType } from '../types/product'
import { useState } from 'react'
import { FetchErrors } from '../types/form'

export function useProductList() {
  const {
    data: productList,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  return { productList, isLoading, refetch }
}

export function useAddProduct(onSuccess: () => void) {
  const [errors, setErrors] = useState<FetchErrors>(null)
  const { mutate: fetchMutate, isPending } = useMutation({
    mutationFn: (newProduct: NewProduct<ProductType>) => {
      return addProducts(newProduct)
    },
    onSuccess: (data) => {
      if (data.error) {
        setErrors(data.error.issues)
      } else {
        onSuccess()
      }
    }
  })
  const mutate = (data: Product<ProductType>) => {
    fetchMutate(data)
    setErrors(null)
  }

  return { mutate, isPending, errors }
}

export function useEditProduct(onSuccess: () => void) {
  const [errors, setErrors] = useState<FetchErrors>(null)
  const { mutate: fetchMutate, isPending } = useMutation({
    mutationFn: (updatedProduct: Product<ProductType>) => {
      return updateProduct(updatedProduct)
    },
    onSuccess: (data) => {
      if (data.error) {
        setErrors(data.error.issues)
      } else {
        onSuccess()
      }
    }
  })

  const mutate = (data: Product<ProductType>) => {
    fetchMutate(data)
    setErrors(null)
  }

  return { mutate, isPending, errors }
}
