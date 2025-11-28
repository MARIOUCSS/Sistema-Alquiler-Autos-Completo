import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartImages } from "../Components/CartImages";
import { dummyCars } from "../assets/data";
function CardDetails() {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  // const [prickUpdate, setprickUpdate] = useState(null);
  // const [dropOffDate, setdropOffDate] = useState(null);
  // const [isAvailable, setisAvailable] = useState(false);
  // const currency = "$";
  //const navigate = useNavigate();

  useEffect(() => {
    if (dummyCars && dummyCars.length > 0) {
      const foundcar = dummyCars.find((c) => c._id === id);
      if (foundcar) {
        setCar(foundcar);
      }
    }
  }, [dummyCars, id]);
  return <div>{car}</div>;
}

export default CardDetails;
