import React from 'react'
import { ProductList } from '../productList/ProductList'
import { NewProduct } from '../newProduct/NewProduct'
import { useProductList } from '../../api/apiActions'
import { Headline } from '../ui/Headline'

export const ListingPage = () => {
  const { productList, isLoading, refetch } = useProductList()

  return (
    <>
      <Headline>Product list</Headline>
      <NewProduct onAdd={refetch} />
      <hr />
      <ProductList isLoading={isLoading} list={productList} onEdit={refetch} />
    </>
  )
}
