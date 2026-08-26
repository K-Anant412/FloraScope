import React from 'react'
import { SiOverleaf } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
const Home = () => {
  return (
    <>
        <section className='z-50 w-full h-full flex flex-col md:flex-row overflow-x-hidden md:overflow-y-hidden overflow-y-scroll scrollbar-none bg-[#E8F5E9]'>

          <nav className='shrink-0 md:h-full h-15 md:w-[20%] w-full md:p-6 p-3 md:border-r-2 border-b-2 flex md:flex-col flex-row items-center bg-white'>

            <h1 className='md:flex hidden w-full h-fit p-2 text-3xl font-semibold font-["Fredoka"] items-center justify-center'>
              Fl
              <SiOverleaf className='text-[26px]' />
              raSc
              <IoSearch className='text-[24px] relative top-1 font-extrabold rotate-90'/>
              pe
            </h1>

            <ul className='md:flex'>

            </ul>

          </nav>

        </section>
    </>
  )
}

export default Home