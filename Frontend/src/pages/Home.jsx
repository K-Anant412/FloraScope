import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Middle from '../components/Middle'
import Profile from '../pages/Profile'
import homebg from '../assets/Desktop_image/homebg.png'
import { FaCameraRetro } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import PlantInfo from './PlantInfo'
const Home = () => {

  const [userProfile, setUserProfile] = useState(false);
  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState([]);

  return (
    <>
        <section className='hidden z-50 w-full h-full flex-col items-center overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>
            {/*  ---Navbar--- */}
            
          <div className='w-full min-h-full h-fit md:p-10 flex flex-col items-center'>
            {!userProfile ? (
              <>
                <HeroSection setIsPlant={setIsPlant} setPlantDetails={setPlantDetails} />
                <Middle />
                { isPlant && 
                  <PlantInfo plantDetails={plantDetails} /> 
                }
              </>
            ) : (
              <Profile />
            )
            }

          </div>

        </section>

        <section className='w-screen h-screen bg-amber-100 overflow-x-hidden overflow-y-auto scrollbar-none'>
            {/*  New Home Page */}
            <div className='w-full min-h-screen bg-amber-50 flex flex-col items-center md:bg-center md:bg-cover' style={{backgroundImage: `url(${homebg})`}}>
              <Navbar setUserProfile={setUserProfile}/>

              <div className='w-full flex-1 flex flex-col justify-center relative top-20 left-22'>

                {/*  Sub titles */}
                <h1 className='relative left-18 -top-25 text-[#4F9D4D] shrink-0 md:w-[25%] h-fit p-2 border flex items-center justify-center gap-2 rounded-3xl text-xl font-semibold font-["nunito"] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                  <p>Discover</p>
                    <GoDotFill />
                  <p>Identify</p>
                    <GoDotFill />
                  <p>Grow</p>
                </h1>

                {/*  Hero Text */}
                <div className='w-[50%] h-fit p-3 flex flex-col relative left-10 -top-25 gap-6'>
                  <h1 className='w-[80%] text-[#2b532a] h-fit text-4xl md:text-6xl font-semibold font-["Fredoka"] md:pl-5'>
                    Know Your Plants Better
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

            </div>

            <div className='w-full min-h-screen bg-[#E8F5E9]'>

            </div>
            
        </section>
    </>
  )
}

export default Home