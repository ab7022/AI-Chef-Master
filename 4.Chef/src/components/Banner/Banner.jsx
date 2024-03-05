import React from "react";
 import BannerCard from "../BannerCard";
 const slides = [
  { imageUrl: "https://www.frugalandthriving.com.au/wp-content/uploads/2017/08/simmering.jpg" },
  { imageUrl: "https://img.freepik.com/premium-photo/alone-young-woman-cooking-kitchen_47274-833.jpg" },
  { imageUrl: "https://img.freepik.com/premium-photo/cook-making-dinner-kitchen-high-end-restaurant_110955-328.jpg" },

];
const DishText = 'https://see.fontimg.com/api/renderfont4/BWA45/eyJyIjoiZnMiLCJoIjo0MSwidyI6MTI1MCwiZnMiOjMzLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QUkgQ2hlZiBLaXRjaGVu/rosmatika-regular.png'
const mainText = "https://see.fontimg.com/api/renderfont4/BWA45/eyJyIjoiZnMiLCJoIjo0MSwidyI6MTI1MCwiZnMiOjMzLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/V2VsY29tZSBUbw/rosmatika-regular.png"
const Banner = () => {
 
  return (
 
  <BannerCard
    slides={slides}
      title={
        <div className="flex flex-col justify-center  items-center gap-3">
          <img src={mainText} className='filter invert' alt=""  />
          <img src={DishText} className='filter invert' alt="" />
        </div>
      }
      subtitle="Cook your favorite Dish, Cuisines & recipes with AI Chef"
  />
   );
};

export default Banner;
