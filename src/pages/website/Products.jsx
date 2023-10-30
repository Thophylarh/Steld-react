import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GetAllCategoriesApi, GetAllProductsApi } from "../../services";

const productNav = [
  { id: 0, title: "All" },
  { id: 1, title: "Men" },
  { id: 2, title: "Women" },
  { id: 3, title: "Children" },
];

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await GetAllProductsApi();

      const products = res.slice(0, 4);

      return products;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllCategories = async () => {
    try {
      const res = await GetAllCategoriesApi();
      const categories = res.map((e, index) => ({ id: index, title: e }));
      return categories;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllProductsAndCategories = async () => {
    try {
      const res = await Promise.all([fetchAllProducts(), fetchAllCategories()]);
      console.log(res);
      setAllProducts(res[0]);
      setAllCategories(res[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProductsAndCategories();
  }, []);

  return (
    <div className="py-40 st_container ">
      <div className="items-center md:justify-center md:flex-col md:flex">
        <h1 className="text-4xl ">Explore more of our product</h1>
        <p className=" sm:text-xs text-sm text-[##929292] pt-4">
          All the collections you may need, you can find rom us without{" "}
          <span className="md:items-center md:justify-center md:flex">
            any hassle
          </span>
        </p>

        {/* <nav className="pt-6">
          <ul className="flex items-center justify-center text-sm gap-x-8">
            {allCategories.map(({ id, title }) => (
              <li className="w-fit" key={id}>
                <a
                  href="#!"
                  className="bg-[#ee9598] hover:bg-[#e5a6a8] rounded-full text-white py-2 px-4 "
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>

      <div className="flex items-center justify-end pt-6 gap-x-1">
        <div className="px-5 py-2 bg-[#ccc] rounded-full justify-self-end">
          <BsArrowLeft className=" text-[#1f2123] " />
        </div>

        <div className="px-5 py-2 rounded-full bg-[#333]">
          <BsArrowRight className="text-white " />
        </div>
      </div>
      <div className="   md:flex md:justify-between items-center  pt-[1rem]">
        {allProducts.map(({ id, title, price, image, category }) => (
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
      </div>
    </div>
  );
};

export default Products;
