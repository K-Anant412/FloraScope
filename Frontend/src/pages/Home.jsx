import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
        <section className='z-50 w-full h-full flex flex-col overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>

          {/*  ---Navbar--- */}
          <Navbar />

          <div className='w-full h-full md:p-10 flex flex-col items-center '>

            <div className='w-full h-full border-2 flex items-center justify-center'>

              <div className='w-full md:w-[50%] h-full flex flex-col justify-center items-center border border-gray-700 md:p-0 p-3'>
                  <div className='md:w-[60%] w-full h-60 md:h-70 border-2 rounded-3xl bg-white'>

                  </div>
                  <h1 className='w-full md:w-[60%] text-4xl md:text-5xl font-["nunito"] font-extrabold mt-4 pl-1'>
                      Plant Information
                  </h1>
                  <h1 className='w-full md:w-[60%] text-4xl md:text-5xl font-["nunito"] font-extrabold pl-1'>
                      By Image
                  </h1>
                  <h1 className='w-full md:w-[60%] mt-2 text-3xl md:text-4xl font-["nunito"] font-extrabold flex items-center gap-3 pl-1'>
                      100% 
                      <p className=' w-fit h-fit p-1 border rounded-3xl px-3 bg-blue-300 text-white' >Free</p>
                  </h1>
              </div>
              <div className='md:flex hidden w-[50%] h-full flex-col items-center justify-center border border-gray-700'>

              </div>

            </div>

          </div>

        </section>
    </>
  )
}

export default Home