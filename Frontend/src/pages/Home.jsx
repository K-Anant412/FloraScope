import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Middle from '../components/Middle'
import Profile from '../pages/Profile'
import Homepage from '../components/Homepage'
import homebg from '../assets/Desktop_image/homebg.png'
import { FaLeaf } from "react-icons/fa6";
import PlantInfo from './PlantInfo'
import screen1 from '../assets/Desktop_image/screen1.png'
import screen2 from '../assets/Desktop_image/screen2.png'
import screen3 from '../assets/Desktop_image/screen3.png'
import screen4 from '../assets/Desktop_image/screen4.png'
import wp from '../assets/Desktop_image/wp.png'

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
            <div className='w-full min-h-screen bg-amber-50 flex flex-col items-center md:bg-center md:bg-cover' style={{backgroundImage: `url(${homebg})`}}>
              <Navbar setUserProfile={setUserProfile}/>
              
              {/*  New Home Page */}
              <Homepage />

            </div>

            <div className='w-full min-h-screen bg-[#E8F5E9] flex flex-col p-10 gap-4'>

              <h1 className='shrink-0 w-full flex flex-col text-4xl font-["nunito"] font-bold text-[#2b532a]'>
                Our Features
                <p className='text-2xl font-normal flex gap-1'>Everything you need to understand and care for your Plant <FaLeaf /></p>
              </h1>

              <div className='shrink-0 p-4 w-full md:h-65 border overflow-x-auto md:overflow-hidden flex items-center justify-center gap-10'>

                <div className='h-full w-[18%] border-2 rounded-3xl flex flex-col items-center bg-center bg-cover' style={{backgroundImage: `url(${screen1})`}}></div>
                <div className='h-full w-[18%] border-2 rounded-3xl flex flex-col items-center bg-center bg-cover' style={{backgroundImage: `url(${screen2})`}}></div>
                <div className='h-full w-[18%] border-2 rounded-3xl flex flex-col items-center bg-center bg-cover' style={{backgroundImage: `url(${screen3})`}}></div>
                <div className='h-full w-[18%] border-2 rounded-3xl flex flex-col items-center bg-center bg-cover' style={{backgroundImage: `url(${screen4})`}}></div>

              </div>

              <div className='shrink-0 p-4 w-full md:h-85 border-2 rounded-3xl bg-[#A8D58D] flex flex-col gap-3'>

                <h1 className='shrink-0 w-full flex flex-col text-3xl font-["nunito"] font-bold text-[#2b532a]'>
                 How It Works?
                  <p className='text-xl font-normal flex gap-1'>Just a few simple steps to get started.</p>
                </h1>

              </div>

            </div>
            
            <div className='w-full min-h-screen bg-[#E8F5E9] flex flex-col p-10 gap-4'>

              <div className='shrink-0 p-4 w-full md:h-85 border-2 rounded-3xl bg-[#A8D58D] flex flex-col gap-3'>

                <h1 className='shrink-0 w-full flex flex-col text-3xl font-["nunito"] font-bold text-[#2b532a]'>
                 Why Plants Matter?
                  <p className='text-xl font-normal flex gap-1'>Plants do more than just look good. They make life better.</p>
                </h1>

                <div className='border-2 w-full flex-1 relative'>

                  <img src={wp} alt="image" className='md:flex hidden h-full absolute right-5 top-0' />

                </div>

              </div>

              <div className='shrink-0 p-4 px-50 w-full md:h-60 border-2 rounded-3xl bg-[#A8D58D] flex items-center gap-50'>

                <h1 className='shrink-0 w-[30%] flex flex-col h-full border-2 justify-center text-4xl font-["nunito"] font-bold text-[#2b532a]'>
                 Ready to discover your plant?
                  <p className='text-xl font-normal flex gap-1'>Join thousands of plant lovers and make your green journey easier</p>
                </h1>

                <button className='text-2xl font-bold font-["nunito"] w-fit h-fit py-2 px-6 border-2 rounded-4xl'>
                  Identify Now
                </button>

              </div>


            </div>
        </section>
    </>
  )
}

export default Home