import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter>
                
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
    </>
  );
}
//heye
export default App;
