import React from "react";
import { assets } from "../assets/data";
function Hero() {
  return (
    <section className="bg-primary">
      <div className="max-padd-container relative flex justify-end mx-auto flex-col gap-9 py-6 pt-32 z-10">
        <div className="flexCenter flex-col gap-y-6">
          <div className="text-center max-w-5xl">
            <h1 className="capitalize leading-tight">
              Explore{" "}
              <span className="bg-gradient-to from-solid to to-white pl-1 rounded-md">
                premiun vehicles
              </span>{" "}
              available in exciting destination.
            </h1>
          </div>
          form
        </div>
        <div className="flexCenter">
          <img src={assets.bg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
