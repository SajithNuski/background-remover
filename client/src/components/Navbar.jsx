// import React from 'react';
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 mx-4 lg:mx-44">
      <img className="w-32 sm:w-44" src={assets.logo} alt="Logo" />
      <button className="bg-zinc-900 text-white flex items-center gap-2 gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full" >
        Get Started
        <img className="w-4 sm:w-4" src={assets.arrow_icon} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default Navbar;
