import './style.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { darkColors, lightColors } from "./data/homeTheme";
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import Home from './pages/Home';
import Dish from './pages/Dish';
import Archives from './components/Archives';

const ChefIntelligence = () => {
    const [lightMode, setLightMode] = useState(true);
    const colors = lightMode ? lightColors : darkColors;
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <Navbar
                lightMode={lightMode}
                setLightMode={setLightMode}
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
            />
            <div className={`${colors.backgroundOfBody} ${colors.text}`}>
                <div className="relative flex flex-row">
                    {sideBarOpen && <SideBar lightMode={lightMode} />}
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home lightMode={lightMode} />}
                        />
                        <Route
                            exact
                            path="/generatedDish"
                            element={<Dish lightMode={lightMode} />}
                        />
                        <Route
                            exact
                            path="/archives"
                            element={<Archives lightMode={lightMode} />}
                        />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ChefIntelligence