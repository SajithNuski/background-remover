// import React from 'react'
import { assets, plans } from "../assets/assets";
const ByCredit = () => {
  return <div className="text-center pt-14 mb-10 min-h-[75vh]">
    <button className="border border-gray-400 px-10 rounded-full py-2 mb-6">Our Plans</button>
    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-900 text-transparent bg-clip-text">
      Choose the plan's that work for you</h1>
    <div>
      {plans.map((item,index)=>(
          <div>
            <img width={40} src={assets.logo_icon} />
            <p>{item.id}</p>
            <p>{item.desc}</p>
            <p>
              <span>${item.price}</span>/{item.credits}credits
              
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Buy Now</button>
          </div>
      ))}
    </div>
  </div>;
};

export default ByCredit;
