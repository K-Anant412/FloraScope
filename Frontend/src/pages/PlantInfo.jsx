import React, { useState, useEffect, useRef } from 'react'
import { PiPottedPlantDuotone } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbClipboardSearch } from "react-icons/tb";

const PlantInfo = () => {
  return (
    <div className='w-full md:p-5 min-h-screen flex md:flex-row flex-col items-center justify-center md:overflow-hidden overflow-y-auto overflow-x-hidden'>

      {/*  plant Card  */}
      <div className='w-full h-full rounded-3xl gap-10 md:p-3 p-6 flex flex-col items-center overflow-hidden md:flex-row shrink-0 md:border-white/40 md:shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>

        {/*  plant Image  */}
        <div className='md:w-[28%] w-[85%] md:h-full h-80 rounded-2xl bg-center bg-cover shrink-0 shadow-[#a0a6a0] shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]' style={{backgroundImage: "url('Desktop_image/plant9.jpg')"}}>

        </div>

        {/*  plant Information  */}
        <div className='shrink-0 md:flex-1 w-full md:h-full min-h-90 border-2 rounded-2xl flex flex-col shadow-[#a0a6a0] shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)] bg-white'>

        </div>
      </div>
    </div>
  )
}

export default PlantInfo