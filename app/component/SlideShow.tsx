"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image'; 
import { Showimage2, Showimage3 } from '../../public/images'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import styles from './SlideShow.module.css'

const SlideShow: React.FC = () => {
  const SlideImages: StaticImageData[] = [Showimage2, Showimage3];
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideImages.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SlideImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slideshow}>
      <Image
        src={SlideImages[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={styles.slideshowImage} 
        quality={100} 
      />

      <button
        onClick={goToPreviousSlide}
        className={`${styles.slideshowButton} ${styles.slideshowButtonLeft}`}
      >
        <GrPrevious />
      </button>

      <button
        onClick={goToNextSlide}
        className={`${styles.slideshowButton} ${styles.slideshowButtonRight}`}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default SlideShow;
