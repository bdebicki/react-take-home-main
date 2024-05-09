import React from 'react'
import { ProductForm } from '../productForm/ProductForm'
import { useEditProduct } from '../../api/apiActions'
import type { Product } from '../../types/product'
import { EditTrigger } from '../productList/EditTrigger'
import { Dialog } from '../ui/Dialog'

type Props = Product & {
  onAdd: () => void
}

export const EditProduct = ({
  id,
  brand,
  name,
  type,
  features,
  sizes,
  style,
  onAdd
}: Props) => {
  const { isPending, mutate } = useEditProduct(() => {
    onAdd()
  })

  const handleSave = () => {
    mutate({
      id: id,
      name: `boczek-${new Date()}`,
      brand: `boczek`,
      type: 'footwear',
      sizes: ['US 7'],
      features: [''],
      style: ''
    })
  }

  return (
    <Dialog
      title="Edit product"
      trigger={<EditTrigger />}
      primaryAction={handleSave}
      primaryBtnLabel={isPending ? 'Saving...' : 'Save changes'}
    >
      <ProductForm />
    </Dialog>
  )
}
