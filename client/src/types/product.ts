export type SizeClothes = ['XS' | 'S' | 'M' | 'L' | 'XL']
export type SizeFootwear = ['US 6' | 'US 7' | 'US 8' | 'US 9' | 'US 10']
export type ProductType =
  | 'activewear'
  | 'dress'
  | 'footwear'
  | 'outerwear'
  | 'top'

export type Product = {
  name: string
  id?: number
  brand: string
  type: ProductType | undefined
  sizes?: [SizeClothes | SizeFootwear] | []
  features?: Array<string>
  style?: string
  colour?: string
  materials?: string
  neckline?: string
}

export type NewProduct = Omit<Product, 'id'>
