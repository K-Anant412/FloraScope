import React from 'react'

import test from '../assets/Desktop_image/test1.jpg';
import bg from '../assets/Phone_image/bgcare.jpg';

const CarePhone = () => {
  return (
    <section className='md:hidden flex flex-col items-center w-full h-screen overflow-y-auto scrollbar-none bg-center bg-cover relative' style={{backgroundImage:`url(${bg})`}}>
     {/*  Plant Image  */}
      <div className='w-full h-70 bg-center bg-cover rounded-bl-[55%] shadow-black/70 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]' style={{backgroundImage:`url(${test})`}}></div>
      
      <h1 className='w-full h-fit flex my-1 flex-col py-1 pl-3 text-[24px] leading-tight font-["nunito"] font-extrabold text-[#353f35]'>
        Plant Name Too Long
        <p className='font-medium text-xl text-gray-800'>
          scientific name also here, down
        </p>
      </h1>

      <div className='w-[97%] h-fit min-h-80 border border-black/40 rounded-2xl  bg-white/40 p-1 font-medium text-gray-700 leading-relaxed shadow-black/50 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, similique nulla aspernatur quae repudiandae sapiente ratione. Alias repellat, cum quia molestias temporibus saepe unde doloremque cumque eaque in vitae ratione ab laborum explicabo ad natus error, sapiente minima repudiandae. Incidunt quia veniam, laborum molestias quae natus ipsa odio ipsum voluptatibus aut delectus repellendus veritatis autem accusantium at. Ea, dolorem quis?
      </div>


    </section>
  )
}

export default CarePhone