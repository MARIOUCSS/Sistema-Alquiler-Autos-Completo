import React from "react";
import { precios } from "../assets/data";
function Listing() {
  return (
    <section className="max-padd-container py-14 bg-primary">
      <div className="flex flex-col sm:flex-row gap-8 mt-10 xl:mt-8 ">
        {/* {left} */}
        <div className="min-w-60 md:min-w-90 py-5 bg-white rounded-2xl flex flex-col items-center justify-center ">
          <div>
            <h5>Sort By</h5>
            <select
              //  onChange={(e) => tooglefilter(e.target.value, setSortType)}
              //onChange={(e) => setSortType(e.target.value)}
              className="medium-14 h-8 w-120 md:w-80 border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-4"
            >
              <option value="relevant" className="font-medium">
                Sort By:Relevant
              </option>
              <option value="low" className="font-medium">
                Sort By:Low
              </option>
              <option value="high" className="font-medium">
                Sort By:High
              </option>
            </select>
          </div>

          <div className=" w-120 md:w-80 bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Car Type</h5>
            <div>
              {["Coupe", "Suv", "Hatchback", "Sedan", "Convertible", "Van"].map(
                (x) => (
                  <label key={x} className="flex gap-2 medium-13">
                    <input type="checkbox" className="w-5" />
                    {x}
                  </label>
                )
              )}
            </div>
          </div>
          <div className="w-120 md:w-80 bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Price Range</h5>
            <div>
              {precios.map((x) => (
                <label key={x} className="flex gap-2 medium-13">
                  <input type="checkbox" className="w-5" />
                  {x}
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* {right} */}
        <div></div>
      </div>
    </section>
  );
}

export default Listing;
