import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import { router } from './Router/Route';
import AuthContributor from './Components/AuthContributor/AuthContributor';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContributor>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthContributor>

  </React.StrictMode>,
)
