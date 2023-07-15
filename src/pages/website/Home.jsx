import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { WomanImg } from "../../assets/png";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, cartActions } from "../../redux/slice/cart.slice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);

  const addNewProduct = () => {
    const newGuy = {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    };

    dispatch(addProduct(newGuy));
  };

  return (
    <div className="">
      <div className="st_container">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center py-40">
            <div className="w-9/12 space-y-8">
              <h4 className="text-4xl">
                Elevate your <br /> wardrobe with our <br /> fashion essentials
              </h4>
              <p>
                Experience the ultimate relaxation, with our collection of
                serene and tranquil spa inspired designs
              </p>
              <div className="pt-6">
                <button
                  className="flex items-center justify-center px-6 py-2 text-white rounded bg-[#ee9598] hover:bg-[#e5a6a8] gap-x-2"
                  onClick={addNewProduct}
                >
                  Get Started <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden pt-4 md:items-center md:justify-center md:flex md:relative">
            <div className="relative w-full h-[80%] rounded-l-lg border border-r-0 bg-[#ee9598]">
              <img
                src={WomanImg}
                alt=""
                className="absolute bottom-0 w-3/6 left-20 drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
