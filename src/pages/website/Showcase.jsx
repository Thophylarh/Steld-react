import React from "react";
import { cashmere } from "../../assets/png";

const Showcase = () => {
  return (
    <div className=" st_container">
      <div className=" w-full h-[400px] rounded-lg  bg-[#f17f6f] relative py-60">
        <h2 className="text-5xl text-center text-white ">
          Shop Your Most Comfortable Wears On Steld.
        </h2>
        <div className=" md:absolute md:left-[35%] md:bottom-0 ">
          <img
            src={cashmere}
            alt=""
            className=" hidden md:inline md:w-[400px] md:h-[400px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
