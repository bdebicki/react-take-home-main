import { Product } from '../types/product'

const API_URL = 'http://localhost:8080'

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`)

  return response.json()
}
export const addProducts = (data: Product) => {
  return fetch(`${API_URL}/api/products`, {
    method: 'POST',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
