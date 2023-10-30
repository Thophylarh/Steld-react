import React, { useEffect } from "react";
import shoe from "../../assets/png/shoe-bg-removebg-preview.png";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Select, Space } from "antd";
import { useState } from "react";
import { GetShopProductsApi } from "../../services/apis/shop.api";
import { SortAllCollectionsApi } from "../../services/apis/sortprice.api";

const ShopMain = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await GetShopProductsApi();
        // console.log(res);
        setShopProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  const productsChunks = [];
  for (let i = 0; i < shopProducts.length; i += 3) {
    productsChunks.push(shopProducts.slice(i, i + 3));
  }

  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        const products = await SortAllCollectionsApi(sortOrder);
        setShopProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShopProducts();
  }, [sortOrder]);

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

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
              <h3>{shopProducts.length} Products</h3>
            </div>
            <Space wrap>
              <Select
                defaultValue={sortOrder}
                style={{ width: 120 }}
                options={[
                  { value: "desc", label: "Low to high" },
                  { value: "asc", label: "High to low" },
                ]}
                onChange={handleSortChange}
              />
            </Space>
          </div>
          <div>
            <div className=" flex  items-center flex-col  pt-[1rem]  h-[700px]">
              {productsChunks.map((chunk, index) => (
                <div
                  className="md:flex md:justify-between items-center pt-[1rem]"
                  key={index}
                >
                  {chunk.map(({ id, title, price, image, category }) => (
                    <div className="flex flex-col justify-between " key={id}>
                      <div className="transition-transform duration-300 hover:scale-105 w-96">
                        <img
                          src={image}
                          alt={title}
                          className="w-[200px] h-[200px]"
                        />
                      </div>
                      <div className="w-full p-4 space-y-2 h-1/5">
                        <h6 className="wrap-text">{title}</h6>
                        <p>${price}</p>
                        <p>{category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
