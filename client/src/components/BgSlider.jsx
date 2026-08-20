import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (event) => {
        setSliderPosition(event.target.value);
    }

  return (
    <div className="pb-10 mx-2 md:py-20 xl:py-40">
        <h1 className=" mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-900 text-transparent bg-clip-text mt-20">
            Remove Background With High <br/> Quality and Accuracy
        </h1>
        <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
            {/* bg image */}
            <img src={assets.image_w_bg} alt="Background Slider" style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }} />
            {/* slider */}
            {/* fg image */}
            <img className="absolute top-0 left-0 w-full h-full" src={assets.image_wo_bg} alt="Foreground Slider" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} />
            {/* slider */}
            <input type="range" min="0" max="100" value={sliderPosition} onChange={handleSliderChange} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-index-10 bg-gray-200 rounded-lg slider" />
        </div>
    </div>
  )
}

export default BgSlider