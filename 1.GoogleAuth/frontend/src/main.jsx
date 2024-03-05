import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <AuthContextProvider>
    <GoogleOAuthProvider clientId="827923086918-ilrshls4eio3j60racbh8527fgj02hqq.apps.googleusercontent.com">...</GoogleOAuthProvider>;
    <App />
    <ToastContainer />
    
    </AuthContextProvider>
  
)
 