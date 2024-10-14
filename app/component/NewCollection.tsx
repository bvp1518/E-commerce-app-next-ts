
'use client'
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import handmade1 from '@/public/images/handmade1.png';
import handmade2 from '@/public/images/handmade2.png';
import handmade3 from '@/public/images/handmade3.png';
import Link from 'next/link';

const images: StaticImageData[] = [handmade1, handmade2, handmade3];

const NewCollection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className='bg-stone-100 flex border border-gray-500 h-80'>
        <div className='flex-1 p-5'>
          <h2 className='text-5xl mb-5 text-blue-800'>New Collection</h2>
          <p className='font-bold mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore deleniti a ex recusandae nulla numquam, explicabo laboriosam sit mollitia nobis, consectetur vitae corrupti optio amet, modi hic magni dignissimos.
          </p>
          <button className='bg-green-800 font-bold text-white py-2 px-4'>
          <Link href="/new">New Collection</Link>
            </button>
        </div>
        <div className='flex-1 flex items-center justify-center'>
        
          <Image
            src={images[currentIndex]}
            className='h-full w-auto object-cover transition-transform duration-2000 ease-in-out'
            alt='Handmade'
          />
        </div>
      </div>
    </main>
  );
}

export default NewCollection;
