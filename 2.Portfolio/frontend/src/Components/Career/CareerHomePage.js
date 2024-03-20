import React from "react";
import Page1 from "./CareerMain/Page1.jsx";
import Page2 from "./CareerMain/Page2.jsx";
import CareerPage from "./CareerMain/CareerPage.jsx";
import InterviewAtAichefmaster from "./CareerMain/InterviewAtAichefmaster";
import HiringProcess from "./CareerMain/HiringProcess";
import AboutUs from "./CareerMain/AboutUs";
import AiFacts from "./CareerMain/AiFacts";
import FooterItem from "../HomeComponents/FooterItem/index.js";

function CareerHomePage() {
  return (
    <div className="overflow-x-hidden">
      <Page1 />
      <Page2 />
      <CareerPage />
      <InterviewAtAichefmaster />
      <HiringProcess />
      <AiFacts />
      <AboutUs />
      <FooterItem />
    </div>
  );
}

export default CareerHomePage;
