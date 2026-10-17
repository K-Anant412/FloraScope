import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

//  Service
import { plantService } from '../service/api';

//  Icons
import { MdOutlineCancel } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

//  Images
import pot from '../assets/Desktop_image/plant_pot.png';
import polar from '../assets/Desktop_image/polar.png';

const PlantWindow = ({plant, onClose}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    if (!plant) return null;

    const formattedDate = new Date(plant.scan).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                });

    const toggleLike = async(id)=>{
            try {
                const response = await plantService.plantFavorite(id);

                if(!response){
                    console.log(" API error 4000");
                }

                console.log("plant info updated");
                
            } catch (error) {
            console.log(error.message);  
            }
        }
    
    // const handleCare = async() =>{
    //     try {
    //         const ifExist = await plantService.plantCareSearch(plant.id);
    //         let careData;

    //         if(ifExist?.success){
    //             careData = ifExist.data.data;
    //         }else{
    //             const newSearch = await plantService.plantCareDetails(plant.scientific);
                
    //             if(!newSearch?.success){
    //                 alert("Unable to fetch plant care details");
    //                 return;
    //             }

    //             careData = newSearch.data.data;
    //         }

    //         onCare(careData);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    return (
        <>
            <div 
                onClick={onClose}
                className='top-0 left-0 absolute z-50 w-full h-full flex items-center justify-center bg-black/70'>
                    {/*  Plant that selected */}
                    <div className='w-250 h-150 border border-white rounded-2xl bg-white flex relative overflow-hidden shadow-[0_5px_15px_rgba(43,83,42,0.12)]'>
                        {/*  plant image  */}
                        <img src={polar}
                                className='w-120 absolute -left-10 top-10 z-50 drop-shadow-[0_12px_12px_rgba(0,0,0,0.4)]'
                            alt="" />
                        <div className='relative flex flex-col items-center justify-center shrink-0 w-[40%] h-full bg-[#A8D58D]'>
                            
                            <div className='w-[68%] h-70 relative -top-5 border-2 border-black z-40 bg-center bg-cover'>
                                <img 
                                className='h-full object-cover'
                                src={plant.image} alt="" />
                            </div>
                            <div className='z-40 h-full w-fit flex flex-col items-center justify-center gap-0.5 absolute -right-6'>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                                <div className='w-10 h-10 border-0 rounded-[50%] bg-white'></div>
                            </div>

                        </div>
                        {/*  Plnat info  */}
                        <div className='relative h-full flex-1 flex flex-col items-center gap-4 p-5 z-40'>

                            <button
                                onClick={onClose}
                                className=' w-10 absolute right-1 top-1 h-10 border-none flex items-center justify-center rounded-[50%] bg-red-400 transition-all duration-200 cursor-pointer hover:bg-red-500'>
                                <MdOutlineCancel className='text-4xl text-white' />
                            </button>

                            <button
                                onClick={() => navigate(`/plants/${plant.id}/care`)}
                                 
                                className='z-30 cursor-pointer transition-all duration-200 hover:bg-[#cef9d1] w-fit h-fit text-xl border rounded-3xl px-3 pt-1.5 bg-[#E8F5E9] flex items-center justify-center font-bold pb-2 text-[#285943] absolute bottom-4 right-4'>
                                Care Guide
                            </button>

                            <button className='z-30 cursor-pointer transition-all duration-200 hover:bg-red-500 w-fit h-fit pt-1.5 pb-2 px-3 flex items-center gap-1 text-xl rounded-3xl bg-red-400  font-bold text-white absolute bottom-4 right-55'>
                                <RiDeleteBinLine />
                                Remove
                            </button>

                            <h1 className='w-full h-fit text-4xl font-["nunito"] font-bold text-[#285943]'>
                                {plant.name}
                            </h1>

                            <div className='shrink-0 flex flex-col h-full w-full font-["nunito"] gap-2'>
                                <p className='w-full h-fit font-medium leading-tight text-gray-700'>
                                    {plant.disc}
                                </p>

                                <div className='w-[80%] h-fit grid grid-cols-2 p-3 gap-4 z-30'>

                                    <h1 className='w-full flex flex-col border h-fit p-2 rounded-xl gap-1 text-xl font-semibold bg-[#E8F5E9]'>
                                        Scaned Date:
                                        <p className='text-gray-600 flex items-center justify-center'>
                                            {formattedDate}
                                        </p>
                                    </h1>

                                    <h1 className='w-full flex flex-col border h-fit p-2 rounded-xl gap-1 text-xl font-semibold bg-[#E8F5E9]'>
                                        Scientific Name:
                                        <p className='text-gray-600 flex items-center justify-center wrap-break-word'>
                                            {plant.scientific}
                                        </p>
                                    </h1>
                                    <h1 className='w-full flex flex-col border h-fit p-2 rounded-xl gap-1 text-xl font-semibold bg-[#E8F5E9]'>
                                        Family:
                                        <p className='text-gray-600 flex items-center justify-center'>
                                            {plant.family}
                                        </p>
                                    </h1>
                                    <h1 className='w-full flex flex-col border h-fit p-2 rounded-xl gap-1 text-xl font-semibold bg-[#E8F5E9]'>
                                        Confidence Score:
                                        <p className='text-gray-600 flex items-center justify-center'>
                                            {plant.score}
                                        </p>
                                    </h1>

                                </div>

                                <button
                                    onClick={()=>toggleLike(plant.id)} 
                                    className='z-30 w-[76%] cursor-pointer h-fit p-3 flex items-center justify-center border-2 rounded-3xl ml-3 text-xl font-bold text-[#285943] border-[#285943] transition-all duration-200 hover:bg-[#285943] hover:text-white'>
                                    {plant.is_favorite ? "Remove From Favoritem" : "Add To Favorites"}
                                </button>

                                <img 
                                    className='h-100 absolute bottom-1 z-10 -right-20'
                                    src={pot} 
                                    alt="" 
                                />

                            </div>
                        </div>
                    </div>
            </div>
        </>
  )
}

export default PlantWindow