import React, { useState, useEffect} from 'react'

//  Plant image
import test from '../assets/Desktop_image/test2.jpg';
// Services
import { plantService } from '../service/api'

const PlantCare = () => {

    return (
        <section className='w-full min-h-screen bg-[#E8F5E9] md:p-4 p-2'>
            {/*  Plant care info */}
            <div className='w-full md:h-70 h-fit border rounded-2xl p-2 px-4 flex items-center md:flex-row flex-col gap-3 bg-white'>

                {/*  Plant image  */}
                <div className='md:w-80 w-60 h-60 border rounded-2xl bg-center bg-cover' style={{backgroundImage: `url(${test})`}}>

                </div>
                {/*  Plant basic info */}
                <div className='md:flex-1 md:h-60 rounded-2xl border flex p-3 gap-2'>

                    <div className='h-full flex flex-col pl-4 justify-center md:gap-3 border-r-3 pr-3'>
                        <h1 className='h-fit md:text-[20px] font-["nunito"] font-bold'>
                            Plant Name
                        </h1>
                        <h1 className='h-fit md:text-[20px] font-["nunito"] font-bold flex items-center gap-2'>
                            Scientific Name:
                            <p className='font-semibold'>
                                adefefvzdss
                            </p>
                        </h1>
                        <h1 className='h-fit md:text-[20px] font-["nunito"] font-bold flex items-center gap-2'>
                            Scanned Date:
                            <p className='font-semibold'>
                                12 September 2026
                            </p>
                        </h1>
                        <h1 className='h-fit md:text-[20px] font-["nunito"] font-bold flex items-center gap-2'>
                            Confidence Score:
                            <p className='font-semibold'>
                                98%
                            </p>
                        </h1>
                    </div>

                    <div className='h-full w-100 flex-col md:flex hidden border-2'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlantCare