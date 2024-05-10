import type { Product } from './product'

export type FormData = Product
export type FetchErrors = Array<{
  code: string
  message: string
  path: Array<string>
}> | null
