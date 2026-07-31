// import React from 'react';
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 mx-4 lg:mx-44 bg-orange-200">
      <img className="w-32 sm:w-44" src={assets.logo} alt="Logo" />
      <button>
        Get Started
        <img src={assets.arrow_icon} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default Navbar;
