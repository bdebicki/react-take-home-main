type SizeClothes = Array<'XS' | 'S' | 'M' | 'L' | 'XL'>
type SizeFootwear = Array<'US 7' | 'US 8' | 'US 9' | 'US 10'>

export type Product = {
  name: string
  id: number
  brand: string
  type: 'footwear' | 'activewear' | 'outwear' | 'dress' | 'top'
  sizes?: SizeClothes | SizeFootwear
  features?: Array<string>
  style?: string
}

export type NewProduct = Omit<Product, 'id'>
