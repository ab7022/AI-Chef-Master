import './style.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';

const ChefIntelligence = () => {
    const [lightMode, setLightMode] = useState(true);
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const [rows, setRows] = useState([
        { ingredient: "", quantity: "", equipment: "" },
    ]);

    return (
        <>
            <Navbar
                lightMode={lightMode}
                setLightMode={setLightMode}
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
            />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home
                            lightMode={lightMode}
                            sideBarOpen={sideBarOpen}
                            rows={rows}
                            setRows={setRows}
                        />
                    }
                />
            </Routes>
        </>
    )
}

export default ChefIntelligence