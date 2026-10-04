// import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      {/* title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-900 text-transparent bg-clip-text mt-20 py-6 md:py-16">
        See the Magic. Try Now
      </h1>
      <div className="flex items-center justify-center mb-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r  from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img className="w-4" src={assets.upload_btn_icon} alt="Upload Icon" />
          <p className="text-white text-sm">Upload Image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
