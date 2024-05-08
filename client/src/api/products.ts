import { NewProduct, Product } from '../types/product'

const API_URL = 'http://localhost:8080'

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`)

  return response.json()
}

export const addProducts = (data: NewProduct) =>
  fetch(`${API_URL}/api/products/`, {
    method: 'POST',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

export const updateProduct = (data: Product) =>
  fetch(`${API_URL}/api/products/${data.id}`, {
    method: 'PUT',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
