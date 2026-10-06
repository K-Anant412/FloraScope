import React, { useState, useEffect} from 'react'

//  Plant image
import test from '../assets/Desktop_image/test2.jpg';
import spiral from '../assets/Phone_image/spiral.png';
import sticky from '../assets/Phone_image/sticky.png';
import cat from '../assets/Desktop_image/catpot.png';

// Services
import { plantService } from '../service/api'

// Icons
import { PiPottedPlant } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";

const PlantCare = () => {

    // const [plantCareData, setPlantCareData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    const [infoPage, setInfoPage] = useState("care");

    // useEffect(() => {
    //   const fetchData = async() => {
    //     const response = await plantService.plantCareDetails();
    //   }
    // }, [third])
    

    return (
        <section className='w-full h-screen hidden md:flex gap-4 bg-[#E8F5E9] p-4 relative'>
            {/*  Plant care info */}
            <div className='shrink-0 w-[25%] h-full border rounded-2xl p-4 flex items-center flex-col gap-4 bg-white relative pr-8'>
                <img src={spiral} alt="" className='h-[70%] absolute top-25 -right-17' />
                {/*  Plant image  */}
                <div className='relative w-full h-80 border rounded-4xl bg-center bg-cover' style={{backgroundImage: `url(${test})`}}>
                    <h1 className='w-fit h-fit absolute px-3 py-1 text-xl font-["nunito"] bottom-3 left-3 border rounded-3xl bg-[#E8F5E9] text-[#2b532a] font-semibold'>Plant Name</h1>
                </div>
                
                {/*  Plant basic info */}
                <div className='w-full flex-1 rounded-2xl z-30 flex flex-col items-center justify-end relative pb-9 '>
                    <div className='w-[80%] h-70 flex flex-col gap-3 py-5 px-1 '>

                        <h1 className='w-full h-fit text-4xl flex items-center justify-center font-medium font-["Caveat_Brush"] text-gray-700 border-b-2 border-gray-700'>
                            Plant Name
                        </h1>

                        <h1 className='w-full h-fit gap-2 text-2xl font-["nunito"] font-semibold border-b-2 pd-2'>
                            Scan Date:
                            <p className='font-["Caveat_Brush"] font-normal text-gray-700 text-2xl'>12 September 2026</p>
                        </h1>
                        <h1 className='w-full h-fit gap-2 text-2xl font-["nunito"] font-semibold'>
                            Confidence Score :
                            <p className='font-["Caveat_Brush"] font-normal text-gray-700 text-2xl'>48%</p>
                        </h1>

                    </div>
                </div>
                
            </div>

            {/*  Plant Care  */}
            <div className='h-full flex-1 border rounded-2xl bg-white p-4 pl-8'>
                <div className='w-full h-full bg-[#E8F5E9] rounded-2xl p-2 pl-4 relative flex flex-col font-["nunito"]'>
                    <img src={sticky} alt="" className='w-135 absolute -bottom-25 -left-130 z-10' />
                    {/*  heading section  */}
                    <h1 className='w-full h-fit pl-3 pt-4 text-5xl font-["Caveat_Brush"] text-[#2b532a] border-b-2 pb-1.5 border-[#2b532a] border-dashed relative'>
                        Plant Care Guide
                        <p className='font-["nunito"] text-xl text-gray-700 font-semibold'>
                            Here's a simple care guide to help your plant to stay healthy and grow beautifully.
                        </p>

                        <span className='w-fit h-fit px-3 py-1.5 border rounded-3xl absolute top-4 right-4 text-xl font-["nunito"] border-[#2b532a] bg-white text-[#2b532a] font-semibold flex items-center justify-center pb-1'>
                            Easy Care
                        </span>
                    </h1>

                    {/*  Navigation  */}
                    <nav className='shrink-0 w-full h-fit p-2 rounded-2xl flex items-center gap-5'>
                        <button 
                            onClick={()=> setInfoPage("care")}
                            className={`px-3 py-1 text-xl border rounded-3xl 
                            border-[#2b532a] transition-all duration-300 cursor-pointer font-semibold
                            ${
                                infoPage === "care"
                                    ? "bg-[#2b532a] text-white"
                                    : "text-[#2b532a] hover:bg-[#2b532a] hover:text-white"
                            }`}
                        >
                            Care Basics
                        </button>
                        <button 
                            onClick={()=> setInfoPage("cultivation")}
                            className={`px-3 py-1 text-xl border rounded-3xl 
                            border-[#2b532a] transition-all duration-300 cursor-pointer font-semibold
                            ${
                                infoPage === "cultivation"
                                    ? "bg-[#2b532a] text-white"
                                    : "text-[#2b532a] hover:bg-[#2b532a] hover:text-white"
                            }`}
                        >
                            Cultivation
                        </button>
                        <button 
                            onClick={()=> setInfoPage("details")}
                            className={`px-3 py-1 text-xl border rounded-3xl 
                            border-[#2b532a] transition-all duration-300 cursor-pointer font-semibold
                            ${
                                infoPage === "details"
                                    ? "bg-[#2b532a] text-white"
                                    : "text-[#2b532a] hover:bg-[#2b532a] hover:text-white"
                            }`}
                        >
                            Characteristics
                        </button>
                    </nav>

                    {/*  Information*/}
                    <div className='w-full flex-1 border-2 rounded-2xl overflow-hidden'>
                        {/*  Care Basics */}
                        { infoPage === "care"
                            &&
                            <div className='w-full h-full bg-white grid grid-cols-2 gap-x-4 p-4 relative'> 

                                    <img 
                                        src={cat} 
                                        className='z-20 w-90 absolute right-5 top-[40%] drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]'
                                        alt="" 
                                    />

                                 {/* Water */}
                                <div className="h-50 border rounded-2xl p-2 bg-[#E8F5E9] flex flex-col shadow-[0_5px_15px_rgba(43,83,42,0.12)]">
                                    <h1 className='text-2xl font-["nunito"] font-bold text-[#2b532a] w-full pt-2 pl-3 flex items-end gap-1'>
                                        <IoWaterOutline 
                                            className='relative text-3xl -top-1'
                                        />
                                        Water
                                    </h1>

                                    {/*  fields  */}
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold text-gray-600 mt-1'>
                                        Water when top 2-3 cm of soil is dry; keep soil li
                                    </h1>
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                        Watering Benchmark:
                                        <p className='text-gray-600'>top 2-3 cm of soil dry</p>
                                    </h1>
                                </div>

                                {/* Sunlight */}
                                <div className="h-50 border rounded-2xl p-2 bg-[#E8F5E9] flex flex-col shadow-[0_5px_15px_rgba(43,83,42,0.12)]">
                                    <h1 className='text-2xl font-["nunito"] font-bold text-[#2b532a] w-full pt-2 pl-3 flex items-center gap-2 '>
                                       <FiSun 
                                        className='relative text-3xl -top-1'
                                       />
                                       Sunlight & Soil
                                    </h1>

                                    {/*  fields  */}
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-1'>
                                        Sunlight Requirements:
                                        <p className='text-gray-600'>Bright indirect light</p>
                                    </h1>
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex flex-col mt-3'>
                                        Soil Type:
                                        <p className='text-gray-600'>Well-draining peat-based potting mix</p>
                                    </h1>
                                </div>

                                {/* Soil */}
                                <div className="h-60 border rounded-2xl p-2 bg-[#E8F5E9] flex flex-col relative -top-4.5 shadow-[0_5px_15px_rgba(43,83,42,0.12)]">
                                    <h1 className='text-2xl font-["nunito"] font-bold text-[#2b532a] w-full pt-2 pl-3 flex items-center gap-2'>
                                        <PiPottedPlant 
                                            className='relative text-3xl -top-1'
                                        />
                                        Care
                                    </h1>

                                     {/*  fields  */}
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                        Care level:
                                        <p className='text-gray-600'>Intermediate</p>
                                    </h1>
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold gap-2 flex mt-3'>
                                        Maintenance:
                                        <p className='text-gray-600'>Low to moderate</p>
                                    </h1>
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                        Drought tolerant:
                                        <p className='text-gray-600'>Not tolerant</p>
                                    </h1>
                                    <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                       Salt tolerant:
                                        <p className='text-gray-600'>Not tolerant</p>
                                    </h1>
                                </div>
                            </div>
                        }
                        

                        {/*  Cultivatio */}
                        { infoPage === "cultivation"
                            &&
                            <div className='w-full h-full bg-amber-100'> 

                            </div>
                        }

                        {/*  Characteristics */}
                        { infoPage === "details"
                            &&
                            <div className='w-full h-full bg-amber-200'> 

                            </div>
                        }

                    </div>
                </div>
            </div>

        </section>
    )
}

export default PlantCare