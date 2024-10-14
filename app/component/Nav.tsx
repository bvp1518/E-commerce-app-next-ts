// import { Handmade1, Handmade2, Handmade3 } from '@/public/images';
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Nav() {
  return (
    <>
      <div>
        <nav className='bg-gray-800 p-4'>
          <div className='container mx-auto flex justify-between items-center'>
            <div className='flex items-start'>
              <img src="./images/logo.png" alt="purse" className='h-11 w-auto mr-2' />
              <span className='text-white font-bold text-3xl'>Handmade Bags</span>
            </div>
            <ul className='flex space-x-6 text-white'>
              <li className='hover:text-gray-300 cursor-pointer'>Home</li>
              <li className='hover:text-gray-300 cursor-pointer'>New</li>
              <li className='hover:text-gray-300 cursor-pointer'>Shopping Bags</li>
              <li className='hover:text-gray-300 cursor-pointer'>Backpack</li>
              <li className='hover:text-gray-300 cursor-pointer'>Cosmetic Bags</li>
              <li className='hover:text-gray-300 cursor-pointer'>About Us</li>
            </ul>
            <div className='flex space-x-6 items-center'>
              <MdOutlineShoppingCart className='text-white text-2xl'  />
            </div>
          </div>
        </nav>
      </div>
     
      {/* <main>
        <div className='bg-stone-100 flex border border-red-500 h-80'>
          <div className='flex-1 p-5'>
          <h2 className='text-5xl mb-5 text-blue-800'>New Collection</h2>
          <p className='font-bold mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore deleniti a ex recusandae nulla numquam, explicabo laboriosam sit mollitia nobis, consectetur vitae corrupti optio amet, modi hic magni dignissimos.
            </p>
            <button className='bg-green-800 font-bold text-white py-2 px-4'>New Collection</button>
          </div>
          <div className='flex-1 flex items-center justify-center'> 
            <Image src={Handmade3} className='h-full w-auto object-cover' alt="Handmade" />
          </div>
        </div>
      </main> */}
    </>
  );
}
