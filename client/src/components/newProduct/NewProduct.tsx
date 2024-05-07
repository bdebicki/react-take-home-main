import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { NewEditProduct } from '../productList/NewEditProduct'

export const NewProduct = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const handleClick = () => {
    setIsFormVisible(true)
  }
  const handleSave = () => {
    setIsFormVisible(false)
  }

  return (
    <section>
      <Button onClick={handleClick}>Add new product</Button>
      {isFormVisible ? <NewEditProduct onSave={handleSave} /> : null}
    </section>
  )
}
