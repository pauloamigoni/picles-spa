import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './layout'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
       <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>
)
