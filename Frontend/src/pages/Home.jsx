import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { CiLocationArrow1 } from "react-icons/ci";
const Home = () => {
  return (
    <>
        <section className='z-50 w-full h-full flex flex-col overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>
            {/*  ---Navbar--- */}
            <Navbar />
          <div className='w-full min-h-full h-fit md:p-10 flex flex-col items-center '>
            <HeroSection />

            {/*  Middle body content */}
            <div className='w-full min-h-full flex flex-col md:flex-row items-center justify-center border border-black relative md:-top-20 -top-10'>

              <div className='w-full h-full flex items-center justify-center border gap-3'>

                <div className='flex flex-col md:max-w-[50%] w-full md:h-fit h-full pt-10 md:pt-0 gap-2 border'>
                  <h1 className='w-fit h-fit font-["nunito"] font-bold text-2xl md:text-4xl flex items-center justify-center gap-3'>
                    <CiLocationArrow1 className='rotate-45' />
                    Discover your plant.
                  </h1>
                  <h1 className='hidden w-fit mb-4 h-fit font-["nunito"] font-bold text-2xl md:text-4xl md:flex items-center justify-center gap-3'>
                    <CiLocationArrow1 className='rotate-45' />
                    Learn how to help it thrive.
                  </h1>

                    <p className='w-full md:max-w-[70%] h-fit text-xl px-3'>           
                      Simply <span className="font-bold">upload or capture a photo</span>, and get detailed information about the plant, including its <span className="font-bold">name, species, and characteristics</span> and more. 
                    </p>
                    <p className='hidden md:flex w-full md:max-w-[70%] h-fit text-xl px-3'>
                      Beyond identification, explore personalized care guidance with helpful tips on watering, sunlight, soil, temperature, and other essential needs to help your plants grow healthy and thrive.
                    </p>
                </div>

                <div className='border md:flex hidden w-[30%] h-full border-black'>

                </div>
              </div>

            </div>
          </div>

        </section>
    </>
  )
}

export default Home