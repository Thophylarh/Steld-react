import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const navItems = [
  { id: 0, title: "New Arrivals" },
  { id: 1, title: "Shops" },
  { id: 2, title: "About Us" },
  { id: 3, title: "Contact" },
];

const Navbar = () => (
  <header className="flex items-center justify-center w-full shadow h-14">
    <div className="px-8 st_container">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold logo">
          <h2>Steld.</h2>
        </div>

        <nav>
          <ul className="flex items-center justify-center text-sm gap-x-8">
            {navItems.map(({ id, title }) => (
              <li className="w-fit">
                <a href="#!" key={id}>
                  {title}
                </a>
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

export default Navbar;
