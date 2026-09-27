import React from 'react'

//  Plant image
import test from '../assets/Desktop_image/test2.jpg';

const Gallery = () => {
  return (
    <section className='w-full min-h-screen bg-[#E8F5E9] md:p-4 p-2 flex items-center'>
        <div className='border w-full h-fit md:p-4 p-2 flex overflow-hidden'>
            {/*  Current Scan Plant's */}
            <div className='md:w-[60%] w-full h-fit overflow-y-auto scrollbar-auto md:p-4 p-2'>

                {/*  Plant card  */}
                <div className='w-140 h-80 border-2 rounded-2xl bg-white flex overflow-hidden p-2 gap-4'>
                    {/*  Plant Image */}
                    <div className='w-[40%] h-full bg-amber-500 rounded-2xl shrink-0 bg-center bg-cover' style={{backgroundImage: `url(${test})`}}>

                    </div>

                    {/*  Plant Basic Information */}
                    <div className='h-full flex-1 bg-amber-50 border-2 rounded-2xl flex flex-col p-3 gap-2'>
                        <h1 className='shrink-0 w-full h-fit pb-1 border-b-2 text-2xl font-["nunito"] font-bold text-[#285943] flex items-center justify-center'>
                            Plant Name
                        </h1>

                            <ul className='w-full h-fit flex flex-col gap-2 shrink-0'>
                                <li className='text-xl font-semibold border-b-2'>
                                    Scientific Name:
                                    <p className='font-normal text-[18px]'>- afewfwenfjwneenfui</p>
                                </li>

                                <li className='text-xl font-semibold border-b-2'>
                                    Scan Date:
                                    <p className='font-normal text-[18px]'>- 12 Setpember 2026</p>
                                </li>

                                <li className='text-xl font-semibold border-b-2'>
                                    Care Guide:
                                    <p className='font-normal text-[18px]'>- Not Exist</p>
                                </li>

                            </ul>

                            <footer className='w-full h-fit shrink-0 flex items-center justify-end gap-4'>
                                <button className='w-10 h-10 border-2 rounded-[50%]'>

                                </button>

                                <button className='w-10 h-10 border-2 rounded-[50%]'>

                                </button>
                            </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery