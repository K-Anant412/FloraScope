import React, { useState, useEffect } from 'react'
import { SiOverleaf } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

  const Navbar = ({setUserProfile}) => {
    const [isMenu, setIsMenu] = useState(false);
    const handleMenu = () => {
      setIsMenu((prev) => !prev)
    };

    const handleProfile = () =>{
      setUserProfile((prev) => !prev)
    };

    return (
      <nav className='relative shrink-0 h-15 w-full md:p-6 p-3 md:border-r-2 border-b-2 flex items-center bg-white md:mt-3 md:w-[95%] md:rounded-3xl transition-all duration-200 '>

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
                <NavLink
                  to='/plantinfo'
                  className='min-w-20 h-fit py-1 flex items-center justify-center text-[18px] font-["nunito"] px-2 border rounded-2xl border-white font-bold text-gray-600 transition-all duration-150 hover:text-gray-700 hover:border-gray-200 hover:bg-gray-200'
                  >
                  Uploads
                </NavLink>
                <li
                  onClick={handleProfile} 
                  className='min-w-20 h-fit py-1 flex items-center justify-center text-[18px] font-["nunito"] px-2 border rounded-2xl border-white font-bold text-gray-600 transition-all duration-150 hover:text-gray-700 hover:border-gray-200 hover:bg-gray-200'
                  >
                  Profile
                </li>
              </ul>

              <div className='hidden shrink-0 h-fit p-2 w-[72%] md:flex items-center justify-end gap-3'>
                <NavLink
                  to='/login' 
                  className='h-fit min-w-20 border flex items-center justify-center text-[19px] font-["nunito"] font-bold text-gray-700 rounded-2xl transition-all duration-200 hover:bg-gray-200'
                >
                  Log in
                </NavLink>

                <NavLink
                  to='/register' 
                  className='h-fit min-w-20 border flex items-center justify-center text-[19px] font-["nunito"] font-bold text-gray-700 rounded-2xl transition-all duration-200 hover:bg-gray-200'
                >
                  Sig up
                </NavLink>
              </div>

              <button
                onClick={handleMenu} 
                className='md:hidden shrink-0 flex items-center justify-center h-fit w-fit p-1 relative right-7 top-0.5 cursor-pointer'>
                <CiMenuKebab className='text-2xl' />
              </button>

              {
                isMenu && 
                <div className='md:hidden absolute flex w-[30%] h-fit min-h-20 rounded-2xl rounded-r-none rounded-tl-none bg-white top-14 right-0 z-20 flex-col items-center justify-center gap-3 overflow-hidden transition-all duration-300 '>
                  
                  <button className='text-[19px] font-["nunito"] font-semibold text-gray-600 flex items-center justify-center w-full transition-all duration-200 hover:bg-gray-200 py-1'>Upload</button>
                  <button className='text-[19px] font-["nunito"] font-semibold text-gray-600 flex items-center justify-center w-full transition-all duration-200 hover:bg-gray-200 py-1'>Profile</button>
                  <button className='text-[19px] font-["nunito"] font-semibold text-gray-600 flex items-center justify-center w-full transition-all duration-200 hover:bg-gray-200 py-1'>Sign-up</button>
                  <button className='text-[19px] font-["nunito"] font-semibold text-gray-600 flex items-center justify-center w-full transition-all duration-200 hover:bg-gray-200 py-1'>Login</button>

                </div>
              }

      </nav>
    )
}

export default Navbar