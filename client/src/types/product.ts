export type SizeClothes = 'XS' | 'S' | 'M' | 'L' | 'XL'
export type SizeFootwear = 'US 6' | 'US 7' | 'US 8' | 'US 9' | 'US 10'
export type ProductSizes<T extends ProductType> = T extends 'footwear'
  ? Array<SizeFootwear>
  : T extends undefined
    ? []
    : Array<SizeClothes>
export type ProductTypeValues =
  | 'activewear'
  | 'dress'
  | 'footwear'
  | 'outerwear'
  | 'top'
export type ProductType = ProductTypeValues | undefined

export type Product<T extends ProductType> = {
  name: string
  id?: number
  brand: string
  type: T
  sizes?: ProductSizes<T>
  features?: Array<string>
  style?: string
  colour?: string
  materials?: string
  neckline?: string
}

export type NewProduct<T extends ProductType> = Omit<Product<T>, 'id'>
