import React from 'react'
import { Button } from '../ui/Button'
import { ProductForm } from '../productForm/ProductForm'
import { useAddProduct } from '../../api/apiActions'
import { Dialog } from '../ui/Dialog'
import { useForm } from '../productForm/useForm'

type Props = {
  onAdd: () => void
}

export const NewProduct = ({ onAdd }: Props) => {
  const {
    formData,
    handleInputChange,
    handleSelectChange,
    handleMultiCheckboxChange
  } = useForm({
    name: '',
    brand: '',
    type: undefined,
    sizes: [],
    features: []
  })
  const { isPending, mutate } = useAddProduct(() => {
    onAdd()
  })

  const handleSave = () => {
    mutate(formData)
  }

  return (
    <Dialog
      title="Add new product"
      trigger={<Button>Add new product</Button>}
      primaryAction={handleSave}
      primaryBtnLabel={isPending ? 'Saving...' : 'Add product'}
    >
      <ProductForm
        formData={formData}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        onMultiCheckboxChange={handleMultiCheckboxChange}
      />
    </Dialog>
  )
}
