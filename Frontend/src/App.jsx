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
        <div className="relative z-30 w-full h-full overflow-hidden flex items-center justify-center md:pl-20 p-5">

          {/* Login card */}
          <div className="border rounded-2xl md:w-[65%] w-full md:h-[65%] h-[60%] relative md:-top-10 border-gray-400 -top-28 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] flex items-center md:p-0 p-3 bg-[#E8F5E9]">
            {/*  Input fields  */}
            <div className='md:w-[50%] w-full h-full md:border-r-2 border-gray-400 flex flex-col items-center'>

              <h1>FloraScope</h1>

              

            </div>

            {/*  Open section, visible only for desktop  */}
            <div className='md:flex hidden '>

            </div>

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
