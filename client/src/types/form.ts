import type { Product } from './product'

export type FormData = Omit<Product, 'id'>
