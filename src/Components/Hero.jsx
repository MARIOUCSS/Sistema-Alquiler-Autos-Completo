import React from "react";
import { assets } from "../assets/data";
import { cities } from "../assets/data";
function Hero() {
  // console.log(cities);
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
          <form
            className="bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col
           md:flex-row md:rounded-full md:pl-12 max-md:items-start gap-4 max-md:mx-auto relative"
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.pin} alt="pin" width={20} />
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none capitalize"
                placeholder="Type here"
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.calendar} alt="calendar" width={20} />
                <label htmlFor="checkIn">Pick Up</label>
              </div>
              <input
                id="checkIn"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.calendar} alt="calendarIcon" width={20} />
                <label htmlFor="checkOut">Drof Off</label>
              </div>
              <input
                id="dropOff"
                type="date"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            {/* <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
              <label htmlFor="guests">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
                placeholder="0"
              />
            </div> */}

            <button
              type="submit"
              className="flex items-center justify-center gap-1 rounded-md bg-solid py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
            >
              <span>Search</span>
            </button>
          </form>
        </div>
        <div className="flexCenter">
          <img src={assets.bg} alt="bgImg" className="w-full max-w-[77%]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
