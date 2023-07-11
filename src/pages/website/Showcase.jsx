import React from "react";
import { cashmere } from "../../assets/png";




const Showcase = () => {
  return (
    <div className=" st_container">
      <div className="w-full h-[400px] rounded-lg  bg-[#f17f6f] relative py-60">
        <h2 className="absolute  text-5xl left-[95px] text-white -top-[-50%]">
          Shop Your Most Comfortable Wears On Steld.
        </h2>
        <div className="absolute left-[35%] bottom-0">
          <img src={cashmere} alt="" className="w-[400px] h-[400px] " />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
