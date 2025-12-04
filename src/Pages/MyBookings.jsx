//import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { assets, dummyBookingsData } from "../assets/data";
import Title from "../Components/Title";
function MyBookings() {
  const [bookings, setbookings] = useState([]);
  const currency = "$";
  const user = {
    name: "mario",
    apellido: "livi",
  };
  //const { user } = useUser();
  const GetUserBooking = async () => {
    setbookings(dummyBookingsData);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (user) {
      GetUserBooking();
    }
  }, [user]);
  return (
    <div className="bg-primary py-15 pt-28">
      <div className="max-padd-container">
        <Title title2={"My Bookings"} titleStyles={"mb-10"} />
        {bookings?.map((x) => (
          <div
            key={x._id}
            className="bg-white ring-1 ring-slate-900/5 p-2 pr-4 mt-5 rounded-lg"
          >
            {/*Cart List */}
            <div className="flexStart gap-3 mb-3">
              <div className="bg-primary rounded-xl overflow-hidden flexCenter h-19">
                <img
                  src={x.car.images[0]}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                <h5>{x.car.title}</h5>
                <div className="flex gap-4">
                  <div className="flex items-center gap-x-2">
                    <h5>Seats</h5>
                    <p className="text-gray-400 text-sm">{x.car.specs.seats}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <h5>Total :</h5>
                    <p className="text-gray-400 text-sm">
                      {currency}
                      {x.totalPrice}
                    </p>
                  </div>
                </div>
                <p className="flex gap-x-2 place-items-baseline mt-0.3">
                  <img src={assets.pin} alt="" width={13} />
                  {x.car.address}
                </p>
              </div>
            </div>
            {/**booking summary */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 border-t border-gray-300 ">
              {/*si no pueden en una linea que se ponga una debajo del otra */}
              <div className="flex gap-2 gap-x-4 flex-wrap mt-2">
                <div className="flex items-center gap-x-2">
                  <h5>Bookin ID:</h5>
                  <p className="text-gray-400 text-xs">{x._id}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h5>Pick-Up:</h5>
                  <p className="text-gray-400 text-xs">
                    {new Date(x.pickUpDate).toDateString()}
                  </p>
                </div>
                <div className="flex items-center text-xs">
                  <h5>Drop-Off : </h5>
                  <p className="text-gray-400 text-xs">
                    {new Date(x.dropOffDate).toDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 gap-x-3">
                <div className="flex items-center gap-x-2">
                  <h5>Payment :</h5>
                  <div className="flex items-center gap-1">
                    <span
                      className={`min-w-2.5 h-2.5 rounded-full ${
                        x.isPaid ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    />
                    <p>{x.isPaid ? "Paid" : "UnPaid"}</p>
                  </div>
                </div>
                {/* esta pagado f con ! es igual v entra el pay now si esta pagado v al negar f no sale el botton */}
                {!x.isPaid && (
                  <button className="btn-solid !py-1 !text-xs rounded-sm">
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
