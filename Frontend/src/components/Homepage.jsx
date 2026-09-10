import React, { useState, useEffect } from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaLeaf } from "react-icons/fa6";

const Homepage = () => {

  return (
        <div className='w-full flex-1 flex flex-col justify-center relative top-20 left-22'>
            {/*  Sub titles */}
            <h1 className='relative left-18 -top-25 text-[#4F9D4D] shrink-0 md:w-[25%] h-fit p-2 border flex items-center justify-center gap-2 rounded-3xl text-xl font-semibold font-["nunito"] bg-[#A8D58D] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                <p>Discover</p>
                <GoDotFill />
                <p>Identify</p>
                <GoDotFill />
                <p>Grow</p>
            </h1>

            {/*  Hero Text */}
            <div className='w-[50%] h-fit p-3 flex flex-col relative left-10 -top-25 gap-6'>
                <h1 className=' w-[80%] text-[#2b532a] h-fit text-4xl md:text-6xl font-semibold font-["Fredoka"] md:pl-5'>
                    Know Your Plants Better
                    <FaLeaf />
                </h1>

                <p className='text-gray-600 font-["nunito"] w-[60%] pl-4 text-xl '>
                Take a photo, identify your plant, and get personalized care tips. Your green companion for a healthier, happier graden.
                </p>

                <button className='flex relative left-5 items-center justify-center w-fit h-fit p-2 border text-2xl gap-2 rounded-3xl px-6 font-bold pb-3 bg-[#4F9D4D] text-white transition-all duration-300 cursor-pointer hover:bg-[#3b7739] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                <FaCameraRetro />
                Start Identifying 
                <FaArrowRight className='relative top-1' />
                </button>

            </div>

        </div>
  )
}

export default Homepage