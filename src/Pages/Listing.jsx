import React, { useMemo, useState } from "react";
//import { precios } from "../assets/data";
import { bodyType, priceRange, sortOptions } from "./Exportables";
//import { dummyCars } from "../assets/data";
import Item from "../Components/Item";
import { useGlobalState } from "../Context/CartContext";
import { RangoPrice } from "./Exportables";
function Listing() {
  const { dummyCars } = useGlobalState();
  //const [filterProduct, setFilterProduct] = useState([]);
  const [carType, setcarType] = useState([]);
  const [rangePrice, setrangePrice] = useState([]);
  const [sortType, setSortType] = useState("Relevant");
  //Paginador
  //Pagina Actual
  const [currPage, setcurrPage] = useState(1);
  //Cantidad por Pagina
  const Itemsperpage = 6;
  //
  const ToogleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
    //si el valor esta incluido en el array de setcarty);
  };
  // const GetPaginatedCars = () => {
  //   //1-1*6 =0
  //   //0+6=6
  //   const startIndex = (currPage - 1) * Itemsperpage;
  //   const endIndex = startIndex + Itemsperpage;
  //   return filterProduct.slice(startIndex, endIndex);
  // };
  const filterProduct = useMemo(() => {
    // Paso 1: Aplicar filtros
    let filtered = [...dummyCars];

    // Filtro por tipo de carro
    if (carType.length) {
      filtered = filtered.filter((car) => carType.includes(car.bodyType));
    }

    // Filtro por rango de precio
    if (rangePrice.length) {
      filtered = filtered.filter((car) => {
        const carPrice = car.price.sale;
        return rangePrice.some((range) => {
          const { min, max } = RangoPrice(range);
          return carPrice >= min && carPrice <= max;
        });
      });
    }

    // Paso 2: Aplicar ordenamiento
    const sorted = [...filtered]; // Crear copia para no mutar
    switch (sortType) {
      case "Low to High":
        return sorted.sort((a, b) => a.price.rent - b.price.rent);
      case "High to Low":
        return sorted.sort((a, b) => b.price.rent - a.price.rent);
      default:
        return sorted;
    }
  }, [carType, sortType, rangePrice, dummyCars]);

  const GetPaginatedCars = () => {
    //1-1*6 =0 si suma 1 =2-1 *6 6
    //0+6=6  si 6+6=12 slice (6,12)
    const startIndex = (currPage - 1) * Itemsperpage;
    const endIndex = startIndex + Itemsperpage;
    return filterProduct.slice(startIndex, endIndex);
  };
  const TotalPages = Math.ceil(filterProduct.length / Itemsperpage);
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
            {GetPaginatedCars().length > 0 ? (
              GetPaginatedCars().map((cars) => (
                <Item key={cars._id} car={cars} />
              ))
            ) : (
              <p className="capitalize">No Carts found for selected filters.</p>
            )}
          </div>
          {/* {Pagination} */}
          <div className="flexCenter flex flex-wrap mt-12 mb-10 gap-3">
            <button
              //1===1 inhabilitado true
              disabled={currPage === 1}
              onClick={() => setcurrPage((prev) => prev - 1)}
              className={`btn-solid py-1 px-3 ${
                currPage == 1 && "opacity-50 cursor-not-allowed"
              }`}
            >
              Previous
            </button>
            {/* //Array.from([10, 20, 30], (valor, i) => valor + i)
// → [10, 21, 32] */}
            {/* Array.from({ length: 10 }, (_, i) => i) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */}
            {Array.from({ length: TotalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`btn-outline h-8 w-8 p-0 flexCenter ${
                  currPage === index + 1 && "btn-light"
                }`}
                onClick={() => setcurrPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              //  6==6 inhabilitado true
              disabled={currPage === TotalPages}
              onClick={() => setcurrPage((prev) => prev + 1)}
              className={`btn-solid !py-1 !px-3 ${
                currPage === TotalPages && "opacity-50 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listing;
