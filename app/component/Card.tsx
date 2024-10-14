
// import { Purse1, Purse2, Purse3, Purse4, Purse5, Purse6, Purse7, Purse8, Purse9, Purse10, Purse11, Purse12, Purse13, Purse14, Purse15, Purse16 } from '@/public/images';
// import Image, { StaticImageData } from 'next/image';
// import React from 'react';

// function Card() {
//   const purseData: StaticImageData[] = [Purse1, Purse2, Purse3, Purse4, Purse5, Purse6, Purse7, Purse8,
//     Purse9, Purse10, Purse11, Purse12, Purse13, Purse14, Purse15, Purse16];

//   return (
//     <div className="grid grid-cols-4 gap-4 border border-green-300 my-6 bg-color bg-stone-100 ">
//       {purseData.map((item, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <Image
//             src={item}
//             className="h-10px w-auto object-cover transition-transform duration-2000 ease-in-out"
//             alt={`purse-${index}`}
//           />
//           <p className="text-center mt-2">{`purse-${index + 1}`}</p>
//         </div>
//       ))}
//       </div>
//   );
// }

// export default Card;


import { Purse1, Purse2, Purse3, Purse4, Purse5, Purse6, Purse7, Purse8, Purse9, Purse10, Purse11, Purse12, Purse13, Purse14, Purse15, Purse16 } from '@/public/images';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

function Card() {
  const purseData: StaticImageData[] = [Purse1, Purse2, Purse3, Purse4, Purse5, Purse6, Purse7, Purse8,
    Purse9, Purse10, Purse11, Purse12, Purse13, Purse14, Purse15, Purse16];

  return (
    <>
    <div className="grid grid-cols-4 gap-4 my-16 mx-16 ">
      {purseData.map((item, index) => (
        <div key={index} className="flex flex-col items-center bg-stone-100 p-4 rounded shadow">
          <Image
            src={item}
            className="h-[150px] w-auto object-cover transition-transform duration-2000 ease-in-out hover:scale-105"
            alt={`purse-${index}`}
          />
          <p className="text-center mt-2">{`purse-${index + 1}`}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Card;
