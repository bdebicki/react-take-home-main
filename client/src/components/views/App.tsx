import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ListingPage } from './ListingPage'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListingPage />
    </QueryClientProvider>
  )
}
