import React from 'react'
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
    style: ''
  })
  const { isPending, mutate } = useEditProduct(() => {
    onAdd()
  })

  const handleSave = () => {
    mutate(formData)
  }

  return (
    <Dialog
      onOpen={resetInitial}
      title="Edit product"
      trigger={<EditTrigger />}
      primaryAction={handleSave}
      isPrimaryDisabled={!name || !type}
      primaryBtnLabel={isPending ? 'Saving...' : 'Save changes'}
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
