import { Purse1, Purse2, Purse3 } from '@/public/images';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

function Card() {
  const purseData: StaticImageData[] = [Purse1, Purse2, Purse3];

  return (
    <div>
      {purseData.map((item, index) => (
        <div key={index}>
          <Image
            src={item}
            className='h-full w-auto object-cover transition-transform duration-2000 ease-in-out'
            alt={`purse-${index}`}
          />
          <p>{`purse-${index + 1}`}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
