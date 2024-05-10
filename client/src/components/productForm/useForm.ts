import { useState, useCallback } from 'react'
import { FormData } from '../../types/form'

export const useForm = (initialValues: FormData) => {
  const [formData, setFormData] = useState(initialValues)

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    },
    []
  )

  const handleSelectChange = useCallback((name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }, [])

  const handleMultiCheckboxChange = useCallback(
    (name: string, selectedOptions: Array<string>) => {
      setFormData((prevFormData) => ({
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
