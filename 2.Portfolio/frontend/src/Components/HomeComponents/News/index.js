import React from "react";
import { Carousel } from "@material-tailwind/react";

const newsData = [
  {
    id: 1,
    title:
      "Swiggy and Zomato Face Potential ₹500 Crore GST Bill on Delivery Fees",
    imageUrl:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=3242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title:
      "WayCool Foods' tech subsidiary, SAP come together to empower food value chain startups",
    imageUrl:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=3242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title:
      "EatSure partners with IRCTC for in-train food delivery across 100 stations",
    imageUrl:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=3242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

function News() {
  return (
    <>
      <Carousel
        className="w-full h-full"
        autoplay={true}
        transition={{ duration: 2 }}
      >
        {newsData.map((article) => (
          <div key={article.id} className="relative h-full w-full">
            <img
              src={article.imageUrl}
              className="h-[90vh] w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
              <div className="w-3/4 md:w-2/4 text-center text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {article.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default News;
