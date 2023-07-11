import React from "react";
import Home from "./Home";
import IconsDisplay from "./IconsDisplay";
import Marquee from "react-fast-marquee";




const Landing = () => {
  return (
    <div className="st_container">
     <Home/>
     <Marquee 
     speed={60}            
     pauseOnHover={true}    
     gradient={true}         
     gradientWidth={30}      
     direction="left" 
     >
     <IconsDisplay/>
     </Marquee>
      
    </div>
  );
};

export default Landing;
