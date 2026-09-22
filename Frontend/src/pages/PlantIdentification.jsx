import React, { useState, useEffect } from 'react'

// Icons
import { FiShare2 } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

// Images
import desktop from '../assets/Desktop_image/plant_info_desktop_view.png';
import mobile from '../assets/Phone_image/plant_info_phone_view.jpg';
import test from '../assets/Desktop_image/care.jpg';

// PNGs
import plant from '../assets/Desktop_image/plant.png';
import family from '../assets/Desktop_image/family.png';
import microscope from '../assets/Desktop_image/microscope.png';
import other from '../assets/Desktop_image/other.png';
import plants from '../assets/Desktop_image/threeplants.png';
import border from '../assets/Desktop_image/border.png';

const PlantIdentification = ({plantDetails, setIsPlant, isPlant}) => {

  useEffect(() => {
    console.log("Plant: ", plantDetails);
  }, [plantDetails])
    
  const handleCancel = () =>{
        setIsPlant((prev) => !prev)
        console.log("Change:", isPlant);
  };

  return (
    <section className='relative w-full min-h-screen overflow-y-scroll md:overflow-hidden scrollbar-none md:p-6 p-3'>

        <button
            onClick={handleCancel}
            className='w-10 h-10 absolute right-3 top-6 rounded-[50%] bg-red-400 z-30 transition-all duration-300 hover:bg-red-500 cursor-pointer'
        >
            <MdOutlineCancel className='w-full h-full text-white' />
        </button>
        
        <img src={desktop} alt="desktop" className='fixed inset-0 -z-10 w-full md:flex hidden' />
        <img src={mobile} alt="phone" className='fixed inset-0 -z-10 h-full object-cover flex md:hidden' />
        
        <div className='w-full h-screen py-3 flex items-center flex-col gap-5 overflow-y-auto scrollbar-none'>
            {/*  Plant image and basic info  */}
            <div className='shrink-0 w-full md:h-[50%] object-center flex md:gap-10 gap-5 md:flex-row flex-col'>
                <img src={test} alt="identified plant" className='shrink-0 md:w-[30%] w-full md:h-full h-60 object-cover md:rounded-3xl rounded-2xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]' />
                
                    <div className='relative md:h-full flex-1 p-2 bg-white md:rounded-3xl rounded-2xl  border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                        <div className='relative md:h-full min-h-80 flex-1 bg-[#E8F5E9] md:rounded-3xl rounded-2xl flex flex-col md:gap-2 gap-3 p-3 md:p-6'>
                            {/*  Plant title  */}
                            <h1 className='w-full h-fit flex items-center text-2xl md:text-4xl font-bold md:font-semibold font-["Fredoka"] text-[#2b532a] mb-2'>
                                {plantDetails.primaryName}
                            </h1>
                                <ul className='w-full h-fit flex flex-col gap-1 md:gap-3'>
                                    {/*  Scientific Name  */}
                                    <li className='md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                        <h1 className='md:w-[20%]'>
                                            Scientific Name:
                                        </h1>
                                        <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                            {plantDetails.scientificName}
                                        </p> 
                                    </li>
                                    {/*  Full Name  */}
                                    <li className='w-full md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                        <h1 className='md:w-[20%]'>
                                            Full Name:
                                        </h1>
                                        <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                           {plantDetails.fullName}
                                        </p> 
                                    </li>
                                    {/* Family info */}
                                    <li className='w-full md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                        <h1 className='md:w-[20%]'>
                                            Family:
                                        </h1>
                                        <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                            {plantDetails.family}
                                        </p> 
                                    </li>
                                    {/*  Other names */}
                                    <li className='w-full md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row '>
                                        <h1 className='md:w-[20%] shrink-0'>
                                            Other Names:
                                        </h1>
                                            <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                                {plantDetails.otherNames.length > 0
                                                ? plantDetails.otherNames.join(", ")
                                                : "No other names available"
                                                }
                                            </p> 
                                    </li>


                                </ul>
                        </div>

                        <img src={plants} alt="border" className='md:flex hidden right-10 bottom-10 absolute w-90 -scale-x-100' />
                    </div>

            </div>

            <div className='w-full md:h-[45%] h-60 shrink-0 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center md:p-3 p-2 border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                <div className='relative w-full h-full bg-[#E8F5E9] rounded-2xl md:rounded-3xl flex flex-col p-3 md:p-6'>

                    <h1 className='shrink-0 w-full h-fit flex items-center text-2xl md:text-3xl font-bold font-["nunito"] text-[#2b532a] mb-4'>
                        Detection Information
                    </h1>

                        <ul className='w-full h-fit flex flex-col md:gap-3'>
                            <li className='md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                <h1 className='md:w-[15%]'>
                                    Detected Organ:
                                </h1>
                                <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                   {plantDetails.detectedOrgan}
                                </p> 
                            </li>

                            <li className='md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                <h1 className='md:w-[15%]'>
                                    Confidence Score:
                                </h1>
                                <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                    {plantDetails.confidence}
                                </p> 
                            </li>

                            <li className='md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                <h1 className='md:w-[15%]'>
                                    Source:
                                </h1>
                                <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                    PlantNet
                                </p> 
                            </li>

                            <li className='md:text-2xl text-[18px] md:gap-3 font-["nunito"] font-semibold text-gray-500 flex flex-col md:flex-row md:items-center '>
                                <h1 className='md:w-[15%]'>
                                    Scan Date:
                                </h1>
                                <p className='text-xl md:text-2xl relative -top-2 md:top-0 text-[#2b532a]'>
                                    Sep 12, 2026
                                </p> 
                            </li>
                        </ul>
                    <img src={border} alt="plants pots" className='md:flex hidden absolute w-200 right-1 -scale-x-100' />
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default PlantIdentification