import React from "react";
import Title from "./Title";
import { assets } from "../assets/data";
function About() {
  return (
    <section className="max-padd-container py:16 xl:py-28 !pt-36">
      <div className="flex items-center flex-col lg:flex-row gap-12 ">
        <div className="flex-[5]">
          <div>
            <Title />
          </div>
        </div>
        <div className="flex-[4] flex gap-7">right</div>
      </div>
    </section>
  );
}

export default About;
