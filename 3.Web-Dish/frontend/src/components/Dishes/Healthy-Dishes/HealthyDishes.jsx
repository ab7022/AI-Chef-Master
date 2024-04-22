// HealthyDishes.js
import React from 'react';
import Footer from '../../../components/FooterItem/Footer';
import Card2 from '../../Card2';
import HealthyRecommendedData from '../../../Data/HelathyDishesRecommendedData/HealthyRecommendedData';
import { Link } from 'react-router-dom';
 import BannerCard from '../../BannerCard';
import HealthyDishCategories from './HealthyDishCategories';
function HealthyDishes() {
 
 const slides = [ 
  { imageUrl: "https://www.onemedical.com/media/images/heart-healthy-food.2e16d0ba.fill-1200x630.jpg" },
  { imageUrl: "https://fermeliadental.com/wp-content/uploads/2019/07/healthy-nutrition.jpeg" },
  { imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/top-10-nutrition-facts-thumb.jpg" },
];
const DishText = 'https://see.fontimg.com/api/renderfont4/BWA45/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVhbHRoeSBEaXNoZXMgQ3Vpc2luZQ/rosmatika-regular.png'
  return (
    <div className="bg-[#f7f3cd] min-h-screen flex flex-col">
      <div>
         <BannerCard slides={slides} title={<img src={DishText} className=' filter invert  flex' alt="Indian" />} subtitle="Explore Our World of Exquisite Luxury Cuisine"/>
      </div>
        <HealthyDishCategories />
       <div className="mt-5">
       <Footer />
      </div>
    </div>
  );
}

export default HealthyDishes;
