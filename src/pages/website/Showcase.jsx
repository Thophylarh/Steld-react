import React from "react";
import { WomanImg } from "../../assets/png";

const Showcase = () => {
  return (
    <div className=" st_container">
      <div className="w-full h-[400px] rounded-lg  bg-[#f17f6f] relative">
        <h2 className="absolute  text-5xl left-[95px] text-white -top-[-50%]">
          Shop Your Most Comfortable Wears On Steld.
        </h2>
        <div className="absolute left-[35%] bottom-0">
        <img src={WomanImg} alt="" className="w-[350px] h-[350px] " />
        </div>
    
      </div>
    </div>
  );
};

export default Showcase;
