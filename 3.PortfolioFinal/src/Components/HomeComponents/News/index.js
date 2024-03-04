import React from "react";
import { Carousel } from "@material-tailwind/react";

function News() {
  return (
    <>
      <Carousel
        className="w-full h-full"
        autoplay={true}
        transition={{ duration: 2 }}
      >
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=3242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 md:w-2/4 text-center text-white">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                1. "Swiggy and Zomato Face Potential ₹500 Crore GST Bill on
                Delivery Fees"
              </h1>
              <p className="text-sm md:text-base opacity-80 mb-12">
                India's food delivery giants, Swiggy and Zomato, received GST
                notices demanding ₹500 crore each on their delivery charges. The
                authorities consider the fees as their revenue, while the
                companies argue they belong to the riders. If implemented, the
                tax could significantly impact their financials.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=3242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 md:w-2/4 text-center text-white">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                2. WayCool Foods' tech subsidiary, SAP come together to empower
                food value chain startups
              </h1>
              <p className="text-sm md:text-base opacity-80 mb-12">
                CensaNext, Waycool's tech arm, teams up with SAP India to
                empower agritech and food chain startups through custom SAP
                S/4HANA access and managed infrastructure, enabling
                cost-effective growth. This collaboration signifies CensaNext's
                commitment to boosting innovation in the food ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=3242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 md:w-2/4 text-center text-white">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                3. EatSure partners with IRCTC for in-train food delivery across
                100 stations
              </h1>
              <p className="text-sm md:text-base opacity-80 mb-12">
                EatSure partnered with IRCTC to revolutionize train travel with
                in-train food delivery! Passengers across 100 stations can now
                order meals from multiple restaurants through the EatSure app,
                delivered directly to their seats using their PNR number. This
                partnership elevates train travel comfort and convenience,
                offering diverse food options from popular brands like Behrouz
                Biryani and Faasos.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default News;
