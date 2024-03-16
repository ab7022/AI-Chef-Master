import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/AuthContext.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
    <Toaster />
  </AuthContextProvider>,
)
