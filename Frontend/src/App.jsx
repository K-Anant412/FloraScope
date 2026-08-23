import { useState } from 'react'
import desktop_bg from '../public/Desktop_image/desktop_bg.png';
import desktop_bg_sticker from '../public/Desktop_image/desktop_bg_sticker.png';

import phone_bg from '../public/Phone_image/phone_bg.jpg';
import phone_bg_sticker from '../public/Phone_image/phone_bg_sticker.png';
import './App.css'

function App() {

  //  background color: #E8F5E9
  //  Primary color: #4F9D4D
  //  Secondary color: #A8D58D
  //  Accent color: #F8E7A2
  //  Dark color: #285943

  return (
    <>
      <section className="relative w-screen h-screen overflow-hidden">

        {/* Desktop background */}
        <div
          className="absolute inset-0 hidden md:block bg-center bg-cover"
          style={{
            backgroundImage: `url(${desktop_bg})`,
          }}
        />

        {/* Mobile background */}
        <div
          className="absolute inset-0 block md:hidden bg-center bg-cover"
          style={{
            backgroundImage: `url(${phone_bg})`,
          }}
        />

        {/* Login / Registration */}
        <div className="relative z-30 w-full h-full overflow-hidden flex items-center justify-start md:pl-20 p-5">

          {/* Login card */}
          <div className="border rounded-2xl md:w-[35%] w-full md:h-[80%] h-[60%] relative md:-top-10 md:left-40 border-gray-400 -top-28 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] flex flex-col items-center md:p-5 p-3 bg-[#E8F5E9]">
            
            <h1 className='text-[26px] text-[#285943] font-semibold font-["Fredoka"] h-fit p-3 w-full flex items-center justify-center pt-6'>
              Login for Identify
            </h1>


            <div className='w-full h-fit p-3 flex flex-col items-center justify-center'>

              {/* <label> email </label> */}
              <input type="text" placeholder='enter your email' className=' m-3 border w-[90%] md:w-[70%] h-fit p-2 md:p-3 placeholder:font-["Nunito"] font-semibold rounded-2xl border-gray-500' />
              <input type="password" placeholder='password' className=' m-3 mt-2 border w-[90%] md:w-[70%] h-fit p-2 md:p-3 placeholder:font-["Nunito"] font-semibold rounded-2xl border-gray-500' />

              <button className='border transition-all duration-300 bg-[#4F9D4D] hover:-translate-y-0.5 hover:bg-[#3d763b] text-white font-["Fredoka"] text-2xl font-semibold p-1 mt-6 w-[90%] h-fit rounded-[10px] border-gray-500' >
                login
              </button>
            </div>

            <p className='text-sm flex gap-1'>
              Dont have an account? 
              <a href="#" className='font-semibold text-[#4F9D4D] transition-all duration-200 cursor-pointer hover:text-[#41803f]'>create here</a>
            </p>

          </div>

        </div>

        {/* Desktop foreground */}
        <div
          className="absolute inset-0 hidden md:block z-40 bg-center bg-cover pointer-events-none"
          style={{
            backgroundImage: `url(${desktop_bg_sticker})`,
          }}
        />

        {/* Mobile foreground */}
        <div
          className="absolute inset-0 block md:hidden z-40 bg-center bg-cover pointer-events-none"
          style={{
            backgroundImage: `url(${phone_bg_sticker})`,
          }}
        />

      </section>
    </>
  )
}

export default App
