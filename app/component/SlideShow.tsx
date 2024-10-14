

"use client"

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image'; 
import { Showimage2, Showimage3 } from '../../public/images';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



const SlideShow: React.FC = () => {
  const SlideImages: StaticImageData[] = [Showimage2, Showimage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideImages.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SlideImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-16 my-16  flex justify-center w-100 h-1/5 overflow-hidden border border-red-500">
  <Image
    src={SlideImages[currentIndex]}
    alt={`Slide ${currentIndex}`}
    className="object-fill w-2/5 h-1/5" 
    quality={100} 
  />

  <button
    onClick={goToPreviousSlide}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-30"
  >
    <GrPrevious />

  </button>

  <button
    onClick={goToNextSlide}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-30"
  >
    <GrNext />
  </button>
</div>
  );
};

export default SlideShow;
