// import { Handmade1, Handmade2, Handmade3 } from '@/public/images';
import Link from 'next/link';
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
              <li className='hover:text-gray-300 cursor-pointer'>
                <Link href="/">Home</Link>
              </li>
              <li className='hover:text-gray-300 cursor-pointer'>
                <Link href="/new">New</Link>
              </li>
              <li className='hover:text-gray-300 cursor-pointer'>
                <Link href="/shopping-bags">Shopping Bags</Link>
              </li>
              <li className='hover:text-gray-300 cursor-pointer'>
                <Link href="/backpack">Backpack</Link>
              </li>
              <li className='hover:text-gray-300 cursor-pointer'>
                <Link href="/cosmetic-bags">Cosmetic Bags</Link>
              </li>
              <li className='hover:text-gray-300 cursor-pointer'>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>

            <div className='flex space-x-6 items-center'>
              <MdOutlineShoppingCart className='text-white text-2xl' />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
