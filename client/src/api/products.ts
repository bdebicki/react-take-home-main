import type { NewProduct, Product, ProductType } from '../types/product'

const API_URL = 'http://localhost:8080'

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`)

  return response.json()
}

export const addProducts = async (data: NewProduct<ProductType>) => {
  const response = await fetch(`${API_URL}/api/products/`, {
    method: 'POST',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}

export const updateProduct = async (data: Product<ProductType>) => {
  const response = await fetch(`${API_URL}/api/products/${data.id}`, {
    method: 'PUT',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}
