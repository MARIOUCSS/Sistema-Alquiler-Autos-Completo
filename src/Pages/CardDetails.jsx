import React, { useEffect, useMemo } from "react";
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
            <div>
              <h3>{car.title}</h3>
              <h4>
                {currency}
                {car.price.sale}|{car.price.rent}.00/day
              </h4>
            </div>
            <div>
              <h4>{car.bodyType}</h4>
              <div>
                <h4>5.0</h4>
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
                <img src={assets.star} width={18} />
              </div>
            </div>
            <div>
              <p>
                <img src={assets.transmission} alt="" width={19} />
                {car.specs.transmission}
              </p>
              <p>
                <img src={assets.seats} alt="" width={19} />
                {car.specs.seats}
              </p>
              <p>
                <img src={assets.fuelType} alt="" width={19} />
                {car.specs.fuelType}
              </p>
              <p>
                <img src={assets.odometer} alt="" width={19} />
                {car.odometer}
              </p>
            </div>
            <div>
              <h4 className="mt-4 mb-1">Car Details</h4>
              <p className="mt-4 ">{car.description}</p>
            </div>
            <h4 className="mt-4 mb-2">Features</h4>
            <div>
              {car.features.map((feat) => (
                <p key={feat} className="p-3 py-1 rounded-lg bg-primary">
                  {feat}
                </p>
              ))}
            </div>
            <form action="">
              <div>
                <div>
                  <img src={assets.calendar} alt="calendarIcon" width={20} />
                  <label htmlFor="pickUpdate">Pick Up</label>
                </div>
                <input
                  type="date"
                  onChange={(e) => setprickUpdate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  id="prickUpdate"
                  className=""
                />
              </div>
              <div>
                <div>
                  <img src={assets.calendar} alt="calendarIcon" width={20} />
                  <label htmlFor="pickUpdate">Pick Up</label>
                </div>
                <input
                  type="date"
                  onChange={(e) => setprickUpdate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  id="prickUpdate"
                  className=""
                />
              </div>
              <button>
                <img src={assets.search} alt="" width={20} className="invert" />
                <span>{isAvailable ? "Book Car" : "Check Dates"}</span>
              </button>
            </form>
            {/* {contact agency} */}
            <div>
              <h4 className="mb-3">For Buying Contact</h4>
              <div>
                <div>
                  <div>
                    <div>
                      <h4>{car?.agency?.name}</h4>
                      <p>Agency</p>
                    </div>
                    <p>Agency Office</p>
                  </div>
                  <img
                    src={car.agency.owner.image}
                    alt=""
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div>
                  <div>
                    <img src={assets.phone} alt="" width={14} />
                  </div>
                  <p>{car.agency.contact}</p>
                </div>
                <div>
                  <div>
                    <img src={assets.mail} alt="" width={14} />
                  </div>
                  <p>{car.agency.email}</p>
                </div>
                <div>
                  <button>
                    <img src={assets.mail} width={19} />
                    Send Email
                  </button>
                  <button>
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
