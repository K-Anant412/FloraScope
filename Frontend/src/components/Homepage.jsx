import React, { useState, useEffect } from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaLeaf } from "react-icons/fa6";
import Navbar from './Navbar';

// images
import homegb from '../assets/Desktop_image/homebg.png'
import phone_bg from '../assets/Phone_image/bg_phone.png'

const Homepage = () => {
    const [userProfile, setUserProfile] = useState(false);

    return (
            <div className='relative w-full min-h-screen flex flex-col items-center md:bg-center md:bg-cover' style={{backgroundImage: `url(${homegb})`}}>
                <img src={phone_bg} alt="bg" className='absolute top-30 flex md:hidden'/>
                {/* ---- Navbar ---- */}
                <Navbar setUserProfile={setUserProfile} />
                <div className='w-full z-50 flex-1 flex flex-col md:justify-center md:p-0 pt-5 relative md:top-20 md:left-22'>
                    {/*  Sub titles */}
                    <h1 className='relative hidden md:left-18 md:-top-25 text-[#4F9D4D] shrink-0 md:w-[25%] h-fit p-2 border md:flex items-center justify-center gap-2 rounded-3xl text-xl font-semibold font-["nunito"] bg-[#A8D58D] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                        <p>Discover</p>
                        <GoDotFill />
                        <p>Identify</p>
                        <GoDotFill />
                        <p>Grow</p>
                    </h1>

                    {/*  Hero Text */}
                    <div className='md:w-[50%] h-fit p-3 flex flex-col relative md:left-10 md:-top-25 md:gap-6 gap-3'>
                        <h1 className='md:w-[80%] text-[#2b532a] h-fit text-4xl md:text-6xl font-semibold font-["Fredoka"] md:pl-5'>
                            Know Your Plants Better
                            <FaLeaf className='md:flex hidden' />
                        </h1>

                        <p className='text-gray-600 font-["nunito"] md:w-[60%] md:pl-4 md:text-xl '>
                            Take a photo, identify your plant, and get personalized care tips. Your green companion for a healthier, happier graden.
                        </p>

                        <button className='flex relative md:left-5 items-center justify-center w-fit h-fit md:p-2 px-4 py-2 border text-xl md:text-2xl gap-2 rounded-3xl md:px-6 font-bold md:pb-3 bg-[#4F9D4D] text-white transition-all duration-300 cursor-pointer hover:bg-[#3b7739] border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                            <FaCameraRetro />
                                Start Identifying 
                            <FaArrowRight className='relative top-1 md:flex hidden' />
                        </button>

                    </div>

                </div>

            </div>
    )
}

export default Homepage