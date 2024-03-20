import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import "../Madein/index.css";
import { Fade } from "react-reveal";
function Counter({ end, duration, className }) {
  const [count, setCount] = useState(0);
  const increment = end / (duration * 60);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count < end) {
          const interval = setInterval(() => {
            setCount((prevCount) => Math.min(prevCount + increment, end));
          }, 200);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [count, end, increment]);

  return (
    <div className={className} ref={counterRef}>
      <span className="counter text-4xl md:text-7xl font-bold">
        {Math.floor(count)}
      </span>
    </div>
  );
}

function Madein() {
  return (
    <div className="bg-made-india">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-8 md:py-20">
        <Fade bottom cascade>
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="made-in-india text-4xl md:text-6xl font-extrabold mb-4 md:mb-10">
              <span>Made in India.</span>
              <br />
              <span>Made for the World.</span>
            </h1>
          </div>
        </Fade>
        <div className="md:max-sm-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4 md:mb-0 text-center">
              <Counter
                end={0}
                duration={2}
                className="counter text-4xl md:text-7xl font-bold"
              />
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Users Globally
              </p>
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <Counter
                end={10}
                duration={2}
                className="counter text-4xl md:text-7xl font-bold"
              />
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Employees
              </p>
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <Counter
                end={3}
                duration={2}
                className="counter text-4xl md:text-7xl font-bold"
              />
              <p className="counter-name text-2xl md:text-5xl font-bold">
                Cities
              </p>
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <Counter
                end={5}
                duration={2}
                className="counter text-4xl md:text-7xl font-bold"
              />
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
