import React, { useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { WomanImg } from "../../assets/png";
import { blazer, jacket, shirt, sweatShirt } from "../../assets/Jpg";
import { GetAllProductsApi } from "../../services";

const Products = () => {
  const productNav = [
    { id: 0, title: "All" },
    { id: 1, title: "Men" },
    { id: 2, title: "Women" },
    { id: 3, title: "Children" },
  ];

  const productItems = [
    {
      id: 0,
      title: "Cotton shirt",
      price: "$113.00",
      image: blazer,
    },
    {
      id: 1,
      title: "Blue Blazer",
      price: "$235.00",
      image: sweatShirt,
    },
    {
      id: 2,
      title: "Black T-shirt",
      price: "$79.00",
      image: shirt,
    },
    {
      id: 3,
      title: "Check shirt",
      price: "$98.00",
      image: jacket,
    },
  ];

  const fetchAllProducts = async () => {
    try {
      const res = await GetAllProductsApi();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
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

        <nav className="pt-6">
          <ul className="flex items-center justify-center text-sm gap-x-8">
            {productNav.map(({ id, title }) => (
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
        </nav>
      </div>

      <div className="flex items-center justify-end pt-6 gap-x-1">
        <div className="px-5 py-2 bg-[#ccc] rounded-full justify-self-end">
          <BsArrowLeft className=" text-[#1f2123] " />
        </div>

        <div className="px-5 py-2 rounded-full bg-[#333]">
          <BsArrowRight className="text-white " />
        </div>
      </div>
      <div className="   md:flex md:justify-between items-center gap-x-4 pt-[1rem]">
        {productItems.map(({ id, title, price, image }) => (
          <div className="" key={id}>
            <div className="p-4 transition-transform duration-300 hover:scale-105">
              <img src={image} alt={title} className="h-[260px] w-[260px]  " />
            </div>
            <h6>{title}</h6>
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
