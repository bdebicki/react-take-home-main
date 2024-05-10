import type { Product } from './product'

export type FormData = Omit<Product, 'id'> & {
  id?: Product['id']
}
