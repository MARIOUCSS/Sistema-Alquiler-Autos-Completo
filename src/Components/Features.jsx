import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cities } from "../assets/data";
import { assets } from "../assets/data";
import { dummyCars } from "../assets/data";
import { useEffect } from "react";
import Title from "./Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
// import { Autoplay } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Item from "./Item";
function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const cart = () => {
      const data = dummyCars.filter((car) => cities.includes(car.city));
      setFeatures(data);
      console.log(data);
    };
    cart();
  }, [dummyCars]);
  return (
    <section className="max-padd-container py-16 xl:py-24">
      <Title
        title={"Your Next Car Awaits"}
        title2={"Start Driving With Ease"}
        paraStyles={"mb-10"}
      />
      <div className="flexBetween mt-8 mb-6">
        <h5>
          <span className="font-bold">Displiying 1-6</span> from 3k listings
        </h5>
        <Link
          to={"/listing"}
          onClick={() => scrollTo(0, 0)}
          className="bg-solid  text-white text-2xl rounded-md p-2 flexCenter"
        >
          <img src={assets.sliders} alt="" className="invert" />
        </Link>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 30 },
          1124: { slidesPerView: 3, spaceBetween: 30 },
          1300: { slidesPerView: 4, spaceBetween: 30 },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="h-[478px] md:h-[533px] xl:h-[422px] mt-5 "
      >
        {features.slice(0, 6).map((car) => (
          <SwiperSlide>
            <Item car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Features;
