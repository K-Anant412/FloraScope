import React, { useState, useEffect, useContext } from 'react'
// Service
import { plantService } from '../service/api';
// Components
import Navbar from '../components/Navbar';
//  Plant image
import test from '../assets/Desktop_image/test2.jpg';
import bgph from '../assets/Phone_image/phbg.jpg';
import banner from '../assets/Phone_image/banner.png';
// Icons
import { SlLike } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { SiOverleaf } from "react-icons/si";
import { IoSearch } from "react-icons/io5";

// PNGs
import navbar from '../assets/Desktop_image/navbar.png';
import cat from '../assets/Desktop_image/cat.png';

const Gallery = () => {

    // const [PlantData, setPlantData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //   const fetchData = async() =>{
    //     try {
    //         setIsLoading(true);
    //         const response = await plantService.plantData();

    //         if(!response){
    //             return(
    //                 <>
    //                     <h1>Plant Data Not Exist</h1>
    //                 </>
    //             )
    //         }

    //         setPlantData(response.data.data)
    //     } catch (error) {
    //         console.log(error.message);
    //     } finally {
    //         setIsLoading(false);
    //     }
    //   }
    //   fetchData();
    // }, [])
    
    // console.log("Plant Data: ", PlantData);
    

    return (
        <>
        <section className='w-full max-h-screen bg-[#E8F5E9] p-2 md:p-0 flex-col items-center overflow-y-auto scrollbar-none relative md:flex hidden'>

            <button className='w-fit h-fit py-2 px-3 border absolute bottom-3 left-3 z-50 rounded-3xl text-xl flex items-center justify-center pb-2 bg-[#E8F5E9] font-bold text-gray-700 font-["nunito"] '>
                back
            </button>

            <div className='relative w-full flex-1 border flex'>
            <img 
                src={cat} 
                alt=""
                className='h-60 absolute top-0 z-50 -right-6'
            />
            {/*  Left section  */}
                <div className='shrink-0 relative w-[20%] min-h-screen bg-[#A8D58D] flex flex-col items-center'>
                    <h1 className='w-full text-5xl font-["nunito"] font-extrabold flex pl-8 pt-10 text-[#285943]'>
                        Your Plant Gallery
                    </h1>
                    <p className='w-[76%] h-fit text-[18px] pt-5 font-semibold text-gray-700'>
                        Explore your past scans, revisit the plants you've identified and get care guides whenever you need.
                    </p>

                    <div className='w-[70%] h-20 border rounded-2xl mt-10 bg-[#E8F5E9] flex flex-col shadow-gray-300 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'>
                        <h1 className='w-full h-fit text-2xl font-bold font-["nunito"] flex items-center justify-center pt-2'>
                            Total Plants:
                        </h1>
                        <p className='w-full h-fit text-2xl text-gray-700 flex items-center justify-center'>
                            12
                        </p>
                    </div>
                    <img 
                        src={navbar} 
                        alt="efwef" 
                        className='mt-8'
                    />
                </div>

                {/*  Right sectin  */}
                <div className='min-h-screen flex-1 border-2 bg-white flex flex-col p-4'>
                    {/*  Tabs  */}
                    <div className='w-full h-15 flex items-center gap-10 pl-4 p-2 relative'>
                        <ul className='shrink-0 flex items-center h-full min-w-[45%] p-1 justify-around gap-4'>
                            <li className='h-full w-40 text-gray-700 border rounded-3xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300 bg-[#E8F5E9] font-["nunito"] hover:font-bold hover:bg-[#285943] hover:text-white'> 
                                All Plants
                            </li>
                            <li className='h-full w-45 text-gray-700 border rounded-3xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300 bg-[#E8F5E9] font-["nunito"] hover:font-bold hover:bg-[#285943] hover:text-white'> 
                                With Care Guide
                            </li>
                            <li className='h-full w-45 text-gray-700 border rounded-3xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300 bg-[#E8F5E9] font-["nunito"] hover:font-bold hover:bg-[#285943] hover:text-white'> 
                                No Care Guide
                            </li>
                            
                        </ul>

                        <input 
                            type="text" 
                            placeholder='Enter plant name'
                            className='w-[35%] h-[80%] border-2  absolute right-10 rounded-3xl px-5 font-semibold text text-gray-700 text-xl'
                        />
                    </div>

                    <div className='w-full flex-1 border-2 flex flex-col gap-3 overflow-y-auto scrollbar-none rounded-2xl items-center justify-center border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                        {/* Row */}
                        <div className='w-full h-[50%] flex items-center justify-around gap-5 shrink-0 p-6'>
                            {/* Plant card */}
                            <div className='w-80 h-[90%] rounded-3xl flex flex-col border border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden relative'>
                                <img 
                                    src={test} 
                                    className='shrink-0 w-full object-cover z-10'
                                    alt="" 
                                />
                                <div className='w-full h-13 absolute top-0 flex items-center px-3 z-20'>
                                    <h1 className='w-fit h-fit p-1.5 border rounded-2xl flex items-center justify-center bg-[#A8D58D] pb-2 px-2 font-semibold text-gray-700 border-white'>
                                        care guide
                                    </h1>
                                    <MdFavorite className='h-8 w-8 text-red-500 relative -right-40' />
                                </div>
                                <h1 className='w-full h-12 border bg-[#A8D58D] text-xl text-gray-700 font-["nunito"] font-semibold flex items-center justify-center'>
                                    Plant Name
                                </h1>
                            </div>

                            <div className='w-80 h-[90%] rounded-3xl flex flex-col border border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden relative'>
                                <img 
                                    src={test} 
                                    className='shrink-0 w-full object-cover z-10'
                                    alt="" 
                                />
                                <div className='w-full h-13 absolute top-0 flex items-center px-3 z-20'>
                                    <h1 className='w-fit h-fit p-1.5 border rounded-2xl flex items-center justify-center bg-[#A8D58D] pb-2 px-2 font-semibold text-gray-700 border-white'>
                                        care guide
                                    </h1>
                                    <MdFavorite className='h-8 w-8 text-red-500 relative -right-40' />
                                </div>
                                <h1 className='w-full h-12 border bg-[#A8D58D] text-xl text-gray-700 font-["nunito"] font-semibold flex items-center justify-center'>
                                    Plant Name
                                </h1>
                            </div>

                            <div className='w-80 h-[90%] rounded-3xl flex flex-col border border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden relative'>
                                <img 
                                    src={test} 
                                    className='shrink-0 w-full object-cover z-10'
                                    alt="" 
                                />
                                <div className='w-full h-13 absolute top-0 flex items-center px-3 z-20'>
                                    <h1 className='w-fit h-fit p-1.5 border rounded-2xl flex items-center justify-center bg-[#A8D58D] pb-2 px-2 font-semibold text-gray-700 border-white'>
                                        care guide
                                    </h1>
                                    <MdFavorite className='h-8 w-8 text-red-500 relative -right-40' />
                                </div>
                                <h1 className='w-full h-12 border bg-[#A8D58D] text-xl text-gray-700 font-["nunito"] font-semibold flex items-center justify-center'>
                                    Plant Name
                                </h1>
                            </div>
                        </div>

                        

                        <div className='w-full h-[50%] flex items-center justify-around gap-5 shrink-0 p-6'>
                            {/* Plant card */}
                            <div className='w-80 h-[90%] rounded-3xl flex flex-col border border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden relative'>
                                <img 
                                    src={test} 
                                    className='shrink-0 w-full object-cover z-10'
                                    alt="" 
                                />
                                <div className='w-full h-13 absolute top-0 flex items-center px-3 z-20'>
                                    <h1 className='w-fit h-fit p-1.5 border rounded-2xl flex items-center justify-center bg-[#A8D58D] pb-2 px-2 font-semibold text-gray-700 border-white'>
                                        care guide
                                    </h1>
                                    <MdFavorite className='h-8 w-8 text-red-500 relative -right-40' />
                                </div>
                                <h1 className='w-full h-12 border bg-[#A8D58D] text-xl text-gray-700 font-["nunito"] font-semibold flex items-center justify-center'>
                                    Plant Name
                                </h1>
                            </div>

                            <div className='w-80 h-[90%] rounded-3xl flex flex-col border border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden relative'>
                                <img 
                                    src={test} 
                                    className='shrink-0 w-full object-cover z-10'
                                    alt="" 
                                />
                                <div className='w-full h-13 absolute top-0 flex items-center px-3 z-20'>
                                    <h1 className='w-fit h-fit p-1.5 border rounded-2xl flex items-center justify-center bg-[#A8D58D] pb-2 px-2 font-semibold text-gray-700 border-white'>
                                        care guide
                                    </h1>
                                    <MdFavorite className='h-8 w-8 text-red-500 relative -right-40' />
                                </div>
                                <h1 className='w-full h-12 border bg-[#A8D58D] text-xl text-gray-700 font-["nunito"] font-semibold flex items-center justify-center'>
                                    Plant Name
                                </h1>
                            </div>

                            <div className='w-80 h-[90%] rounded-3xl flex flex-col border border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden relative'>
                                <img 
                                    src={test} 
                                    className='shrink-0 w-full object-cover z-10'
                                    alt="" 
                                />
                                <div className='w-full h-13 absolute top-0 flex items-center px-3 z-20'>
                                    <h1 className='w-fit h-fit p-1.5 border rounded-2xl flex items-center justify-center bg-[#A8D58D] pb-2 px-2 font-semibold text-gray-700 border-white'>
                                        care guide
                                    </h1>
                                    <MdFavorite className='h-8 w-8 text-red-500 relative -right-40' />
                                </div>
                                <h1 className='w-full h-12 border bg-[#A8D58D] text-xl text-gray-700 font-["nunito"] font-semibold flex items-center justify-center'>
                                    Plant Name
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-full h-screen bg-[#E8F5E9] flex md:hidden flex-col items-center rlative gap-2 relative'>

            <button className='w-fit h-fit py-1 px-1.5 font-bold absolute right-4 top-4 rounded-2xl text-gray-700 border'>
                back
            </button>

            {/*  Top section  */}
            <div className=' w-full h-fit bg-white pb-4 relative bg-center bg-cover' >
                <h1 className='z-30 shrink-0 flex w-fit h-fit p-2 pl-4 text-3xl font-semibold font-["Fredoka"] items-center md:justify-center text-gray-600'>
                    Fl
                    <SiOverleaf className='text-[26px] text-gray-700' />
                    raSc
                    <IoSearch className='text-[24px] text-gray-700 relative top-1 font-extrabold rotate-90'/>
                    pe
                </h1>

                <h1 className='z-30 pl-4 text-2xl font-["nunito"] font-bold text-[#285943]'>
                    Gallery
                </h1>
                <p className='z-50 pl-4 text-[18px] font-["nunito"] max-w-[90%] text-gray-700'>
                    Your plants discoveries, stored for a greener tomorrow.
                </p>
            </div>

            {/*  Search  */}
            <input 
                type="text"
                placeholder='Enter plant name' 
                className='w-[90%] h-fit p-2 pl-4 border rounded-3xl bg-white'   
            />

            {/*  Tabs  */}
            <div className='shrink-0 w-[90%] flex items-center justify-around'>

                <button className=' w-fit px-3 py-1.5 border font-semibold font-["nunito"] rounded-3xl text-gray-700 bg-[#A8D58D] cursor-pointer transition-all duration-300 hover:bg-[#579037d8]'>
                    All
                </button>

                <button className=' w-fit px-3 py-1.5 border font-semibold font-["nunito"] rounded-3xl text-gray-700 bg-[#A8D58D] cursor-pointer transition-all duration-300 hover:bg-[#579037d8]'>
                    Favorites
                </button>

                <button className=' w-fit px-3 py-1.5 border font-semibold font-["nunito"] rounded-3xl text-gray-700 bg-[#A8D58D] cursor-pointer transition-all duration-300 hover:bg-[#579037d8]'>
                    Care Guide
                </button>
            </div>

            {/*  Plants  */}
            <div className='w-full flex-1 min-h-0 overflow-x-hidden overflow-y-auto scrollbar-none flex flex-col p-3 gap-3 bg-center bg-cover'>

                {/*  Plants  */}
                <div className='shrink-0 w-full h-40 border rounded-xl overflow-hidden p-2 flex items-center justify-center bg-[#a7d58da4] backdrop-blur-4xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <div className='w-full h-full overflow-hidden rounded-xl'>
                        <img 
                            src={test}
                            alt="plant" 
                            className='w-full object-cover'
                        />
                    </div>
                </div>

                <div className='shrink-0 w-full h-40 border rounded-xl overflow-hidden p-2 flex items-center justify-center bg-[#a7d58da4] backdrop-blur-4xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <div className='w-full h-full overflow-hidden rounded-xl'>
                        <img 
                            src={test}
                            alt="plant" 
                            className='w-full object-cover'
                        />
                    </div>
                </div>

                <div className='shrink-0 w-full h-40 border rounded-xl overflow-hidden p-2 flex items-center justify-center bg-[#a7d58da4] backdrop-blur-4xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <div className='w-full h-full overflow-hidden rounded-xl'>
                        <img 
                            src={test}
                            alt="plant" 
                            className='w-full object-cover'
                        />
                    </div>
                </div>

                <div className='shrink-0 w-full h-40 border rounded-xl overflow-hidden p-2 flex items-center justify-center bg-[#a7d58da4] backdrop-blur-4xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
                    <div className='w-full h-full overflow-hidden rounded-xl'>
                        <img 
                            src={test}
                            alt="plant" 
                            className='w-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Gallery