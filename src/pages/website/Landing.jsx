import React from "react";
import Home from "./Home";
import IconsDisplay from "./IconsDisplay";
import Marquee from "react-fast-marquee";
import Products from "./Products";
import Shop from "./Shop";
import Showcase from "./Showcase";
import Collections from "./Collections";

const Landing = () => {
  return (
    <div className="st_container">
      <Home />
      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={true}
        gradientWidth={30}
        direction="left"
      >
        <IconsDisplay />
      </Marquee>
      <Products />
      <Shop />
      <Showcase />
      <Collections />
    </div>
  );
};

export default Landing;
