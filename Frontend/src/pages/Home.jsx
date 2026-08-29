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

              <div className='w-full h-full flex items-center justify-center border gap-12'>

                <div className=' relative flex flex-col items-center md:max-w-[50%] w-full md:h-fit h-full pt-10 md:pt-0 gap-2 '>
                          {/*  background image */}
                          <div className='md:hidden flex h-full w-full absolute top-0 bg-center bg-cover z-10' style={{backgroundImage: "url('/Desktop_image/plant_care.jpg')"}}></div>

                  <div className='z-30 w-[90%] md:w-full h-fit border flex flex-col gap-3 mb-6 rounded-2xl bg-black/40 py-3 px-4 md:py-7 backdrop-blur-[2px] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>

                    <h1 className='z-30 text-white w-fit h-fit font-["nunito"] font-bold text-2xl md:text-4xl flex items-center justify-center gap-3'>
                      <CiLocationArrow1 className='rotate-45' />
                      Discover your plant.
                    </h1>
                      <p className='z-30 md:pl-12 text-white w-full md:max-w-[70%] h-fit text-xl px-3'>           
                        Simply <span className="font-bold">upload or capture a photo</span>, and get detailed information about the plant, including its <span className="font-bold">name, species, and characteristics</span> and more. 
                      </p>

                  </div>

                  <div className='z-30 w-[90%] md:w-full h-fit border flex flex-col gap-3 mb-6 rounded-2xl bg-black/40 py-3 px-4 md:py-7 backdrop-blur-[2px] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                  
                    <h1 className='z-30 text-white w-fit h-fit font-["nunito"] font-bold text-2xl md:text-4xl flex items-center justify-center gap-3 '>
                      <CiLocationArrow1 className='rotate-45' />
                      Learn how to help it thrive.
                    </h1>
                      <p className='z-30 md:pl-12 text-white flex w-full md:max-w-[70%] h-fit text-xl px-3'>
                        Beyond identification, explore personalized care guidance with helpful tips on watering, sunlight, soil, temperature, and other essential needs to help your plants grow healthy and thrive.
                      </p>

                  </div>

                </div>

                <div className='border md:flex hidden w-[30%] h-[70%] bg-center bg-cover rounded-3xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]' style={{backgroundImage: "url('/Desktop_image/plant_care.jpg')"}}>
                    {/* <img src="/Desktop_image/plant_care.jpg" alt="image" /> */}
                </div>
                <div className='border absolute right-10 top-10 md:flex hidden w-[18%] h-[38%] border-white/40 bg-center bg-cover rounded-3xl shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]' style={{backgroundImage: "url('/Desktop_image/plant_care1.jpg')"}}></div>
              </div>

            </div>
          </div>

        </section>
    </>
  )
}

export default Home