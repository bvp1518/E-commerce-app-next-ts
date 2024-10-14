
// "use client"

// import React, { useState } from 'react';
// import Image, { StaticImageData } from 'next/image'; 
// import { Showimage2, Showimage3 } from '../../public/images';  

// const SlideShow: React.FC = () => {
//   const SlideImages: StaticImageData[] = [Showimage2, Showimage3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle next slide
//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideImages.length);
//   };

//   // Handle previous slide
//   const goToPreviousSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? SlideImages.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div
//   className="relative mx-16 my-16 overflow-hidden"
//   style={{ width: '70rem', height: '20rem' }} // Use your custom values here
// >

//    {/* Only show the current image */}
//       <div className="relative w-full h-full">
//         <Image
//           src={SlideImages[currentIndex]}
//           alt={`Slide ${currentIndex}`}
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Buttons for manual control */}
//       <button
//         onClick={goToPreviousSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white"
//       >
//         Previous
//       </button>

//       <button
//         onClick={goToNextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default SlideShow;


// "use client"

// import React, { useState } from 'react';
// import Image, { StaticImageData } from 'next/image'; 
// import { Showimage2, Showimage3 } from '../../public/images';  

// const SlideShow: React.FC = () => {
//   const SlideImages: StaticImageData[] = [Showimage2, Showimage3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle next slide
//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideImages.length);
//   };

//   // Handle previous slide
//   const goToPreviousSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? SlideImages.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="absolute z-20 w-full h-full mx-14 my-14">
//       <div className="relative w-full h-full">
//         {/* Ensure container has fixed width/height */}
//         <Image
//           src={SlideImages[currentIndex]}
//           alt={`Slide ${currentIndex}`}
//           layout="fill"  // Fill the container
//           objectFit="cover"  // Maintain aspect ratio, cover the entire container
//           className="w-full h-full object-cover" // Add explicit width/height classes
//           quality={100} // Increase image quality if needed
//         />
//       </div>

//       {/* Buttons for manual control */}
//       <button
//         onClick={goToPreviousSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white"
//       >
//         Previous
//       </button>

//       <button
//         onClick={goToNextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default SlideShow;


"use client"

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image'; 
import { Showimage2, Showimage3 } from '../../public/images';  

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
    // <div className="relative mx-16 my-16 flex justify-center h-96 w-screen  overflow-hidden border border-red-500">
    //   {/* <div className="absolute w-1000 h-2000"> */}
    //     <Image
    //       src={SlideImages[currentIndex]}
    //       alt={`Slide ${currentIndex}`}
          
    //      className=" object-fill"
 
    //     //   quality={100} // Increase image quality if needed
    //     />
    //   {/* </div> */}

    //   {/* <div className="absolute z-20 w-full h-full"> */}
    //     {/* Any overlay content like text or buttons can go here */}
    //   {/* </div> */}

    //   <button
    //     onClick={goToPreviousSlide}
    //     className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-30"
    //   >
    //     Previous
    //   </button>

    //   <button
    //     onClick={goToNextSlide}
    //     className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-30"
    //   >
    //     Next
    //   </button>
    // </div>

    <div className="relative mx-16 my-16  flex justify-center w-100 h-1/5 overflow-hidden border border-red-500">
  <Image
    src={SlideImages[currentIndex]}
    alt={`Slide ${currentIndex}`}
    className="object-fill w-2/5 h-1/5" // Updated class names
    // layout="fill" // Make the image fill the parent div
    quality={100} // Increase image quality if needed
  />

  <button
    onClick={goToPreviousSlide}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-30"
  >
    Previous
  </button>

  <button
    onClick={goToNextSlide}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white z-30"
  >
    Next
  </button>
</div>

  );
};

export default SlideShow;
