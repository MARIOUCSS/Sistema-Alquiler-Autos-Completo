import React, { useEffect, useState } from "react";

function CartImages({ car }) {
  const [image, setimage] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (car && car.images && car.images.length > 0) {
      setimage(car.images[0]);
    }
  }, [car]);
  // const CartImage = useMemo(() => {
  //   // if (!car) {
  //   //   return;
  //   // }
  //   return car.images[1];
  // }, [car]);
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-primary rounded-2xl overflow-hidden flexCenter w-full h-[244px] lg:h-[322px]">
        <img
          alt=""
          src={image || car.images[0]}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="grid grid-cols-2   gap-x-2 sm:grid-cols-2 lg:grid-cols-2">
        {car.images.map((item, index) => (
          <button
            onClick={() => setimage(item)}
            key={index}
            type="button"
            className={` my-2 bg-primary rounded-2xl overflow-hidden flexCenter  h-[111px] lg:h-[122px] transition-transform duration-400 ${
              item === image
                ? "border-8 border-solid/10 scale-[102%]"
                : "hover:scale-[101%]"
            }`}
          >
            <img
              src={item}
              alt={`thumb-${index}`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CartImages;
