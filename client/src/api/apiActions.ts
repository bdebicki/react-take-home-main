import { useMutation, useQuery } from '@tanstack/react-query'
import { addProducts, fetchProducts, updateProduct } from './products'
import type { NewProduct, Product } from '../types/product'

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
  const { mutate, isPending } = useMutation({
    mutationFn: (newProduct: NewProduct) => {
      return addProducts(newProduct)
    },
    onSuccess: onSuccess
  })

  return { mutate, isPending }
}

export function useEditProduct(onSuccess: () => void) {
  const { mutate, isPending } = useMutation({
    mutationFn: (updatedProduct: Product) => {
      return updateProduct(updatedProduct)
    },
    onSuccess: onSuccess
  })

  return { mutate, isPending }
}
