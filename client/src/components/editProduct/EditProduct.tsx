import React, { useState } from 'react'
import { ProductForm } from '../productForm/ProductForm'
import { useEditProduct } from '../../api/apiActions'
import { Dialog } from '../ui/Dialog'
import { useForm } from '../productForm/useForm'
import { EditTrigger } from '../productList/EditTrigger'
import type { FormData } from '../../types/form'

type Props = FormData & {
  onAdd: () => void
}

export const EditProduct = ({
  id,
  brand,
  name,
  type,
  features,
  sizes,
  onAdd
}: Props) => {
  const {
    formData,
    resetInitial,
    handleInputChange,
    handleSelectChange,
    handleMultiCheckboxChange
  } = useForm({
    id,
    brand,
    name,
    type,
    features,
    sizes,
    style: '',
    colour: '',
    materials: '',
    neckline: ''
  })
  const [isOpen, setIsOpen] = useState(false)
  const { isPending, mutate, errors } = useEditProduct(() => {
    onAdd()
    setIsOpen(false)
  })

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
      title="Edit product"
      trigger={<EditTrigger onClick={handleModalOpen} />}
      primaryAction={handleSave}
      primaryBtnLabel={isPending ? 'Saving...' : 'Save changes'}
      isPrimaryDisabled={!name || !type}
      cancelAction={handleCancel}
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
