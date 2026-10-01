import React, { useState, useEffect, useContext } from 'react'
// Service
import { plantService } from '../service/api';
// Components
import Navbar from '../components/Navbar';
//  Plant image
import test from '../assets/Desktop_image/test2.jpg';
// Icons
import { SlLike } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";

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
        <section className='w-full max-h-screen bg-[#E8F5E9] p-2 md:p-0 flex flex-col items-center overflow-y-auto scrollbar-none relative'>

            <div className='w-full flex-1 border flex'>
            {/*  Left section  */}
                <div className='shrink-0 relative w-[20%] min-h-screen bg-[#A8D58D] flex flex-col items-center'>
                    <h1 className='w-full text-5xl font-["nunito"] font-extrabold flex pl-8 pt-20 text-[#285943]'>
                        Your Plant Gallery
                    </h1>
                    <p className='w-[76%] h-fit text-[18px] pt-5 font-semibold text-gray-700'>
                        Explore your past scans, revisit the plants you've identified and get care guides whenever you need.
                    </p>

                    <div className='w-[70%] h-40 border rounded-2xl absolute bottom-15 bg-[#E8F5E9] flex flex-col'>
                        <h1 className='w-full h-fit text-2xl font-bold font-["nunito"] flex items-center justify-center pt-10'>
                            Total Plants:
                        </h1>
                        <p className='w-full h-fit text-2xl text-gray-700 flex items-center justify-center'>
                            12
                        </p>
                    </div>
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

                    <div className='w-full flex-1 border-2 flex flex-col gap-3 overflow-y-auto scrollbar-none rounded-2xl'>
                        
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Gallery