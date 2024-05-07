import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductList } from './productList/ProductList'
import { NewProduct } from './newProduct/NewProduct'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
      <NewProduct />
    </QueryClientProvider>
  )
}
