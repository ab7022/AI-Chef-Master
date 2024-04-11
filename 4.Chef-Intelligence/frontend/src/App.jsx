import './App.css'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar
          lightMode={lightMode}
          setLightMode={setLightMode}
          sideBarOpen={sideBarOpen}
          setSideBarOpen={setSideBarOpen}
        />
        <Routes>
          <Route path="/" element={<Home lightMode={lightMode} sideBarOpen={sideBarOpen} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
