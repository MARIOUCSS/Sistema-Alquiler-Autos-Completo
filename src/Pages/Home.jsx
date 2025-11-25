import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Features from "../Components/Features";
import Banner from "../Components/Banner";
import Testimonial from "../Components/Testimonial";
//import Footer from "../Components/Footer";
import Footers from "../Components/Footers";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Banner />
      <Testimonial />
      {/* // <Footer /> */}

      {/* <Footers /> */}
    </>
  );
}

export default Home;
