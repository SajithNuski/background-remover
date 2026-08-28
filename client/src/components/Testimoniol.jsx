import React from "react";
import {testimonialsData} from "../assets/assets";

const Testimoniol = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-900 text-transparent bg-clip-text">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            
          >
            <p>"</p>
            <p>{item.text}</p>
            <div>
                <img src={item.image} alt="" /> 
                <div>
                <p >{item.author}</p>
                <p >{item.jobTitle}</p>
                </div>    
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoniol;
