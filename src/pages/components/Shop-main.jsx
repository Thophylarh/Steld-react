import React, { useEffect } from "react";
import shoe from "../../assets/png/shoe-bg-removebg-preview.png";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Select, Space } from "antd";
import { useState } from "react";
import { GetShopProductsApi } from "../../services/apis/shop.api";

const ShopMain = () => {
  const [shopProducts, setShopProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = GetShopProductsApi();
   
      console.log(res);
      // setShopProducts(res);
     
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="st_container ">
      <div className="py-40 space-y-20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-black">Shop</h1>
            <div className="flex items-center pt-4 gap-x-2">
              <p className="">Home</p>
              <PiCaretDoubleRightBold />
              <p>Shop</p>
            </div>
          </div>

          <div className="">
            <div className="bg-[#ee9598] rounded-full w-[400px] relative h-[400px]"></div>
            <div>
              <img
                src={shoe}
                alt=""
                className="h-[300px]  w-[500px] absolute right-[7%] top-[30%]"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between ">
            <div className="">
              <h3> 117 Products</h3>
            </div>
            <Space wrap>
              <Select
                defaultValue="Price"
                style={{ width: 120 }}
                options={[
                  { value: "Low to high", label: "Low to high" },
                  { value: "High to low", label: "High to low" },
                ]}
              />
            </Space>
          </div>
          <div>
            <div className="   md:flex md:justify-between items-center  pt-[1rem]">
              {shopProducts.map(({ id, title, price, image, category }) => (
                <div
                  className=" border h-[700px] flex flex-col justify-between "
                  key={id}
                >
                  <div className="relative transition-transform duration-300 hover:scale-105 h-5/6 w-96">
                    <img
                      src={image}
                      alt={title}
                      className="absolute object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-full p-4 space-y-2 border h-1/5">
                    <h6>{title}</h6>
                    <p>${price}</p>
                    <p>{category}</p>
                  </div>
                </div>
              ))}
              {/* {shopProducts.map(({id,title,price,category,image})=>(
                <div className="" key={id}>
                <div className="flex flex-col justify-between border">
                <div className="">
                  <div className="h-5/6 w-96"><img src={image} alt={title} className="object-contain w-full h-full" /></div>
                 <div className="w-full p-4 space-y-2 border h-1/5">
                 <h5>{title}</h5>
                  <p>{category}</p>
                  <p>{price}</p>
                 </div>
                 
                </div>
                </div>
              </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
