import React from "react";
import { PiCaretDoubleRightBold, PiCaretRightLight } from "react-icons/pi";
import { WomanImg, cashmere } from "../../assets/png";
import { blazer, sweatShirt } from "../../assets/Jpg";
import shoe from "../../assets/png/shoe-bg-removebg-preview.png";

const collectionItems = [
  {
    id: 0,
    image: WomanImg,
    title: "Women",
  },
  {
    id: 1,
    image: blazer,
    title: "Men",
  },
  {
    id: 2,
    image: sweatShirt,
    title: "Jewellery",
  },
  {
    id: 3,
    image: cashmere ,
    title: "Unisex",
  },
];

const CollectionsMain = () => {
  return (
    <div className="st_container">
      <div className="py-40 space-y-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-4 text-4xl font-bold text-black">Collections</h1>
          <div className="flex items-center justify-center gap-x-4">
            <div>Home</div>
            <PiCaretDoubleRightBold />
            <p>Collections</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {collectionItems.map(({ id, title, image }) => (
            <div className="flex flex-col items-center" key={id}>
              <div className="relative transition-transform duration-300 hover:scale-105 h-5/6 w-96">
                <img src={image} alt="" className="object-contain w-full h-full " />
              </div>
              <div className="flex items-center w-full p-4 pt-6 space-y-2 gap-x-4 h-1/5">
                <h5>{title}</h5>
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-rose-300">
                  <PiCaretRightLight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsMain;
