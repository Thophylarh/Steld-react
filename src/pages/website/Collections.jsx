import React from "react";
import { WomanImg } from "../../assets/png";
import { blazer, jacket, shirt } from "../../assets/Jpg";

const Collections = () => {
  const itemsTab = [
    { id: 0, title: "Blazer" },
    { id: 1, title: "T-shirt" },
    { id: 2, title: "Blazer" },
    { id: 3, title: "Silk Shirt" },
    { id: 0, title: "Jeans" },
    { id: 0, title: "sneakers" },
  ];
  const collectionsList = [
    {
      id: 0,
      title: "Check Blazer",
      price: "$189.00",
      img: shirt,
      //   bg:"yellow"
    },
    {
      id: 0,
      title: "Pink Blazer",
      price: "$270.00",
      img: blazer,
      //   bg:"pink"
    },
    {
      id: 0,
      title: "Grey Suit",
      price: "$320.00",
      img: jacket ,
      //   bg:"red"
    },
  ];
  return (
    <div className=" st_container">
        <div className="py-40">
      <div className="">
        <h1 className="text-4xl text-left">Collections of weekly most sold</h1>
        <p className="text-sm text-left">
          All the collections you need you can find from us without an hassle
        </p>
      </div>
      <div className="flex items-center justify-between pt-[4rem]">
        <div>
          {itemsTab.map(({ id, title }) => (
            <div
              className="bg-[#ccc]  py-2 px-4 rounded-lg mt-2 hover:bg-[#333] hover:text-white"
              key={id}
            >
              <p className="text-sm font-normal text-white"> {title}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-9/12 gap-x-4">
          {collectionsList.map(({ id, title, price,img }) => (
            <div key={id}>
              <div className="bg-[#ccc] px-4 ">
                <img src={img} alt="" className="w-[200px] [h-200px]" />
              </div>
              <h4>{title}</h4>
              <p>{price}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Collections;
