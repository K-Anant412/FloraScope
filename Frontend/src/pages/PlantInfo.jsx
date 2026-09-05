import React, { useState, useEffect, useRef } from 'react'
import { PiPottedPlantDuotone } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbClipboardSearch } from "react-icons/tb";
import { LuMicroscope } from "react-icons/lu";


const PlantInfo = ({props}) => {
  return (
    <div className='w-full md:p-5 min-h-screen flex md:flex-row flex-col items-center md:justify-center md:overflow-hidden overflow-y-auto overflow-x-hidden'>

      {/*  plant Card  */}
      <div className='w-full h-full md:rounded-3xl gap-10 md:p-3 flex flex-col md:items-center overflow-hidden md:flex-row shrink-0 md:border-white/40 md:shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>

        {/*  plant Image  */}
        <div className='md:w-[28%] w-full md:h-full h-60 bg-center md:rounded-2xl bg-cover shrink-0 shadow-[#a0a6a0] shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]' style={{backgroundImage: "url('Desktop_image/plant9.jpg')"}}>

        </div>

        {/*  plant Information  */}
        <div className='shrink-0 md:flex-1 w-full md:h-full border-2 rounded-2xl flex flex-col items-center shadow-[#a0a6a0] shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] bg-white overflow-x-hidden overflow-y-scroll scrollbar-none'>

          {/*  plant Name  */}
          <h1 className='w-[85%] h-fit font-["Caveat_Brush"] text-gray-800 text-3xl md:text-6xl md:font-medium border-gray-700 italic pt-4 md:p-4  pb-1 border-b-2 '>
            Yellow Bell
          </h1>

          {/*  some General Info */}
          <div className='md:w-[85%] w-[85%] h-fit flex flex-col items-center pt-2 gap-3 md:gap-2 mt-2 pb-1'>

            <span className='w-full md:border-0 border-b-2 h-fit flex items-center gap-2'>
              <h1 className='text-xl md:text-2xl font-semibold font-["nunito"] text-gray-600 flex items-center justify-center'>
                <LuMicroscope className='md:flex hidden text-2xl mr-1 mb-1' />
                Scientific Name:
              </h1>
              <p>
                
              </p>
            </span>

            <span className='w-full h-fit flex items-center gap-2 border-b-2'>
              <h1 className='text-xl md:text-2xl font-semibold font-["nunito"] text-gray-600 flex items-center justify-center'>
                Full Name:
              </h1>
              <p>

              </p>
            </span>

            <span className='md:hidden w-full h-fit flex items-center gap-2 border-b-2'>
              <h1 className='text-xl md:text-2xl font-semibold font-["nunito"] text-gray-600 flex items-center justify-center'>
                Family:
              </h1>
              <p>

              </p>
            </span>

            <span className='md:hidden w-full h-fit flex items-center gap-2 border-b-2'>
              <h1 className='text-xl md:text-2xl font-semibold font-["nunito"] text-gray-600 flex items-center justify-center'>
                Detection info:
              </h1>
              <p>

              </p>
            </span>

            <span className='md:hidden w-full h-fit flex items-center gap-2'>
              <h1 className='text-xl md:text-2xl font-semibold font-["nunito"] text-gray-600 flex items-center justify-center'>
                Other info:
              </h1>
              <p>

              </p>
            </span>


          </div>

          {/*  plant Family and Detection info  */}
          <div className='md:w-[95%] w-[85%] h-fit md:flex hidden md:flex-row md:gap-10 gap-5 flex-col p-3 md:p-4 items-center justify-center md:pt-10'>

            <span className='p-4 flex flex-col overflow-scroll scrollbar-none md:w-[43%] w-full h-50 md:h-50 border-2 rounded-3xl border-white/40 md:shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] bg-linear-to-l from-[#E8F5E9] to-[#c8fbcd]'>
            
            <h1 className='border-b-2 md:text-2xl text-xl font-["nunito"] font-semibold flex items-center gap-1'>
              <PiPottedPlantDuotone className='md:text-2xl text-xl relative' />
              Family;
            </h1>

            <p className='font-medium text-[19px]'>

            </p>

            </span>
            <span className='p-4 flex-col overflow-scroll scrollbar-none md:w-[43%] w-full h-50 md:h-50 border-2 rounded-3xl flex border-white/40 md:shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] bg-linear-to-l from-[#E8F5E9] to-[#c8fbcd]'>
            
            <h1 className='border-b-2 md:text-2xl text-xl font-["nunito"] font-semibold flex items-center gap-1'>
              <TbClipboardSearch className='md:text-2xl text-xl relative' />
                Detection Info;
            </h1>

            <p className='font-medium text-[19px]'>

            </p>

            </span>

          </div>

          <div className='w-[85%] md:w-[95%] h-30 md:h-50 mt-5 px-3 flex items-center justify-center'>
            <span className='md:w-[90%] p-4 flex-col w-full h-full border-2 rounded-3xl md:flex hidden border-white/40 md:shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] bg-linear-to-l from-[#E8F5E9] to-[#c8fbcd]'>
              
              <h1 className='border-b-2 md:text-2xl text-xl font-["nunito"] font-semibold flex items-center gap-1'>
                <IoChatbubbleEllipsesOutline className='md:text-2xl text-xl relative' />
                Other Info;
              </h1>

              <p className='font-medium text-[19px]'>

              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantInfo