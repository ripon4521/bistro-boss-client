import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Authprovider from './providers/Authprovider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Authprovider>
<HelmetProvider>
<div className='container mx-auto'>
<RouterProvider router={router} />
</div>
</HelmetProvider>
</Authprovider>
  </React.StrictMode>,
)
