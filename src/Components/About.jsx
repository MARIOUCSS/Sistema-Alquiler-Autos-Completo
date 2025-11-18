import React from "react";
import Title from "./Title";
import { assets } from "../assets/data";
function About() {
  return (
    <section className="max-padd-container py:16 xl:py-28 !pt-36">
      <div className="flex items-center flex-col lg:flex-row gap-12 ">
        <div className="flex-[5]">
          <div>
            <Title
              title1={"Your Trusted Real Estate Partner"}
              title2={"Helping You Every Step of the Way"}
              paraStyles={"hidden"}
            />
            <p className="mb-10 mt-5">
              Find reliable cart with transparent pricing, verified inspection,
              flexible pickup and delivery option,and 24/7 custemer support for
              a smooth or buying experience.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-xl bg-primary">
                <h5>Wide Vehicle Selection</h5>
                <p>
                  Book in seconds with instant confirmations and flexible pickup
                  options, so you get on the road fast without waiting or
                  hassles.
                </p>
              </div>
              <div className="p-4 rounden-xl bg-primaryOne ">
                <h5>Quick Service</h5>
                <p>
                  Choose from economy to luxury models, regularly maintained and
                  verified, giving you reliable performance and the perfect car
                  for every trip.
                </p>
              </div>
              <div className="p-4 rounden-xl bg-primaryOne ">
                <h5>Transparent Pricing</h5>
                <p>
                  Upfront rates with no hidden fees, clear breakdowns for
                  insurance and extras, so pricing stays predictable and easy to
                  understand before booking
                </p>
              </div>
              <div className="p-4 rounden-xl bg-primaryTwo ">
                <h5>24/7 Support</h5>
                <p>
                  Around the clock customer support via chat and phone,
                  resolving issues quickly and helping with changes, extensions,
                  or roadside assistance anytime you need.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[4] flex gap-7">
          <div className="relative flex justify-end mb-8">
            <img src={assets.about1} alt="" className="rounded-xl" />
          </div>
          <div className="relative flex justify-end mt-8">
            <img src={assets.about2} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
