import React, { useEffect, useState } from "react";
//import { precios } from "../assets/data";
import { bodyType, priceRange, sortOptions } from "./Exportables";
//import { dummyCars } from "../assets/data";
import Item from "../Components/Item";
import { useGlobalState } from "../Context/CartContext";
function Listing() {
  const { dummyCars } = useGlobalState();
  const [carType, setcarType] = useState([]);
  const [rangePrice, setrangePrice] = useState([]);
  const [sortType, setSortType] = useState("Relevant");
  const ToogleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
    //si el valor esta incluido en el array de setcarty);
  };
  const ApplyFilter = () => {
    let filterProduct = [...dummyCars];
    if (carType.length) {
      filterProduct = filterProduct.filter((x) => carType.includes(x.bodyType));
    }
    if(rangePrice.length){
      
      filterProduct=
    }
    return filterProduct;
  };
  const ApplySorting = (ProductList) => {
    switch (sortType) {
      case "Low to High":
        return ProductList.sort((a, b) => a.price.rent - b.price.rent);
      case "High to Low":
        return ProductList.sort((a, b) => b.price.rent - a.price.rent);
      default:
        return ProductList;
    }
  };
  useEffect(() => {
    const Applyfill = ApplyFilter();
    const ApplyPrice = ApplySorting(Applyfill);
    console.log(ApplyPrice);
    console.log(rangePrice);
  }, [carType, sortType, rangePrice]);
  const currency = "$";
  return (
    <section className="max-padd-container py-14 bg-primary">
      <div className="flex flex-col sm:flex-row gap-8 mt-10 xl:mt-8 ">
        {/* {left} */}
        <div className="min-w-60 md:min-w-90  py-5  bg-white rounded-2xl flex flex-col items-center   ">
          <div>
            <h5>Sort By</h5>
            <select
              //  onChange={(e) => tooglefilter(e.target.value, setSortType)}
              //onChange={(e) => setSortType(e.target.value)}
              onChange={(e) => setSortType(e.target.value)}
              className="medium-14 h-8 w-120 md:w-80 border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-4"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className=" w-120 md:w-80 bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Car Type</h5>
            <div>
              {bodyType.map((x) => (
                <label key={x} className="flex gap-2 medium-13">
                  <input
                    type="checkbox"
                    className="w-5"
                    onChange={(e) => ToogleFilter(e.target.value, setcarType)}
                    value={x}
                  />
                  {x}
                </label>
              ))}
            </div>
          </div>
          <div className="w-120 md:w-80 bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Price Range</h5>
            <div>
              {priceRange.map((x) => (
                <label key={x} className="flex gap-2 medium-13">
                  <input
                    type="checkbox"
                    className="w-5"
                    value={x}
                    onChange={(e) =>
                      ToogleFilter(e.target.value, setrangePrice)
                    }
                  />
                  {currency} {x}
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* {right} */}
        <div className="bg-white p-3 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 gap-y-5">
            {dummyCars.length > 0 ? (
              dummyCars.map((cars) => <Item key={cars._id} car={cars} />)
            ) : (
              <p className="capitalize">No Carts found for selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listing;
