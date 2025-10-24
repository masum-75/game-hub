import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import './index.css'

import { ToastContainer } from 'react-toastify';
import { router } from './Routes/Routes';
import AuthProvider from './context/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <AuthProvider>
        <RouterProvider router={router} />
      <ToastContainer position="top-right" />
      </AuthProvider>
  </StrictMode>,
)
