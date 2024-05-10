import React, { useState } from 'react'
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
    resetInitial,
    handleInputChange,
    handleSelectChange,
    handleMultiCheckboxChange
  } = useForm({
    name: '',
    brand: '',
    type: undefined,
    sizes: [],
    features: [],
    style: '',
    colour: ''
  })
  const [isOpen, setIsOpen] = useState(false)
  const { isPending, mutate, errors } = useAddProduct(() => {
    onAdd()
    setIsOpen(false)
  })
  const { name, type } = formData

  const handleSave = () => {
    mutate(formData)
  }
  const handleModalOpen = () => {
    setIsOpen(true)
  }
  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Dialog
      open={isOpen}
      onOpen={resetInitial}
      title="Add new product"
      trigger={<Button onClick={handleModalOpen}>Add new product</Button>}
      primaryAction={handleSave}
      primaryBtnLabel={isPending ? 'Saving...' : 'Add product'}
      cancelAction={handleCancel}
      isPrimaryDisabled={!name || !type}
    >
      <ProductForm
        errors={errors}
        formData={formData}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        onMultiCheckboxChange={handleMultiCheckboxChange}
      />
    </Dialog>
  )
}
