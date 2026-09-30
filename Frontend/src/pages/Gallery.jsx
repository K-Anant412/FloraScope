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
        <section className='w-full min-h-screen bg-[#E8F5E9] md:p-4 p-2 flex flex-col items-center md:gap-6 gap-3 overflow-y-auto scrollbar-none relative'>
            <Navbar />

            {/* Plants */}
            <div className='w-full md:w-[95%] h-fit border md:p-6 p-3 flex flex-col rounded-2xl gap-3'>
                {/*  row  */}
                <div className='shrink-0 w-full h-fit flex items-center justify-around flex-col'>

                    <h1 className='w-full h-fit pl-4 text-2xl font-["nunito"] font-semibold'>
                        Your Plants;
                    </h1>

                    <div className='w-full overflow-x-auto scrollbar-none flex gap-6 pl-4'>
                        {/*  Plant  */}
                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>
                    </div>
                </div>

                <div className='shrink-0 w-full h-fit flex items-center justify-around flex-col'>

                    <h1 className='w-full h-fit pl-4 text-2xl font-["nunito"] font-semibold'>
                        Favorites;
                    </h1>

                    <div className='w-full overflow-x-auto scrollbar-none flex gap-6 pl-4'>
                        {/*  Plant  */}
                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>

                        <div className='relative w-60 h-60 border-white/40 shrink-0 rounded-2xl overflow-hidden'>
                            <img 
                                src={test} 
                                alt="not found" 
                                className='h-full w-full object-cover z-10'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Gallery