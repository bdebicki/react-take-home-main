import { useState, useCallback } from 'react'
import type { FormData } from '../../types/form'
import { ProductTypeValues } from '../../types/product'

export const useForm = (initialValues: FormData) => {
  const [formData, setFormData] = useState(initialValues)

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        [name]: value
      }))
    },
    []
  )

  const handleSelectChange = useCallback((name: string, value: string) => {
    setFormData((prevFormData: FormData) => {
      if (name === 'type') {
        return {
          ...prevFormData,
          [name]: value as ProductTypeValues,
          sizes: []
        }
      } else {
        return {
          ...prevFormData,
          [name]: value
        }
      }
    })
  }, [])

  const handleMultiCheckboxChange = useCallback(
    (name: string, selectedOptions: Array<string>) => {
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        [name]: selectedOptions
      }))
    },
    []
  )

  const resetInitial = () => {
    setFormData(initialValues)
  }

  return {
    formData,
    resetInitial,
    handleInputChange,
    handleSelectChange,
    handleMultiCheckboxChange
  }
}
