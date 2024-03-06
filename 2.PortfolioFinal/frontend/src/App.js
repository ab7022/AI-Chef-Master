import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./Components/Home";
import Product from "./Components/Product";
import CareerHomePage from "./Components/Career/CareerHomePage";
import Company from "./Components/Company";
import RD from './Components/CardData/RD'
import Technology from "./Components/Career/Technology";
import Application from "./Components/Career/JobApplicationForm/Application";
import SearchJobCards from "./Components/Career/searchJobCards";
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
import Hiring from "./Components/Career/CareerMain/HiringProcess";
import JobRoles from "./Components/Career/searchJobCards";
import Kitchen from "./Components/AIChefPocketData/Kitchen";
import LongTerm from './Components/CardData/LongTerm';
import Customer from './Components/CardData/Customer';
import AboutUs from './Components/Team/About';
import Team from './Components/Team/Team';
import AiAssistant from "./Components/AIChefPocketData/AiAssistant";
import NutritionManager from "./Components/AIChefPocketData/NutritionManager";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<CareerHomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/R&D" element={<RD />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/application" element={<Application />} />
        <Route path="/searchJobCards" element={<SearchJobCards />} />
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
        <Route path="/Hiring" element={<Hiring />} />
        <Route path="/Job" element={<JobRoles />} />
        <Route path="/aikitchen" element={<Kitchen />} />
        <Route path="/LongTerm" element={<LongTerm />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/AiAssistant" element={<AiAssistant />} />
        <Route path="/ainutritionmanager" element={<NutritionManager />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;