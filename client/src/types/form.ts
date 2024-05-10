import type { Product, ProductType } from './product'

export type FormData = Product<ProductType>
export type FetchErrors = Array<{
  code: string
  message: string
  path: Array<string>
}> | null
