// import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-10 xl:py-20 ">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-900 text-transparent bg-clip-text">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex item-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <div className="items-start flex bg-white border gap-4 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="Step 1" />
          <div>
            <p className="text-xl font-medium">Upload your image </p>
            <p className=" text-sm text-gray-600 mt-1">This is a demo text, will replace it later.<br/> This is a demo..</p>
          </div>
        </div>
        <div className="items-start flex bg-white border gap-4 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="Step 2" />
          <div>
            <p className="text-xl font-medium">Remove background </p>
            <p className=" text-sm text-gray-600 mt-1">This is a demo text, will replace it later.<br/> This is a demo..</p>
          </div>
        </div>
        <div className="items-start flex bg-white border gap-4 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="Step 3" />
          <div>
            <p className="text-xl font-medium">Download image </p>
            <p className=" text-sm text-gray-600 mt-1">This is a demo text, will replace it later.<br/> This is a demo..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
