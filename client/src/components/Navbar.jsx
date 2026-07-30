// import React from 'react';
import assets from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <button>
        Get Started
        <img src={assets.arrow_icon} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default Navbar;
