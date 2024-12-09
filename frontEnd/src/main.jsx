import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import appRoute from './App' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider  router={appRoute}></RouterProvider>
 
  </StrictMode>,
)
