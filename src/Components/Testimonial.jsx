import React from "react";
import Title from "./Title";
import { assets } from "../assets/data";

function Testimonial() {
  return (
    <section className="max-padd-container py-16 xl:py-32">
      <Title
        title={"Your Next Car Awaits"}
        title2={"Start Driving With Ease"}
        paraStyles={"mb-10"}
        para={
          "Hear what our users say about us. Wr always looking for aways to improve.If you have positive withus,leave a review"
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-primary w-full space-x-2 p-3 rounded-md text-gray-500 text-sm">
          <div className="flexBetween">
            <div className="flex gap-1">
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
            </div>
            <p>22 Jan 2025</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
            delectus modi autem, iusto deleniti ipsam officiis voluptatibus
            suscipit voluptates fugit sint alias. Molestiae illum fugiat
            adipisci, dignissimos earum vel.
          </p>
          <div className="flex items-center gap-3">
            <img
              src={assets.user1}
              alt="userImg"
              className="h-8 w-8 rounded-full"
            />
            <p className="text-gray-800 font-medium">Jhon Doe</p>
          </div>
        </div>
        <div className="bg-primary w-full space-x-2 p-3 rounded-md text-gray-500 text-sm">
          <div className="flexBetween">
            <div className="flex gap-1">
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
            </div>
            <p>22 Jan 2025</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
            delectus modi autem, iusto deleniti ipsam officiis voluptatibus
            suscipit voluptates fugit sint alias. Molestiae illum fugiat
            adipisci, dignissimos earum vel.
          </p>
          <div className="flex items-center gap-3">
            <img
              src={assets.user2}
              alt="userImg"
              className="h-8 w-8 rounded-full"
            />
            <p className="text-gray-800 font-medium">Jhon Doe</p>
          </div>
        </div>
        <div className="bg-primary w-full space-x-2 p-3 rounded-md text-gray-500 text-sm">
          <div className="flexBetween">
            <div className="flex gap-1">
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
              <img src={assets.star} alt={16} />
            </div>
            <p>22 Jan 2025</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
            delectus modi autem, iusto deleniti ipsam officiis voluptatibus
            suscipit voluptates fugit sint alias. Molestiae illum fugiat
            adipisci, dignissimos earum vel.
          </p>
          <div className="flex items-center gap-3">
            <img
              src={assets.user1}
              alt="userImg"
              className="h-8 w-8 rounded-full"
            />
            <p className="text-gray-800 font-medium">Jhon Doe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
