import React from 'react'

// Icons
import { FiShare2 } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";

// Images
import desktop from '../assets/Desktop_image/plant_info_desktop_view.png'
import mobile from '../assets/Phone_image/plant_info_phone_view.jpg'

const PlantIdentification = () => {
  return (
    <section className='relative w-full min-h-screen overflow-y-scroll md:overflow-hidden scrollbar-none md:p-6 p-3'>
        
        <img src={desktop} alt="desktop" className='fixed inset-0 -z-10 w-full md:flex hidden' />
        <img src={mobile} alt="phone" className='fixed inset-0 -z-10 h-full object-cover flex md:hidden' />
        
        <div className='relative z-50 w-full h-screen border-2 border-black rounded-3xl md:p-4 p-2 flex flex-col items-center'>

            {/*  Header section for identified plant with minimal information.  */}
            <div className='w-full md:h-[50%] h-fit border-2 border-black flex md:flex-row flex-col items-center md:gap-6 gap-3'>
                {/*  Plant image  */}
                <div className='shrink-0 md:w-[40%] w-full md:h-full h-70 bg-amber-50 rounded-2xl'>

                </div>

                {/*  Plant basic information */}
                <div className='md:h-full md:flex-1 h-70 w-full bg-amber-100 rounded-2xl'>

                    {/*  Plant title  */}
                    <h1 className='w-full h-fit md:p-4 p-2 text-3xl md:text-5xl text-[#2b532a] font-["Caveat_Brush"] flex items-center'>
                        Money Plant
                        <div className='shrink-0 w-[50%] flex  items-end justify-end gap-4 border-2 relative -right-40'>
                        <FiShare2 className='text-3xl text-[#4F9D4D]' />
                        <AiOutlineLike className='text-3xl text-[#4F9D4D]' />
                        </div>
                    </h1>

                    <ul>
                        
                    </ul>


                </div>

            </div>

        </div>
        
    </section>
  )
}

export default PlantIdentification