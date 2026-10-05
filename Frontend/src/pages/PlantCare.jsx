import React, { useState, useEffect} from 'react'

//  Plant image
import test from '../assets/Desktop_image/test2.jpg';
import spiral from '../assets/Phone_image/spiral.png';
import sticky from '../assets/Phone_image/sticky.png';
// Services
import { plantService } from '../service/api'

const PlantCare = () => {

    // const [plantCareData, setPlantCareData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   const fetchData = async() => {
    //     const response = await plantService.plantCareDetails();
    //   }
    // }, [third])
    

    return (
        <section className='w-full h-screen hidden md:flex gap-4 bg-[#E8F5E9] p-4 relative'>
            {/*  Plant care info */}
            <div className='shrink-0 w-[25%] h-full border rounded-2xl p-4 flex items-center flex-col gap-4 bg-white relative pr-8'>
                <img src={spiral} alt="" className='h-[70%] absolute top-25 -right-17' />
                {/*  Plant image  */}
                <div className='relative w-full h-80 border rounded-4xl bg-center bg-cover' style={{backgroundImage: `url(${test})`}}>
                    <h1 className='w-fit h-fit absolute px-3 py-1 text-xl font-["nunito"] bottom-3 left-3 border rounded-3xl bg-[#E8F5E9] text-[#2b532a] font-semibold'>Plant Name</h1>
                </div>
                
                {/*  Plant basic info */}
                <div className='w-full flex-1 rounded-2xl z-30 flex flex-col items-center justify-end relative pb-9 '>
                    <div className='w-[80%] h-70 flex flex-col gap-3 py-5 px-1 '>

                        <h1 className='w-full h-fit text-4xl flex items-center justify-center font-medium font-["Caveat_Brush"] text-gray-700 border-b-2 border-gray-700'>
                            Plant Name
                        </h1>

                        <h1 className='w-full h-fit flex gap-2 text-xl font-["nunito"] font-semibold'>
                            Scan Date:
                            <p className='font-["Caveat_Brush"] font-normal text-gray-700'>12 Sep 2026</p>
                        </h1>
                        <h1 className='w-full h-fit flex gap-2 text-xl font-["nunito"] font-semibold'>
                            Confidence Score :
                            <p className='font-["Caveat_Brush"] font-normal text-gray-700'>48%</p>
                        </h1>

                    </div>
                </div>
                
            </div>

            {/*  Plant Care  */}
            <div className='h-full flex-1 border rounded-2xl bg-white p-4 pl-8'>
                <div className='w-full h-full bg-[#E8F5E9] rounded-2xl p-2 pl-4 relative flex flex-col gap-3 font-["nunito"]'>
                    <img src={sticky} alt="" className='w-135 absolute -bottom-25 -left-130 z-10' />
                    {/*  heading section  */}
                    <h1 className='w-full h-fit pl-3 pt-4 text-5xl font-["Caveat_Brush"] text-[#2b532a] border-b-2 pb-1.5 border-[#2b532a] border-dashed relative'>
                        Plant Care Guide
                        <p className='font-["nunito"] text-xl text-gray-700 font-semibold'>
                            Here's a simple care guide to help your plant to stay healthy and grow beautifully.
                        </p>

                        <span className='w-fit h-fit px-3 py-1.5 border rounded-3xl absolute top-4 right-4 text-xl font-["nunito"] border-[#2b532a] bg-white text-[#2b532a] font-semibold flex items-center justify-center pb-1'>
                            Easy Care
                        </span>
                    </h1>

                    {/*  Navigation  */}
                    <nav className='w-full h-fit p-2 border rounded-2xl'>

                    </nav>
                </div>
            </div>

        </section>
    )
}

export default PlantCare