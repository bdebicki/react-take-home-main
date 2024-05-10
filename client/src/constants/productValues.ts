import type { ProductType, SizeClothes, SizeFootwear } from '../types/product'

export const productType: Array<{ label: ProductType; value: ProductType }> = [
  { label: 'footwear', value: 'footwear' },
  { label: 'activewear', value: 'activewear' },
  { label: 'outwear', value: 'outwear' },
  { label: 'dress', value: 'dress' },
  { label: 'top', value: 'top' }
]
export const clothesSize = ['XS', 'S', 'M', 'L', 'XL']
export const footwearSize = ['US 6', 'US 7', 'US 8', 'US 9', 'US 10']
