import React from 'react'

// Icons
import { FiShare2 } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";

// Images
import desktop from '../assets/Desktop_image/plant_info_desktop_view.png'
import mobile from '../assets/Phone_image/plant_info_phone_view.jpg'

// PNGs
import plant from '../assets/Desktop_image/plant.png'
import family from '../assets/Desktop_image/family.png'
import microscope from '../assets/Desktop_image/microscope.png'
import other from '../assets/Desktop_image/other.png'
import camera from '../assets/Desktop_image/camera.png'
import plants from '../assets/Desktop_image/2dplants.png'
import sticker4 from '../assets/Desktop_image/sticker4.png'

const PlantIdentification = (plantDetails) => {
  return (
    <section className='relative w-full min-h-screen overflow-y-scroll md:overflow-hidden scrollbar-none md:p-6 p-3'>
        
        <img src={desktop} alt="desktop" className='fixed inset-0 -z-10 w-full md:flex hidden' />
        <img src={mobile} alt="phone" className='fixed inset-0 -z-10 h-full object-cover flex md:hidden' />
        
        <div className='relative z-50 w-full h-screen border-2 border-black rounded-3xl md:p-4 p-2 flex flex-col gap-3 items-center'>

            {/*  Header section for identified plant with minimal information.  */}
            <div className='w-full md:h-[50%] h-fit flex md:flex-row flex-col items-center md:gap-6 gap-3'>
                {/*  Plant image  */}
                <div className='shrink-0 md:w-[40%] w-full md:h-full h-70 bg-white flex items-center justify-center rounded-2xl p-2'>
                    <div className='bg-[#E8F5E9] w-full h-full rounded-2xl'>

                    </div>
                </div>

                {/*  Plant basic information */}
                <div className='md:h-full md:flex-1 h-70 w-full bg-[#E8F5E9] rounded-2xl flex flex-col items-center p-3 relative'>

                    {/*  Plant title  */}
                    <h1 className='w-full h-fit md:p-4 p-2 text-3xl md:text-5xl text-[#2b532a] font-["Caveat_Brush"] flex items-center'>
                        Money Plant
                        <div className='shrink-0 w-[50%] flex  items-end justify-end gap-4 relative -right-40'>
                        <FiShare2 className='text-3xl text-[#4F9D4D] transition-all duration-300 hover:text-[#3e7b3c]' />
                        <AiOutlineLike className='text-3xl text-[#4F9D4D] transition-all duration-300 hover:text-[#3e7b3c]' />
                        </div>
                    </h1>

                    <ul className='md:w-[50%] h-fit p-2 flex flex-col items-center relative -top-5 -left-55'>

                        <li className='w-full text-2xl font-semibold font-["nunito"] h-fit p-1 flex items-center'>
                            <div className='relative w-15 h-15 rounded-[50%]'>
                                <img src={microscope} alt="microscope" className='w-full object-cover' />
                            </div>
                            Scientific Name
                            <p className='text-xl h-full flex items-center pt-1 ml-4 text-gray-500'>Money Plant</p>
                        </li>

                        <li className='w-full text-2xl font-semibold font-["nunito"] h-fit p-1 flex items-center'>
                            <div className='relative w-15 h-15 rounded-[50%]'>
                                <img src={plant} alt="microscope" className='w-full object-cover' />
                            </div>
                            Full Name
                            <p className='text-xl h-full flex items-center pt-1 ml-4 text-gray-500'>Money Plant</p>
                        </li>

                        <li className='w-full text-2xl font-semibold font-["nunito"] h-fit p-1 flex items-center'>
                            <div className='relative w-15 h-15 rounded-[50%]'>
                                <img src={family} alt="microscope" className='w-full object-cover' />
                            </div>
                            Family
                            <p className='text-xl h-full flex items-center pt-1 ml-4 text-gray-500'>Money Plant</p>
                        </li>

                        <li className='w-full text-2xl font-semibold font-["nunito"] h-fit p-1 flex items-center'>
                            <div className='relative w-15 h-15 rounded-[50%]'>
                                <img src={other} alt="microscope" className='w-full object-cover' />
                            </div>
                            Other Names
                            <p className='text-xl h-full flex items-center pt-1 ml-4 text-gray-500'>Money Plant</p>
                        </li>
                        
                    </ul>

                    <img src={plants} alt="2D plants PNG" className=' absolute top-20 w-[50%] right-3 md:flex hidden ' />
                </div>

            </div>

            <div className='relative w-full md:h-[50%] h-fit flex md:flex-row flex-col items-center md:gap-6 gap-3'>
                {/*  detection information  */}
                {/* <img src={sticker4} alt="plant banner" className='absolute md:flex hidden w-[30%] -top-54' /> */}
                <div className='shrink-0 w-[30%] h-[75%] rounded-2xl flex flex-col p-3 bg-white'>
                    
                    <div className='w-full h-full bg-[#E8F5E9] p-2 rounded-2xl'>

                        <h1 className='shrink-0 pl-4 text-2xl mt-2 font-["nunito"] font-semibold'>
                            Detection Info
                        </h1>

                        <ul className='w-[90%] flex-1 mt-2 flex flex-col items-center'>
                            
                            <li className='text-xl font-semibold font-["nunito] text-[#285943] flex items-center w-full pl-2'>
                                <h1 className='p-2 min-w-[50%]'>
                                    Detected Organ
                                </h1>
                                <p className='ml-8 font-normal text-gray-500'>Leaf</p>
                            </li>

                            <li className='text-xl font-semibold font-["nunito] text-[#285943] flex items-center w-full pl-2'>
                                <h1 className='p-2 min-w-[50%]'>
                                    Confidence Score
                                </h1>
                                <p className='ml-8 font-normal text-gray-500'>92%</p>
                            </li>

                            <li className='text-xl font-semibold font-["nunito] text-[#285943] flex items-center w-full pl-2'>
                                <h1 className='p-2 min-w-[50%]'>
                                    Source
                                </h1>
                                <p className='ml-8 font-normal text-gray-500'>PlantNet</p>
                            </li>

                            <li className='text-xl font-semibold font-["nunito] text-[#285943] flex items-center w-full pl-2'>
                                <h1 className='p-2 min-w-[50%]'>
                               S    can Date
                                </h1>
                                <p className='ml-8 font-normal text-gray-500'>Sep 12, 2025</p>
                            </li>


                        </ul>

                    </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default PlantIdentification