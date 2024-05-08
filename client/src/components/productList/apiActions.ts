import { useMutation, useQuery } from '@tanstack/react-query'
import { addProducts, fetchProducts } from '../../api/products'
import { Product } from '../../types/product'

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
    mutationFn: (newProduct: Product) => {
      return addProducts(newProduct)
    },
    onSuccess: onSuccess
  })

  return { mutate, isPending }
}
