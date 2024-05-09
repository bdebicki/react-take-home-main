import React from 'react'
import { Button } from '../ui/Button'
import { ProductForm } from '../productForm/ProductForm'
import { useAddProduct } from '../../api/apiActions'
import { Dialog } from '../ui/Dialog'

type Props = {
  onAdd: () => void
}

export const NewProduct = ({ onAdd }: Props) => {
  const { isPending, mutate } = useAddProduct(() => {
    onAdd()
  })

  const handleSave = () => {
    mutate({
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
      title="Add new product"
      trigger={<Button>Add new product</Button>}
      primaryAction={handleSave}
      primaryBtnLabel={isPending ? 'Saving...' : 'Add product'}
    >
      <ProductForm />
    </Dialog>
  )
}
