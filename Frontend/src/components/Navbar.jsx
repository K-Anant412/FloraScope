import React from 'react'
import { SiOverleaf } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className='shrink-0 h-15 w-full md:p-6 p-3 md:border-r-2 border-b-2 flex items-center bg-white sticky'>

            {/* ---Logo visible only for desktop view--- */}
            <h1 className='shrink-0 w-full flex md:w-fit h-full p-2 text-3xl font-semibold font-["Fredoka"] items-center md:justify-center text-gray-600'>
              Fl
              <SiOverleaf className='text-[26px] text-gray-700' />
              raSc
              <IoSearch className='text-[24px] text-gray-700 relative top-1 font-extrabold rotate-90'/>
              pe
            </h1>

            {/* ---Navigation Menu--- */}
            <ul className='shrink-0 h-full w-fit p-2 hidden md:flex items-center justify-center mt-2 ml-6 gap-3'>
              <li className='min-w-20 h-fit py-1 flex items-center justify-center text-[18px] font-["nunito"] px-2 border rounded-2xl border-white font-bold text-gray-600 transition-all duration-150 hover:text-gray-700 hover:border-gray-200 hover:bg-gray-200'>
                Uploads
              </li>
              <li className='min-w-20 h-fit py-1 flex items-center justify-center text-[18px] font-["nunito"] px-2 border rounded-2xl border-white font-bold text-gray-600 transition-all duration-150 hover:text-gray-700 hover:border-gray-200 hover:bg-gray-200'>
                Profile
              </li>
            </ul>

            <div className='hidden shrink-0 h-fit p-2 w-[72%] md:flex items-center justify-end gap-3'>
              <button 
                className='h-fit min-w-20 border text-[19px] font-["nunito"] font-bold text-gray-700 mt-2 rounded-2xl transition-all duration-200 hover:bg-gray-200'
              >
                Log in
              </button>

              <button 
                className='h-fit min-w-20 border text-[19px] font-["nunito"] font-bold text-gray-700 mt-2 rounded-2xl transition-all duration-200 hover:bg-gray-200'
              >
                Sig up
              </button>
            </div>

            <button className='md:hidden shrink-0 flex items-center justify-center h-fit w-fit p-1 relative right-7 top-0.5'>
              <CiMenuKebab className='text-2xl' />
            </button>

    </nav>
  )
}

export default Navbar