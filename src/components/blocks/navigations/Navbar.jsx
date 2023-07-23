import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { id: 0, title: "Collections", path: "/collections-main" },
  { id: 1, title: "Shops", path: "/shop-main" },
  { id: 2, title: "About Us", path: "/about-us" },
  { id: 3, title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-center w-full shadow h-14">
      <div className="px-8 st_container">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold logo">
            <h2>Steld.</h2>
          </div>

          <nav>
            <ul className="flex items-center justify-center text-sm gap-x-8">
              {navItems.map(({ id, title, path }) => (
                <li className={`w-fit ${location.pathname === path ? "active" : ""}`} key={id}>
                  <Link to={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="flex items-center justify-center gap-x-4 icons">
            <AiOutlineUser className="text-lg" />
            <AiOutlineShoppingCart />
          </section>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
