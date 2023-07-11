import React from "react";
import { chanel, dior, gucci, nike } from "../../assets/png";

const IconsDisplay = () => {
  return (
    <div className="st_container">
      <div className="grid grid-cols-4 gap-x-[12rem] items-center">
        <img
          src={chanel}
          alt=""
          className="h-[4.5rem] w-[4.5rem] filter brightness-0 saturate-100"
        />
        <img src={gucci} alt="" className="h-[4.5rem] w-[4.5rem]" />
        <img src={dior} alt="" className="h-[8rem] w-[8rem]" />
        <img src={nike} alt="" className="h-[6rem] w-[6rem]" />
      </div>
    </div>
  );
};

export default IconsDisplay;
