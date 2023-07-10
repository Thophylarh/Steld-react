import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { WomanImg } from "../../assets/png";

const Home = () => (
  <div className="">
    <div className="st_container">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-center py-40">
          <div className="w-9/12 space-y-8">
            <h4 className="text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quis!
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae est error eaque necessitatibus, corporis sint
              architecto, in alias deleniti quis, sapiente suscipit qui veniam
              tempore?
            </p>
            <div className="pt-6">
              <button className="flex items-center justify-center px-6 py-2 text-white rounded bg-amber-800 hover:bg-amber-700 gap-x-2">
                Get Started <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:items-center md:justify-center md:flex md:relative">
          <div className="relative w-full h-full border border-r-0 bg-amber-800">
            <img
              src={WomanImg}
              alt=""
              className="absolute bottom-0 w-3/6 left-20 drop-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
