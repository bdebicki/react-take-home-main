const API_URL = 'http://localhost:8080'

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`)

  return response.json()
}
