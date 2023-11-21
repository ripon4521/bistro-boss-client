import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Authprovider from './providers/Authprovider.jsx';
import {
  QueryClient,
  QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <Authprovider>
<HelmetProvider>
<div >
<RouterProvider router={router} />
</div>
</HelmetProvider>
</Authprovider>
    </QueryClientProvider>

  </React.StrictMode>,
)
