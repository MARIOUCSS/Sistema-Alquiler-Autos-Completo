import React, { useMemo } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartImages from "../Components/CartImages";
import { assets, dummyCars } from "../assets/data";
function CardDetails() {
  //const [car, setCar] = useState(null);
  const { id } = useParams();
  const [prickUpdate, setprickUpdate] = useState(null);
  const [dropOffDate, setdropOffDate] = useState(null);
  const [isAvailable, setisAvailable] = useState(false);
  const currency = "$";
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (dummyCars && dummyCars.length > 0) {
  //     const foundcar = dummyCars.find((c) => c._id === id);
  //     if (foundcar) {
  //       setCar(foundcar);
  //     }
  //   }
  // }, [dummyCars, id]);
  const car = useMemo(() => {
    return dummyCars?.find((c) => c._id === id) || null;
  }, [dummyCars, id]);
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    car && (
      <section className="max-padd-container py-14 bg-primary ">
        <div className="flex flex-col sm:flex-row gap-8 mt-10 xl:mt-8 ">
          {/**Left */}
          <div className="flex-[5] bg-white p-5 rounded-xl my-4">
            <p className="flexStart gap-x-2">
              <img src={assets.pin} width={19} />
              <span>{car.address}</span>
            </p>
            <div className="flex justify-between flex-col sm:flex-row">
              <h3>{car.title}</h3>
              <h4>
                {currency}
                {car.price.sale}|{car.price.rent}.00/day
              </h4>
            </div>
            <div className="flex justify-between flex-col sm:flex-row my-3">
              <h4>{car.bodyType}</h4>
              <div className="flex gap-x-2 text-solid relative top-1.5">
                <h4 className="relative botton-0.5 text-black">5.0</h4>
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
              </div>
            </div>
            <div className="flex gap-x-4 my-3">
              <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[400]">
                <img src={assets.transmission} alt="" width={19} />
                {car.specs.transmission}
              </p>
              <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                <img src={assets.seats} alt="" width={19} />
                {car.specs.seats}
              </p>
              <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                <img src={assets.fuelType} alt="" width={19} />
                {car.specs.fuelType}
              </p>
              <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                <img src={assets.odometer} alt="" width={19} />
                {car.odometer}
              </p>
            </div>
            <div>
              <h4 className="mt-4 mb-1">Car Details</h4>
              <p className="mt-4 ">{car.description}</p>
            </div>
            <h4 className="mt-4 mb-2">Features</h4>
            <div className="flex gap-3 flex-wrap">
              {car.features.map((feat) => (
                <p key={feat} className="p-3 py-1 rounded-lg bg-primary">
                  {feat}
                </p>
              ))}
            </div>
            <form
              action=""
              className="text-gray-500 bg-primary rounded-lg px-6 py-3 flex flex-col lg:flex-row gap-3 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative mt-10"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img src={assets.calendar} alt="calendarIcon" width={20} />
                  <label htmlFor="pickUpdate">Pick Up</label>
                </div>
                <input
                  type="date"
                  onChange={(e) => setprickUpdate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  id="prickUpdate"
                  className=" rounded bg-white  border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <img src={assets.calendar} alt="calendarIcon" width={20} />
                  <label htmlFor="pickUpdate">Pick Up</label>
                </div>
                <input
                  type="date"
                  onChange={(e) => setprickUpdate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  id="prickUpdate"
                  className=" rounded bg-white  border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                />
              </div>
              <button className="flexCenter btn-solid rounded-md gap-2">
                <img src={assets.search} alt="" width={20} className="invert" />
                <span>{isAvailable ? "Book Car" : "Check Dates"}</span>
              </button>
            </form>
            {/* {contact agency} */}
            <div className="p-6 bg-primary rounded-xl mt-10 max-w-sm">
              <h4 className="mb-3">For Buying Contact</h4>
              {/*divide-y sera horizontal no vertical en cambio divide-x sera vertical a los hijos los divide */}
              <div className="text-sm w-80 divide-y divide-gray-500/30 ring-1 ring-slate-900/10 rounded">
                <div className="flex items-start justify-between p-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4>{car?.agency?.name}</h4>
                      <p className="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border border-green-500/30">
                        Agency
                      </p>
                    </div>
                    <p>Agency Office</p>
                  </div>
                  <img
                    src={car.agency.owner.image}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="flexStart gap-2 p-1 ">
                  <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                    <img src={assets.phone} alt="" width={14} />
                  </div>
                  <p>{car.agency.contact}</p>
                </div>
                <div className="flexStart gap-2 p-1">
                  <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                    <img src={assets.mail} alt="" width={14} />
                  </div>
                  <p>{car.agency.email}</p>
                </div>
                <div className="flexCenter divide-x divide-gray-500/30 ">
                  <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer ">
                    <img src={assets.mail} width={19} />
                    Send Email
                  </button>
                  <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer ">
                    <img src={assets.phone} width={19} />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* {right} */}
          <div className="flex-[4] flex w-full bg-white p-4 rounded-xl my-4">
            <CartImages car={car} />
          </div>
        </div>
      </section>
    )
  );
}

export default CardDetails;
