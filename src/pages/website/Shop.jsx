import React from "react";
import { WomanImg } from "../../assets/png";

const Shop = () => {
  return (
    <div className="st_container">
        <div className="py-60 ">
        <div className="items-center md:justify-between md:flex ">
        <div className="w-full h-[100%] rounded-lg  bg-[#ee9598] ">
          <img
            src={WomanImg}
            alt=""
            className="w-2/6 mx-auto left-20 drop-shadow"
          />
        </div>
        <div className="w-9/12 space-y-8">
            <h1 className="text-4xl text-right">Shop the Future of Fashion <br /> to stay updated</h1>
            <p className="pt-1 text-sm text-right">Indulge in comfort and style with our range of plush furniture <br/> and cozy accents</p>
            <div className="flex items-center justify-end">
            <button className=" md:flex items-center md:justify-end px-6 py-2 text-white rounded bg-[#ee9598] hover:bg-[#e5a6a8] ">
                Shop
            </button> 
            </div>
          
        </div>
      </div>
        </div>
    
    </div>
  );
};

export default Shop;
