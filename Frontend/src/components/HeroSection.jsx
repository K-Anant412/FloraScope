import React from 'react'

const HeroSection = () => {
  return (
    <div className='shrink-0 w-full h-full flex md:flex-row flex-col items-center justify-center'>

              {/*  left Box  */}
        <div className='w-full md:w-[50%] h-full flex flex-col md:justify-center items-center md:p-0 p-3 md:pt-0 pt-10 relative md:left-30'>
            <div className='md:w-[60%] w-full h-60 md:h-70 border-2 rounded-3xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] bg-center bg-cover' style={{backgroundImage: "url('/Desktop_image/demo_image.jpg')"}}> </div>
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

              {/*  right Box  */}
        <div className='flex md:w-[50%] w-full h-full flex-col items-center justify-center md:p-0 p-3'>

                <div className='md:w-[60%] w-full flex-col h-50 md:h-70 border-2 rounded-3xl bg-white md:mt-6 -mt-2 relative md:-left-10 border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] flex items-center justify-center gap-4'>
                    <button className='w-fit h-fit md:text-3xl font-["nunito"] font-extrabold border p-2 md:px-4 px-3 text-2xl rounded-3xl bg-blue-300 text-white transition-all duration-300 hover:bg-blue-400 shadow-2xl hover:shadow-xl'>
                      Upload Image
                    </button>
                    <p className='font-["nunito"] text-xl font-bold'>or, drop a file</p>
                </div>
                
        </div>

    </div>
  )
}

export default HeroSection