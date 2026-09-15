import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Middle from '../components/Middle'
import Profile from '../pages/Profile'
import Homepage from '../components/Homepage'
import homebg from '../assets/Desktop_image/homebg.png'
import { FaLeaf } from "react-icons/fa6";
import PlantInfo from './PlantInfo'
import wp from '../assets/Desktop_image/wp.png'
import { SiOverleaf } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import FeatureCard from '../components/FeatureCard'

// Images
import camera from '../assets/Desktop_image/camera_icon.png'
import info from'../assets/Desktop_image/info_icon.png'
import toxic from'../assets/Desktop_image/toxic_icon.png'
import features from '../assets/Desktop_image/features.png'
import plant from '../assets/Desktop_image/plant_icon.png'
import care from '../assets/Desktop_image/care_icon.png'

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

              <div className='shrink-0 p-4 w-full md:h-65 overflow-x-auto md:overflow-hidden flex items-center justify-center gap-30'>

                {/*  features:  */}
                <FeatureCard image={camera} title={"Plant Identification"} text={"Snap a photo and get accurate plant details instantly."} />
                <FeatureCard image={info} title={"Care Guide"} text={"Get personalized tips for watering, sunlight, and more."} />
                <FeatureCard image={toxic} title={"Toxicity Info"} text={"Know if a plant is safe for pets and hemans."} />
                
              </div>

              <div className='relative shrink-0 p-4 w-full md:h-85 border-2 rounded-3xl bg-[#A8D58D] flex flex-col gap-3'>
                <img src={features} alt="3" className='h-full w-fit absolute right-2.5 top-0' />
                <h1 className='shrink-0 w-full flex flex-col text-3xl font-["nunito"] font-bold text-[#2b532a]'>
                 How It Works?
                  <p className='text-xl font-normal flex gap-1'>Just a few simple steps to get started.</p>
                </h1>

                <div className='shrink-0 p-4 relative -top-5 w-full md:h-65 overflow-x-auto md:overflow-hidden flex items-center gap-30'>
                  
                  <FeatureCard
                    sr={true}
                    sr_num={"1."} 
                    image={camera} 
                    title={"Upload / Take Photo"} 
                    text={"Choose an image from gallery or take a new one."} 
                  />

                  <FeatureCard
                    sr={true}
                    sr_num={"2."} 
                    image={plant} 
                    title={"Get Identification"} 
                    text={"We will analyze the image & fint the best match for your plant."} 
                  />

                  <FeatureCard
                    sr={true}
                    sr_num={"3."} 
                    image={care} 
                    title={"Care Guide"} 
                    text={"View detailed information and care tips for your plant."} 
                  />

                </div>

              </div>

            </div>
            
            <div className='w-full min-h-screen bg-[#E8F5E9] flex flex-col p-10 gap-4'>

              <div className='shrink-0 p-4 w-full md:h-85 border-2 rounded-3xl border-[#A8D58D] flex flex-col gap-3'>

                <h1 className='shrink-0 w-full flex flex-col text-3xl font-["nunito"] font-bold text-[#2b532a]'>
                 Why Plants Matter?
                  <p className='text-xl font-normal flex gap-1'>Plants do more than just look good. They make life better.</p>
                </h1>

                <div className='border-2 w-full flex-1 relative'>

                  <img src={wp} alt="image" className='md:flex hidden h-full absolute right-5 top-0' />

                </div>

              </div>

              <div className='shrink-0 p-4 px-50 w-full md:h-60  rounded-3xl bg-[#A8D58D] flex items-center gap-50'>

                <h1 className='shrink-0 w-[30%] flex flex-col h-full justify-center text-4xl font-["nunito"] font-bold text-[#2b532a]'>
                 Ready to discover your plant?
                  <p className='text-xl font-normal flex gap-1'>Join thousands of plant lovers and make your green journey easier</p>
                </h1>

                <button className='text-2xl font-bold font-["nunito"] w-fit h-fit py-2 px-6 border-2 rounded-4xl transition-all duration-300 hover:text-gray-700 hover:bg-[#E8F5E9] '>
                  Identify Now
                </button>

              </div>

                <h1 className='border shrink-0 w-full flex md:w-fit h-full p-2 text-3xl font-semibold font-["Fredoka"] items-center md:justify-center text-gray-600'>
                    Fl
                    <SiOverleaf className='text-[26px] text-gray-700' />
                    raSc
                    <IoSearch className='text-[24px] text-gray-700 relative top-1 font-extrabold rotate-90'/>
                    pe
                </h1>

            </div>
        </section>
    </>
  )
}

export default Home