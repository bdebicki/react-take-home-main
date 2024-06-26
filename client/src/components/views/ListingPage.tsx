import React from 'react'
import { ProductList } from '../productList/ProductList'
import { NewProduct } from '../newProduct/NewProduct'
import { useProductList } from '../../api/apiActions'
import { Headline } from '../ui/Headline'
import { LayoutCenterer } from '../ui/LayoutCenterer'

export const ListingPage = () => {
  const { productList, isLoading, refetch } = useProductList()

  return (
    <>
      <header className="sticky top-0 z-10 mb-8 bg-gray-50/30 py-4 backdrop-blur-sm">
        <LayoutCenterer className="flex flex-col items-center gap-y-3 sm:flex-row sm:items-end sm:justify-between">
          <Headline>Product list</Headline>
          <NewProduct onAdd={refetch} />
        </LayoutCenterer>
      </header>
      <LayoutCenterer as="main">
        <ProductList
          isLoading={isLoading}
          list={productList}
          onEdit={refetch}
        />
      </LayoutCenterer>
    </>
  )
}
