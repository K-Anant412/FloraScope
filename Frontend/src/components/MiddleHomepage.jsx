import React from 'react'
import FeatureCard from './FeatureCard'
import { FaLeaf } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import camera from '../assets/Desktop_image/camera_icon.png'
import info from'../assets/Desktop_image/info_icon.png'
import toxic from'../assets/Desktop_image/toxic_icon.png'
import features from '../assets/Desktop_image/features.png'
import plant from '../assets/Desktop_image/plant_icon.png'
import care from '../assets/Desktop_image/care_icon.png'
import features_phone from '../assets/Phone_image/features_phome.png'


const MiddleHomepage = () => {
  return (
        <div className='relative md:top-0 -top-25 w-full min-h-screen bg-[#E8F5E9] flex flex-col md:p-10 p-3 gap-4'>

              <h1 className='shrink-0 w-full flex flex-col text-3xl md:text-4xl font-["nunito"] font-bold text-[#2b532a]'>
                Our Features
                <p className='md:text-2xl text-[18px] md:font-normal font-semibold flex gap-1'>Everything you need to understand and care for your Plant <FaLeaf className='md:flex hidden' /></p>
              </h1>

              {/*  Features section for desktop only */}
              <div className=' hidden shrink-0 md:p-4 w-full h-65 md:overflow-x-auto overflow-y-auto md:overflow-hidden scrollbar-none md:flex md:flex-row flex-col items-center justify-center gap-3 md:gap-30'>

                {/*  features:  */}
                <FeatureCard image={camera} title={"Plant Identification"} text={"Snap a photo and get accurate plant details instantly."} />
                <FeatureCard image={info} title={"Care Guide"} text={"Get personalized tips for watering, sunlight, and more."} />
                <FeatureCard image={toxic} title={"Toxicity Info"} text={"Know if a plant is safe for pets and hemans."} />
                
              </div>

              {/*  Features section for mobile only */}
              <div className='md:hidden shrink-0 p-2 gap-5 flex w-full h-85 flex-col items-center justify-center'>

                <div className='w-full h-fit border p-2 rounded-3xl flex flex-col border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                  <h1 className='w-full text-xl font-bold font-["nunito"] text-[#2b532a]'>
                    1. Plant Identification
                  </h1>
                  <p className='font-semibold font-["nunito"] text-[#4F9D4D]'>
                    Snap a photo and get accurate plant details instantly. 
                  </p>
                </div>

                <div className='w-full h-fit border p-2 rounded-3xl flex flex-col border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                  <h1 className='w-full text-xl font-bold font-["nunito"] text-[#2b532a]'>
                    2. Care Guide
                  </h1>
                  <p className='font-semibold font-["nunito"] text-[#4F9D4D]'>
                    Get personalized tips for watering, sunlight, and more. 
                  </p>
                </div>

                <div className='w-full h-fit border p-2 rounded-3xl flex flex-col border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                  <h1 className='w-full text-xl font-bold font-["nunito"] text-[#2b532a]'>
                    3. Toxicity Info
                  </h1>
                  <p className='font-semibold font-["nunito"] text-[#4F9D4D]'>
                    Know if a plant is safe for pets and hemans.
                  </p>
                </div>

              </div>

              <div className='relative shrink-0 p-4 w-full h-120  border-2 rounded-3xl bg-[#A8D58D] flex flex-col gap-3'>
                
                <img src={features} alt="3" className='md:h-full z-10 w-fit absolute right-2.5 top-0 md:flex hidden' />
                <img src={features_phone} alt="3" className='h-full z-10 w-fit absolute right-2.5 top-0 flex md:hidden' />
                
                <h1 className=' z-20 shrink-0 w-full flex flex-col text-3xl font-["nunito"] font-bold text-[#2b532a]'>
                 How It Works?
                  <p className='text-xl font-normal flex gap-1 z-20'>Just a few simple steps to get started.</p>
                </h1>

                <div className='z-30 shrink-0 p-4 relative top-5 w-full md:h-65 overflow-x-auto md:overflow-hidden hidden md:flex items-center gap-30'>
                  
                  <FeatureCard
                    sr={true}
                    sr_num={"1."} 
                    image={camera} 
                    title={"Upload / Take Photo"} 
                    text={"Choose an image from gallery or take a new one."} 
                  />
                  <FaArrowAltCircleRight className='text-4xl text-[#F8E7A2] absolute left-77' />
                  <FeatureCard
                    sr={true}
                    sr_num={"2."} 
                    image={plant} 
                    title={"Get Identification"} 
                    text={"We will analyze the image & fint the best match for your plant."} 
                  />
                  <FaArrowAltCircleRight className='text-4xl text-[#F8E7A2] absolute left-170' />

                  <FeatureCard
                    sr={true}
                    sr_num={"3."} 
                    image={care} 
                    title={"Care Guide"} 
                    text={"View detailed information and care tips for your plant."} 
                  />

                </div>

                <div className='z-30 md:hidden shrink-0 p-2 gap-5 flex w-full h-85 flex-col items-center justify-center'>

                  <div className='w-full h-fit border p-2 rounded-3xl flex flex-col bg-[#E8F5E9] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <h1 className='w-full text-xl font-bold font-["nunito"] text-[#2b532a]'>
                      1. Upload / Take Photo
                    </h1>
                    <p className='font-semibold font-["nunito"] text-[#4F9D4D]'>
                      Choose an image from gallery or take a new one. 
                    </p>
                  </div>

                  <div className='w-full h-fit border p-2 rounded-3xl flex flex-col bg-[#E8F5E9] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <h1 className='w-full text-xl font-bold font-["nunito"] text-[#2b532a]'>
                      2. Get Identification
                    </h1>
                    <p className='font-semibold font-["nunito"] text-[#4F9D4D]'>
                      We will analyze the image & fint the best match for your plant.
                    </p>
                  </div>

                  <div className='w-full h-fit border p-2 rounded-3xl flex flex-col bg-[#E8F5E9] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <h1 className='w-full text-xl font-bold font-["nunito"] text-[#2b532a]'>
                      3. Care Guide
                    </h1>
                    <p className='font-semibold font-["nunito"] text-[#4F9D4D]'>
                      View detailed information and care tips for your plant.
                    </p>
                  </div>

                

                </div>
              </div>

        </div>
  )
}

export default MiddleHomepage