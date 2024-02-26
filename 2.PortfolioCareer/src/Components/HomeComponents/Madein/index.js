import React from "react";
import "../Madein/index.css";

function Madein() {
  return (
    <div className="bg-made-india  ">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-8 md:py-20">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h1 className="made-in-india text-4xl md:text-6xl font-extrabold mb-4 md:mb-10">
            Made in India. <br /> Made for the World.
          </h1>
        </div>
        <div className="md:max-sm-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4 md:mb-0 text-center">
              <p className="counter text-4xl md:text-7xl font-bold">100+</p>
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Users Globally
              </p>
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <p className="counter text-4xl md:text-7xl font-bold">20+</p>
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Employees
              </p>
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <p className="counter text-4xl md:text-7xl font-bold">15+</p>
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Cities
              </p>
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <p className="counter text-4xl md:text-7xl font-bold">10+</p>
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Madein;
