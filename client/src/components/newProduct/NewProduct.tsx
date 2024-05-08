import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { NewEditProduct } from '../productList/NewEditProduct'
import { useAddProduct } from '../productList/apiActions'

type Props = {
  onAdd: () => void
}

export const NewProduct = ({ onAdd }: Props) => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const { isPending, mutate } = useAddProduct(() => {
    setIsFormVisible(false)
    onAdd()
  })

  const handleClick = () => {
    setIsFormVisible(true)
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
      <Button onClick={handleClick}>Add new product</Button>
      {isFormVisible ? (
        <NewEditProduct onSave={handleSave} isPending={isPending} />
      ) : null}
    </section>
  )
}
