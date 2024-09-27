import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-full h-[30px] sticky top-[0px]'>
        <div className='flex justify-center items-center bg-gray-300'>
            <ul className="flex space-x-4">
                <li>
                    <Link href='/'><p>Home</p></Link>
                </li>
                <li>
                     <Link href='/about'><p>About us</p></Link>
                </li>
                <li>
                     <Link href='/services'><p>Services</p></Link>
                </li>
                <li>
                     <Link href='/contacts'><p>Contact us</p></Link>
                </li>
            </ul>    
        </div>
    </div>
    </>
  );
}

export default Navbar;