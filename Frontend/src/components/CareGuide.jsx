import React, { useEffect, useState } from 'react'

//  Plant image
import test from '../assets/Desktop_image/test2.jpg';
import spiral from '../assets/Phone_image/spiral.png';
import sticky from '../assets/Phone_image/sticky.png';
import cat from '../assets/Desktop_image/catpot.png';
import pot from '../assets/Desktop_image/potting.png';
import bg from '../assets/Phone_image/bgcare.jpg';


// Icons
import { FaArrowRight } from "react-icons/fa";
import { PiPottedPlant } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const CareGuide = ({careDetails, onClose, plantImage, plantName, scanDate, score, plantScientificName, disc}) => {

    const [infoPage, setInfoPage] = useState("care");

  useEffect(() => {
    console.log("Care details from guide: ", careDetails);
  }, [])
  
  

  return (
    <>
        <section className='w-full h-screen hidden md:flex gap-4 bg-[#E8F5E9] p-4 relative'>
                    <button
                        onClick={onClose}
                        className='w-10 h-10 absolute right-3 top-3 rounded-[50%] bg-red-400 z-30 transition-all duration-300 hover:bg-red-500 cursor-pointer'
                    >
                        <MdOutlineCancel className='w-full h-full text-white'/>
                    </button>
                    {/*  Plant care info */}
                    <div className='shrink-0 w-[25%] h-full border rounded-2xl p-4 flex items-center flex-col gap-4 bg-white relative pr-8'>
                        <img src={spiral} alt="" className='h-[70%] absolute top-25 -right-17' />
                        {/*  Plant image  */}
                        <div className='relative w-full h-80 border rounded-4xl bg-center bg-cover' style={{backgroundImage: `url(${plantImage})`}}>
                            <h1 className='w-fit h-fit absolute px-3 py-1 text-xl font-["nunito"] bottom-3 left-3 border rounded-3xl bg-[#E8F5E9] text-[#2b532a] font-semibold'>{plantName}</h1>
                        </div>
                        
                        {/*  Plant basic info */}
                        <div className='w-full flex-1 rounded-2xl z-30 flex flex-col items-center justify-end relative pb-9 '>
                            <div className='w-[80%] h-70 flex flex-col gap-3 py-5 px-1 '>

                                <h1 className='w-full h-fit text-4xl flex items-center justify-center font-medium font-["Caveat_Brush"] text-gray-700 border-b-2 border-gray-700'>
                                    {plantName}
                                </h1>

                                <h1 className='w-full h-fit gap-2 text-2xl font-["nunito"] font-semibold border-b-2 pd-2'>
                                    Scan Date:
                                    <p className='font-["Caveat_Brush"] font-normal text-gray-700 text-2xl'>
                                        {scanDate}
                                    </p>
                                </h1>
                                <h1 className='w-full h-fit gap-2 text-2xl font-["nunito"] font-semibold'>
                                    Confidence Score :
                                    <p className='font-["Caveat_Brush"] font-normal text-gray-700 text-2xl'>
                                        {score}
                                    </p>
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
                                    {careDetails.maintenance}
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
                                                {careDetails.watering}
                                            </h1>
                                            <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                                Watering Benchmark:
                                                <p className='text-gray-600'>
                                                    {careDetails.watering_benchmark}
                                                </p>
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
                                                <p className='text-gray-600'>
                                                    {careDetails.sunlight_requirement 
                                                    ? careDetails.sunlight_requirement 
                                                    : "Normal sunlight."
                                                }
                                                </p>
                                            </h1>
                                            <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex flex-col mt-3'>
                                                Soil Type:
                                                <p className='text-gray-600'>
                                                    {careDetails.soil_type}
                                                </p>
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
                                                <p className='text-gray-600'>{careDetails.care_level}</p>
                                            </h1>
                                            <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold gap-2 flex mt-3'>
                                                Maintenance:
                                                <p className='text-gray-600'>{careDetails.maintenance}</p>
                                            </h1>
                                            <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                                Drought tolerant:
                                                <p className='text-gray-600'>
                                                    {careDetails.drought_tolerant
                                                    ? " Plant is drought tolerant"
                                                    : "Not drought tolerant"
                                                    }
                                                </p>
                                            </h1>
                                            <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 mt-3'>
                                            Salt tolerant:
                                                <p className='text-gray-600'>
                                                    {
                                                        careDetails.salt_tolerant
                                                        ? "Plant is salt tolerant"
                                                        : "Not salt tolerant"
                                                    }
                                                </p>
                                            </h1>
                                        </div>
                                    </div>
                                }
                                

                                {/*  Cultivatio */}
                                { infoPage === "cultivation"
                                    &&
                                    <div className='w-full h-full bg-white flex flex-col items-center gap-3 p-4 '> 
                                        
                                        <div className='shrink-0 w-full h-fit p-2 border rounded-2xl bg-[#E8F5E9] flex items-center'>
                                            {/*  Growth  */}
                                            <div className='w-[40%] h-full flex flex-col gap-1 border-r-4 border-dotted border-gray-400'>
                                                <h1 className='text-2xl font-["nunito"] pb-1 font-bold text-[#2b532a] w-full pt-2 pl-3 flex items-center gap-2'>
                                                    Growing
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Growth rate:
                                                    <p className='text-gray-600'>
                                                        {careDetails.growth_rate}
                                                    </p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Hardiness minimum:
                                                    <p className='text-gray-600'>
                                                        {careDetails.hardiness_min}
                                                    </p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Hardiness maximum:
                                                    <p className='text-gray-600'>
                                                        {careDetails.hardiness_max ? careDetails.hardiness_max : "Not found"}
                                                    </p>
                                                </h1>
                                                
                                            </div> 

                                            {/*  Pruning  */}
                                            <div className='w-[40%] h-full flex flex-col gap-1 pl-3'>
                                                <h1 className='text-2xl font-["nunito"] pb-1 font-bold text-[#2b532a] w-full pt-2 pl-3 flex items-center gap-2'>
                                                    Pruning
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Pruning months:
                                                    <p className='text-gray-600'>
                                                        {careDetails.pruning_months}
                                                    </p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Pruning amount:
                                                    <p className='text-gray-600'>
                                                        {careDetails.pruning_amount? careDetails.pruning_amount : "Not found"}
                                                    </p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Pruning interval:
                                                    <p className='text-gray-600'>
                                                        {careDetails.pruning_interval ? careDetails.pruning_interval : "As needed"} 
                                                    </p>
                                                </h1>
                                            </div>
                                        </div>

                                        <div className='w-full flex-1 p-2 border rounded-2xl bg-[#E8F5E9] flex items-center relative'>

                                            <img 
                                                className='w-100 absolute bottom-5 right-10 '
                                                src={pot} 
                                                alt="" 
                                            />

                                            {/*  Harvesting  */}
                                            <div className='w-[65%] h-full flex flex-col gap-2  drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]'>
                                                <h1 className='text-2xl font-["nunito"] pb-1 font-bold text-[#2b532a] w-full pt-2 pl-3 flex items-center gap-2'>
                                                    Harvesting
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Flowering season:
                                                    <p className='text-gray-600'>
                                                        {careDetails.harvest_season}
                                                    </p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Fruiting season:
                                                    <p className='text-gray-600'>
                                                        {careDetails.fruiting_season}
                                                    </p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Harvest season:
                                                    <p className='text-gray-600'>{careDetails.harvest_season}</p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Harvest method:
                                                    <p className='text-gray-600'>{careDetails.harvest_method}</p>
                                                </h1>
                                                <h1 className='pl-3 text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                    Propagation:
                                                    <p className='text-gray-600'>{careDetails.propagation}</p>
                                                </h1>
                                            </div> 
                                        </div>
                                    </div>
                                }

                                {/*  Characteristics */}
                                
                                { infoPage === "details"
                                    &&
                                    <div className='w-full h-full bg-white flex flex-col p-4'> 
                                    {/*  Characteristics  */}
                                    <div className='w-fit h-fit min-h-40 border rounded-2xl bg-[#E8F5E9] flex flex-col'>
                                            <h1 className='w-full h-fit text-2xl text-[#2b532a] font-bold pt-3 pl-6'>
                                            Characteristics  
                                            </h1>

                                            <div className='w-full h-fit flex items-start p-3'>

                                                <div className='w-fit h-fit flex flex-col items-center gap-3 border-r-4 border-dotted p-2 pr-6'>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Flowers:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Cones:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                </div>

                                                <div className='w-fit h-fit flex flex-col items-center gap-3 border-r-4 border-dotted p-2 pr-6'>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Fruits:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Leaf:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                </div>

                                                <div className='w-fit h-fit flex flex-col items-center gap-3 border-r-4 border-dotted p-2 pr-6'>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Thorny:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Tropical:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                </div>

                                                <div className='w-fit h-fit flex flex-col items-center gap-3 p-2 pr-6'>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Rare:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                    <h1 className='text-xl max-w-[90%] h-fit font-semibold flex gap-2 '>
                                                        Invasive:
                                                        <p className='text-gray-600'>true</p>
                                                    </h1>
                                                </div>

                                            </div>
                                    </div>

                                    {/*  Wildlife / Ecosystem  */}
                                    <h1 className='pl-3 text-xl w-fit p-3 rounded-2xl bg-[#E8F5E9] h-fit font-semibold flex gap-2 mt-3 border'>
                                            Attracts: 
                                            <p className='text-gray-600'>Hand picking, bees</p>
                                        </h1>
                                    <h1 className='pl-3 text-xl w-fit p-3 rounded-2xl bg-[#E8F5E9] h-fit font-semibold flex gap-2 mt-3 border'>
                                            Pest susceptibility: 
                                            <p className='text-gray-600'>Aphids, spider mites, whiteflies, hibiscus mealybug</p>
                                        </h1>

                                        {/*  Uses  */}
                                        
                                    </div>
                                }

                            </div>
                        </div>
                    </div>

        </section>

        <section className='md:hidden flex p-1 gap-1 items-center w-full h-screen overflow-x-auto overflow-y-hidden scrollbar-none bg-center bg-cover relative snap-x snap-mandatory' style={{backgroundImage:`url(${bg})`}}>
         
          <div  className='w-full shrink-0 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'>
          {/*  Plant Image and info card  */}
    
            <div className='w-full h-70 bg-center bg-cover rounded-bl-[55%] shadow-black/70 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]' style={{backgroundImage:`url(${plantImage})`}}></div>
            
            <h1 className='w-full h-fit flex my-1 flex-col py-1 pl-3 text-[24px] leading-tight font-["nunito"] font-extrabold text-[#353f35]'>
              {plantName}
              <p className='font-medium text-xl text-gray-800'>
                {plantScientificName}
              </p>
            </h1>
    
            <div className='w-[97%] h-fit min-h-80 border border-black/40 rounded-2xl  bg-white/40 p-1 font-medium text-gray-700 leading-relaxed shadow-black/50 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'>
              {disc}
            </div>
    
            <button className='w-fit h-fit px-3 py-1.5 border mt-5 relative rounded-2xl flex items-center gap-1 text-xl font-semibold text-white bg-[#2b532a]'>
              Next
              <FaArrowRight className='realtive mt-0.5' />
            </button>
          </div>
    
          <div className='relative w-full shrink-0 h-full gap-3 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'> 
            <h1 className='w-fit relative -left-15 z-10 flex items-center h-fit p-3 text-2xl font-["nunito"] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a] rounded-br-4xl px-10 font-bold text-[#2b532a]'>Basic Info,</h1>
          
            {/*  Water block  */}
            <div className='w-[97%] h-fit max-h-60 border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-3 font-["nunito"]'>
              <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Watering</h1>
    
              <p className='text-[17px] font-medium text-gray-800 p-2 leading-4.5 font-["nunito"]'>
                {careDetails.watering}
              </p>
    
              <p className='p-2 text-[17px] font-medium text-gray-800 leading-4.5'>
                <h1 className='font-bold'>Benchmark:</h1>
                {careDetails.watering_benchmark}
              </p>
            
            </div>
    
            {/*  Soile & Sunlight */}
            <div className='w-[97%] h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-3 font-["nunito"]'>
              <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Soil & Sunlight</h1>
    
              <p className='p-2 text-[17px] font-medium text-gray-800 leading-4.5'>
                <h1 className='font-bold'>Sunlight Requirements:</h1>
                {careDetails.sunlight_requirement 
                                                    ? careDetails.sunlight_requirement 
                                                    : "Normal sunlight."
                                                }
              </p>
    
              <p className='p-2 text-[17px] font-medium text-gray-800 leading-4.5'>
                <h1 className='font-bold'>Soil Type:</h1>
                {careDetails.soil_type}
              </p>
    
              <div className='w-full h-fit flex flex-col gap-1.5 border-y-4 py-1.5 border-dotted'>
                <p className='pl-2 text-[17px] font-medium text-gray-800 leading-4.5 flex items-center gap-2'>
                  <h1 className='font-bold'>Hardiness( min & max ):</h1>
                  {careDetails.hardiness_min} | {careDetails.hardiness_max ? careDetails.hardiness_max : "Not found"}
                </p>
                <p className='pl-2 text-[17px] font-medium text-gray-800 leading-4.5 flex items-center gap-2'>
                  <h1 className='font-bold'>Drought:</h1>
                  {careDetails.drought_tolerant
                                                    ? " Plant is drought tolerant"
                                                    : "Not drought tolerant"
                                                    }
                </p>
                <p className='pl-2 text-[17px] font-medium text-gray-800 leading-4.5 flex items-center gap-2'>
                  <h1 className='font-bold'>Salt:</h1>
                  {
                                                        careDetails.salt_tolerant
                                                        ? "Plant is salt tolerant"
                                                        : "Not salt tolerant"
                                                    }
                </p>
              </div>
    
            </div>
    
            <p className='p-2 w-[97%] flex items-center border gap-2 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
                <h1 className='font-bold'>Maintenance:</h1>
                {careDetails.maintenance}
            </p>
            <p className='p-2 w-[97%] flex items-center border gap-2 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
                <h1 className='font-bold'>Growth Rate:</h1>
                {careDetails.growth_rate}
            </p>
            <p className='p-2 w-[97%] flex items-center border gap-2 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
                <h1 className='font-bold'>Care Required:</h1>
                Intermediate
            </p>
    
          </div>
    
          <div className='relative w-full shrink-0 h-full gap-3 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'> 
            <h1 className='w-fit relative -left-15 z-10 flex items-center h-fit p-3 text-2xl font-["nunito"] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a] rounded-br-4xl px-10 font-bold text-[#2b532a]'>Cultivation,</h1>
        
            <div className='w-[97%] h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-4 font-["nunito"]'>
              <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Pruning</h1>
    
              <div className='w-[97%] relative left-1.5 top-1.5 grid grid-cols-2 gap-2'>
    
                <p className='p-2 text-[17px] font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
                  <h1 className='font-bold'>Pruning months:</h1>
                  {careDetails.pruning_months}
                </p>
                <p className='p-2 text-[17px] font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
                  <h1 className='font-bold'>Pruning amount:</h1>
                   {careDetails.pruning_amount? careDetails.pruning_amount : "Not found"}
                </p>
    
                <p className='p-2 text-[17px] font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
                  <h1 className='font-bold'>Pruning interval:</h1>
                  {careDetails.pruning_interval ? careDetails.pruning_interval : "As needed"} 
                </p>
                <p className='p-2 text-[17px]  font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
                  <h1 className='font-bold'>Propagation:</h1>
                  {careDetails.propagation}
                </p>
    
              </div>
            </div>
    
            <div className='w-[85%] relative -left-4.5 h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-4 font-["nunito"]'>
              <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Harvesting</h1>
    
              <div className='w-[97%] relative left-1.5 top-1.5 flex flex-col'>
    
                <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
                  <h1 className='font-bold'>Flowering season:  </h1>
                  {careDetails.harvest_season}
                </p>
                <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
                  <h1 className='font-bold'>Fruiting season:  </h1>
                  {careDetails.fruiting_season}
                </p>
                <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
                  <h1 className='font-bold'>Harvest season:  </h1>
                  {careDetails.harvest_season}
                </p>
                <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
                  <h1 className='font-bold'>Harvest method:  </h1>
                  {careDetails.harvest_method}
                </p>
                
    
              </div>
            </div>
    
            <p className='p-2 w-[97%] flex items-center border gap-1 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
                <h1 className='font-bold'>Human toxicity level:</h1>
                Not toxic
            </p>
            <p className='p-2 w-[97%] flex items-center border gap-1 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
                <h1 className='font-bold'>Pet toxicity level:</h1>
                Not toxic
            </p>
    
          </div>
    
          <div className='relative w-full shrink-0 h-full gap-3 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'>
            <h1 className='w-fit relative -left-15 z-10 flex items-center h-fit p-3 text-2xl font-["nunito"] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a] rounded-br-4xl px-10 font-bold text-[#2b532a]'>More details,</h1>
    
            <div className='w-[85%] relative -left-4.5 h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-4 font-["nunito"]'>
              <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Attracts:</h1>
              <p className='pl-2 font-medium'>Aphids, spider mites, whiteflies, hibiscus mealybug, Butterflies, hummingbirds</p>
            </div>
    
            <div className='w-[95%] relative h-fit border rounded-2xl gap-y-4 overflow-hidden bg-white/40 backdrop-blur-sm p-4 font-["nunito"] grid grid-cols-2'>
            
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Fruits:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Flowers:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
    
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Cones:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Leafs:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
    
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Edible:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Thorny:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
    
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Invasive:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Rare:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
    
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Tropical:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
              <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
                Cuisine:
                <p className='font-medium text-gray-700'>true</p>
              </h1>
    
            </div>
            
            
          </div>
    
    
        </section>

    </>
  )
}

export default CareGuide