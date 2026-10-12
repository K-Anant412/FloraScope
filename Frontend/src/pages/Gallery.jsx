import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';

// Service
import { plantService } from '../service/api';

// Components
import Navbar from '../components/Navbar';
import Home from './Home';
import PlantWindow from '../components/PlantWindow';

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
import { MdOutlineCancel } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

// PNGs
import navbar from '../assets/Desktop_image/navbar.png';
import cat from '../assets/Desktop_image/cat.png';

const Gallery = () => {

    const [PlantData, setPlantData] = useState([]);
    const [favorites, setFavorites] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [toggleWindow, setToggleWindow] = useState(false);
    const [currentTab, setCurrentTab] = useState("all");
    const [windowData, setWindowData] = useState(null);

    useEffect(() => {
      const fetchData = async() =>{
        try {
            setIsLoading(true);
            const response = await plantService.plantData();

            if(!response){
                return(
                    <>
                        <h1>Plant Data Not Exist</h1>
                    </>
                )
            }

            setPlantData(response.data.data)
                const favorite_plants = [];
                PlantData.forEach(plant => {
                    if(plant.favorite){
                      favorite_plants.push(plant);  
                    }
                    setFavorites(favorite_plants)
                });
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
      }
      fetchData();
    }, [])
    
    console.log("Plant Data: ", PlantData);

    const handlePlantClick = async(plant) => {
        try {
            const response = await plantService.plantDetails(plant.id);
            const details = response.data.data;

            setWindowData(details[0]);
            setToggleWindow(true);

        } catch (error) {
                console.error(
                "Failed to fetch plant details:",
                error.response?.data || error.message
            );
        }
    }

    const uniquePlants = [
        ...new Map(PlantData.map(plant=>[plant.id, plant])).values()
    ];

    return (
        <>
        <section className='w-full max-h-screen bg-[#E8F5E9] p-2 md:p-0 flex-col items-center overflow-y-auto scrollbar-none relative md:flex hidden'>


        {
            toggleWindow
            &&
            windowData
            &&
            <PlantWindow
                plant={windowData}
                onClose={() =>{
                    setToggleWindow(false);
                    setWindowData(null);
                }
                }
            />
        }

            <NavLink
                to="/"
                className='w-fit h-fit py-2 px-3 border absolute bottom-3 left-3 z-50 rounded-3xl text-xl flex items-center justify-center pb-2 bg-[#E8F5E9] font-bold text-gray-700 font-["nunito"] '>
                back
            </NavLink>

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
                            {uniquePlants.length}
                        </p>
                    </div>
                    <img 
                        src={navbar} 
                        alt="efwef" 
                        className='mt-8'
                    />
                </div>

                {/*  Right sectin  */}
                <div className='h-screen min-h-0 flex-1 border-2 bg-white flex flex-col p-4 '>
                    {/*  Tabs  */}
                    <div className='w-full h-15 flex items-center gap-10 pl-4 p-2 relative'>
                        <ul className='shrink-0 flex items-center h-full min-w-[45%] p-1 justify-around gap-4'>
                            <li 
                                onClick={()=>setCurrentTab("all")}
                                className={`h-full w-40 text-gray-700 border rounded-3xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300
                                  font-["nunito"]
                                  ${
                                    currentTab === "all"
                                    ? "bg-[#2b532a] text-white"
                                    : "text-[#2b532a] hover:bg-[#2b532a] hover:text-white border-[#2b532a] border-2"
                                  }
                                 `}> 
                                All Plants
                            </li>

                            <li 
                                onClick={()=>setCurrentTab("liked")}
                                className={`h-full w-40 text-gray-700 border rounded-3xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300
                                  font-["nunito"]
                                  ${
                                    currentTab === "liked"
                                    ? "bg-[#2b532a] text-white"
                                    : "text-[#2b532a] hover:bg-[#2b532a] hover:text-white border-[#2b532a] border-2"
                                  }
                                 `}> 
                                Favorite
                            </li>

                            <li 
                                onClick={()=>setCurrentTab("care")}
                                className={`h-full w-40 text-gray-700 border rounded-3xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300
                                  font-["nunito"]
                                  ${
                                    currentTab === "care"
                                    ? "bg-[#2b532a] text-white"
                                    : "text-[#2b532a] hover:bg-[#2b532a] hover:text-white border-[#2b532a] border-2"
                                  }
                                 `}> 
                                With Care
                            </li>

                            
                        </ul>

                        <input 
                            type="text" 
                            placeholder='Enter plant name'
                            className='w-[35%] h-[80%] border-2  absolute right-10 rounded-3xl px-5 font-semibold text text-gray-700 text-xl'
                        />
                    </div>

                    <div className='border-2 w-full h-full rounded-3xl p-6 grid grid-cols-3 gap-4 overflow-y-auto scrollbar-none'>
                        {/*  Plant card  */}
                        { currentTab === "all"
                            && 
                            <>
                                {uniquePlants.map((plant)=> (
                                    <div
                                        key={plant.id} 
                                        onClick={()=>handlePlantClick(plant)}
                                        className='w-80 cursor-pointer h-60 border-2 rounded-2xl bg-cover bg-center p-3 flex flex-col items-end justify-end' style={{backgroundImage:`url(${plant.image})`}}>
                                        <h1 className='w-fit h-fit p-1 border flex items-center justify-center rounded-2xl text-xl bg-[#E8F5E9] px-2 font-semibold text-gray-600'>
                                            {plant.name}
                                        </h1>  
                                    </div>
                                ))}
                            </>
                        }
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