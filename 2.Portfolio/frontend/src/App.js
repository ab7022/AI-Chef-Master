import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import LoginIn from "./Components/LoginSineupPage/LoginIn";
import CreateAccount from "./Components/LoginSineupPage/CreateAccount";
import Product from "./Components/Product";
import CareerHomePage from "./Components/Career/CareerHomePage";
import Company from "./Components/Company";
import JobRoles from "./Components/Career/searchJobCards";
import AboutUs from './Components/Team/About';
import Team from './Components/Team/Team';
import Application from "./Components/Career/JobApplicationForm/Application";
import FrontendDeveloperEngineer from "./Components/Career/ListOfCareerJobs/FrontendDeveloperEngineer";
import BackendDeveloperEngineer from "./Components/Career/ListOfCareerJobs/BackendDeveloperEngineer";
import AIEngineer from "./Components/Career/ListOfCareerJobs/AIEngineer";
import ServerEngineer from "./Components/Career/ListOfCareerJobs/ServerEngineer";
import UiUxDesigner from "./Components/Career/ListOfCareerJobs/UiUxDesigner";
import AndroidApplicationDeveloperEngineer from "./Components/Career/ListOfCareerJobs/AndroidApplicationDeveloperEngineer";
import IOSApplicationDeveloperEngineer from "./Components/Career/ListOfCareerJobs/IOSApplicationDeveloperEngineer";
import FullStackDeveloperEngineer from "./Components/Career/ListOfCareerJobs/FullStackDeveloperEngineer";
import CustomerSupportAssociate from "./Components/Career/ListOfCareerJobs/CustomerSupportAssociate";
import ResearchDevelopmentEngineer from "./Components/Career/ListOfCareerJobs/ResearchDevelopmentEngineer";
import SearchJobCards from "./Components/Career/searchJobCards";
import NotFound from "./Components/NotFound";

const App = () => {
  const { user } = useAuthContext();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', localStorage.getItem('theme') || theme);
  }, [theme]);

  return (
    <Router>
      <MyNavbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={!user ? <LoginIn /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <CreateAccount /> : <Navigate to='/' />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<CareerHomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/Job" element={<JobRoles />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/application" element={<Application />} />
        <Route
          path="/Frontend-Developer-Engineer"
          element={<FrontendDeveloperEngineer />}
        />
        <Route
          path="/Backend-Developer-Engineer"
          element={<BackendDeveloperEngineer />}
        />
        <Route
          path="/AI-Engineer"
          element={<AIEngineer />}
        />
        <Route
          path="/Server-Engineer"
          element={<ServerEngineer />}
        />
        <Route
          path="/Ui-Ux-Designer"
          element={<UiUxDesigner />}
        />
        <Route
          path="/Android-Application-Developer-Engineer"
          element={<AndroidApplicationDeveloperEngineer />}
        />
        <Route
          path="/IOS-Application-Developer-Engineer"
          element={<IOSApplicationDeveloperEngineer />}
        />
        <Route
          path="/Full-Stack-Developer-Engineer"
          element={<FullStackDeveloperEngineer />}
        />
        <Route
          path="/Customer-Support-Associate"
          element={<CustomerSupportAssociate />}
        />
        <Route
          path="/Research-And-Development-Engineer"
          element={<ResearchDevelopmentEngineer />}
        />
        <Route path="/searchJobCards" element={<SearchJobCards />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;