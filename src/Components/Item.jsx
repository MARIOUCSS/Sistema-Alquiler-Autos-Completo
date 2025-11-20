import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ car }) {
  const currency = "$";
  const navigate = useNavigate();
  const colors = ["#f5f5f5", "#f0f9fd", "#fcf6ed"];
  const bgColor =
    colors[parseInt(car._id?.slice(-2) || "0", 16) % colors.length];

  return (
    <div
      onClick={() => {
        navigate("/listing/" + car._id);
        scroll(0, 0);
      }}
      className=""
      style={{ background: bgColor }}
    >
      <h4>{car.title}</h4>
      <div>
        <h5>{car.bodyType}</h5>
        <div>
          {currency}
          {car.price.sale}|{currency}
          {car.price.rent}.00<span className="text-xs">/day</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
