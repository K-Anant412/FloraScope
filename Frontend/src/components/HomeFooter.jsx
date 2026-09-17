import React from 'react'
import footer from '../assets/Desktop_image/footer.png'
import wp from '../assets/Desktop_image/wp.png'
import { SiOverleaf } from "react-icons/si";
import { IoSearch } from "react-icons/io5";

const HomeFooter = () => {
  return (
        <div className='z-50 w-full p-3 min-h-screen bg-[#E8F5E9] flex flex-col md:p-10 md:gap-4 relative md:top-0 -top-25 pt-3'>

              <div className='shrink-0 md:p-4 md:px-50 w-full md:h-60  rounded-3xl flex md:flex-row flex-col items-center m:gap-50 gap-4 p-5 bg-center bg-cover' style={{backgroundImage: `url(${footer})`}}>

                <h1 className='shrink-0 md:w-[30%] w-full flex flex-col h-full justify-center text-3xl md:text-4xl font-["nunito"] font-bold text-[#E8F5E9] '>
                 Ready to discover your plant?
                  <p className='text-[16px] md:text-xl md:mt-3 md:font-normal text-[#4F9D4D] flex gap-1'>Join thousands of plant lovers and make your green journey easier.</p>
                </h1>

                <button className='text-xl text-[#E8F5E9]  md:text-2xl font-bold font-["nunito"] w-fit h-fit py-2 px-6 border-2 rounded-4xl transition-all duration-300 hover:text-gray-700 hover:bg-[#E8F5E9] '>
                  Identify Now
                </button>

              </div>

                <img src={wp} alt="image" className='flex w-full absolute top-68 left-0 md:w-40 md:left-50' />
                
                <h1 className='shrink-0 w-full flex md:w-fit h-full md:p-2 py-6 text-3xl font-semibold font-["Fredoka"] items-center justify-center text-gray-600 relative md:top-10 '>
                    Fl
                    <SiOverleaf className='text-[26px] text-gray-700' />
                    raSc
                    <IoSearch className='text-[24px] text-gray-700 relative top-1 font-extrabold rotate-90'/>
                    pe
                </h1>


        </div>
  )
}

export default HomeFooter