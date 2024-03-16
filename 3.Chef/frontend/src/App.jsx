/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleDish from './pages/SingleDish';
import Cooking from './pages/Cooking';
import CreateAccount from './components/LoginSineupPage/CreateAccount';
import LoginIn from './components/LoginSineupPage/LoginIn';

import Layout from './components/Layout';
import TeamPage from './pages/TeamPage';
import LuxuryDishes from './components/Dishes/Luxury-Dishes/LuxuryDishes';
import Spanish from './components/Dishes/Luxury-Dishes/Spain/Spanish';
import SpanishLuxuryBreakFast from './components/Dishes/Luxury-Dishes/Spain/SpanishLuxuryBreakFast';
import SpanishLuxuryLunch from './components/Dishes/Luxury-Dishes/Spain/SpanishLuxuryLunch';
import SpanishLuxuryDinner from './components/Dishes/Luxury-Dishes/Spain/SpanishLuxuryDinner';

import Indian from './components/Dishes/Luxury-Dishes/India/Indian';
import IndianLuxuryBreakFast from './components/Dishes/Luxury-Dishes/India/IndianLuxuryBreakFast';
import IndianLuxuryLunch from './components/Dishes/Luxury-Dishes/India/IndianLuxuryLunch';
import IndianLuxuryDinner from './components/Dishes/Luxury-Dishes/India/IndianLuxuryDinner';
import MasalaDosa from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/MasalaDosa';
import MasalaDosaCook from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/MasalaDosaCook';
import IdliSambar from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/IdliSambar';
import IdliSambarCook from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/IdliSambarCook';
import Poha from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/Poha';
import PohaCook from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/PohaCook';
import AlooParatha from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/AlooParatha';
import AlooParathaCook from './components/Dishes/Luxury-Dishes/India/BreakFastSingleItems/AlooParathaCook';

import IndianStatesDishes from './components/Dishes/All-NavItem/IndianStatesDishes';
import AndhraPradesh from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradesh';
import AndhraPradeshLuxuryBreakFast from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradeshLuxuryBreakFast';
import AndhraPradeshLuxuryLunch from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradeshLuxuryLunch';
import AndhraPradeshLuxuryDinner from './components/Dishes/All-NavItem/AndhraPradeshState/AndhraPradeshLuxuryDinner';

import ArunachalPradesh from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradesh';
import ArunachalPradeshLuxuryBreakFast from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradeshLuxuryBreakFast';
import ArunachalPradeshLuxuryLunch from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradeshLuxuryLunch';
import ArunachalPradeshLuxuryDinner from './components/Dishes/All-NavItem/ArunachalPradeshState/ArunachalPradeshLuxuryDinner';

import QuickDishes from './components/Dishes/Quick-Dishes/QuickDishes';
import HealthyDishes from './components/Dishes/Healthy-Dishes/HealthyDishes';
import NavBarHeader from './components/NavBarHeader';
import ChooseRegion from './components/Dishes/Create-Dishes/ChooseRegion';
import ChooseWorldCountries from './components/Dishes/Create-Dishes/ChooseWorldCountries';
import ChooseIndia from './components/Dishes/Create-Dishes/ChooseIndia';
import ChooseVegNonVeg from './components/Dishes/Create-Dishes/ChooseVegNonVeg';

const App = () => {
return (
<>
    <BrowserRouter>
        <Layout />
        <NavBarHeader />
        <Routes>
            <Route path='/ChooseVegNonVeg' element={<ChooseVegNonVeg />} />
            <Route path='/ChooseRegion' element={<ChooseRegion />} />
            <Route path='/rest-of-the-world' element={<ChooseWorldCountries />} />
            <Route path='/choose-india' element={<ChooseIndia />} />
            <Route path='/' element={<Home />} />
            <Route path='/cooking' element={<Cooking />} />
            <Route path='/teampage' element={<TeamPage />} />
            <Route path='/CreateAccount' element={<CreateAccount />} />
            <Route path='/login' element={<LoginIn />} />
            <Route path='/Luxury-Dishes' element={<LuxuryDishes />} />
            <Route path='/Luxury-Dishes/Spanish' element={<Spanish />} />
            <Route path='/Luxury-Dishes/Spanish/SpanishLuxuryBreakFast' element={<SpanishLuxuryBreakFast />} />
            <Route path='/Luxury-Dishes/Spanish/SpanishLuxuryLunch' element={<SpanishLuxuryLunch />} />
            <Route path='/Luxury-Dishes/Spanish/SpanishLuxuryDinner' element={<SpanishLuxuryDinner />} />
            <Route path='/Luxury-Dishes/Indian' element={<Indian />} />
            <Route path='/Luxury-Dishes/Indian/IndianLuxuryBreakFast' element={<IndianLuxuryBreakFast />} />
            <Route path='/Luxury-Dishes/Indian/IndianLuxuryLunch' element={<IndianLuxuryLunch />} />
            <Route path='/Luxury-Dishes/Indian/IndianLuxuryDinner' element={<IndianLuxuryDinner />} />
            <Route path='/Masala-Dosa' element={<MasalaDosa />} />
            <Route path='/Masala-Dosa-Cook' element={<MasalaDosaCook />} />
            <Route path='/Idli-Sambar' element={<IdliSambar />} />
            <Route path='/Idli-Sambar-Cook' element={<IdliSambarCook />} />
            <Route path='/Poha' element={<Poha />} />
            <Route path='/Poha-Cook' element={<PohaCook />} />
            <Route path='/Aloo-Paratha' element={<AlooParatha />} />
            <Route path='/Aloo-Paratha-Cook' element={<AlooParathaCook />} />

            <Route path='/All-Indian-Dishes' element={<IndianStatesDishes />} />
            <Route path='/All-Indian-Dishes/AndhraPradesh' element={<AndhraPradesh />} />
            <Route path='/All-Indian-Dishes/AndhraPradesh/AndhraPradeshLuxuryBreakFast' element={<AndhraPradeshLuxuryBreakFast />} />
            <Route path='/All-Indian-Dishes/AndhraPradesh/AndhraPradeshLuxuryLunch' element={<AndhraPradeshLuxuryLunch />} />
            <Route path='/All-Indian-Dishes/AndhraPradesh/AndhraPradeshLuxuryDinner' element={<AndhraPradeshLuxuryDinner />} />
            <Route path='/All-Indian-Dishes/ArunachalPradesh' element={<ArunachalPradesh />} />
            <Route path='/All-Indian-Dishes/ArunachalPradesh/ArunachalPradeshLuxuryBreakFast' element={<ArunachalPradeshLuxuryBreakFast />} />
            <Route path='/All-Indian-Dishes/ArunachalPradesh/ArunachalPradeshLuxuryLunch' element={<ArunachalPradeshLuxuryLunch />} />
            <Route path='/All-Indian-Dishes/ArunachalPradesh/ArunachalPradeshLuxuryDinner' element={<ArunachalPradeshLuxuryDinner />} />
            <Route path='/Quick-Dishes' element={<QuickDishes />} />
            <Route path='/Healthy-Dishes' element={<HealthyDishes />} />
            <Route path='/Pesarattu-info' element={<SingleDish />} />
        </Routes>
    </BrowserRouter>
</>
);
}

export default App;