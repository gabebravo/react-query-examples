import { QueryClient, QueryClientProvider } from 'react-query'

export const wrapper = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
