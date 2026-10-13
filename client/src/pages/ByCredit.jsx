// import React from 'react'
import { assets, plans } from "../assets/assets";
const ByCredit = () => {
  return <div className="text-center pt-14 mb-10 min-h-[75vh]">
    <button className="border border-gray-400 px-10 rounded-full py-2 mb-6">Our Plans</button>
    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-900 text-transparent bg-clip-text mb-6 sm:mb-10">
      Choose the plan's that work for you</h1>
    <div className="flex flex-wrap gap-6 justify-center text-left ">
      {plans.map((item,index)=>(
          <div className="bg-white border drop-shadow-md px-8 py-12 rounded hover:scale-105 transition-all duration-500 " key={index}>
            <img width={40} src={assets.logo_icon} />
            <p className="mt-3 font-bold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/{item.credits}credits
              
            </p>
            <button className="w-full bg-gray-800 text-white rounded-lg mt-8 text-sm py-2.5 min-w-52 ">Buy Now</button>
          </div>
      ))}
    </div>
  </div>;
};

export default ByCredit;
