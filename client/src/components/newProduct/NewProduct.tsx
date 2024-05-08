import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { ProductForm } from '../productForm/ProductForm'
import { useAddProduct } from '../../api/apiActions'

type Props = {
  onAdd: () => void
}

export const NewProduct = ({ onAdd }: Props) => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const { isPending, mutate } = useAddProduct(() => {
    setIsFormVisible(false)
    onAdd()
  })

  const handleShowForm = () => {
    setIsFormVisible(true)
  }
  const handleCancel = () => {
    setIsFormVisible(false)
  }
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
    <section>
      {isFormVisible ? (
        <ProductForm
          onSave={handleSave}
          onCancel={handleCancel}
          isPending={isPending}
        />
      ) : (
        <Button onClick={handleShowForm}>Add new product</Button>
      )}
    </section>
  )
}
