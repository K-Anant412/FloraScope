import React from 'react'

const FeatureCard = ({image, title, text}) => {
  return (
    <div className='border-2 h-full md:w-[18%] rounded-3xl flex flex-col items-center justify-center border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
    
        <div className='w-[45%] h-[50%] rounded-[50%] overflow-hidden bg-center bg-cover' style={{backgroundImage: `url(${image})`}}></div>
            <h1 className='w-full h-fit flex items-center justify-center text-xl font-["nunito"] font-bold text-[#2b532a]'>{title}</h1>         
            <p className='w-[90%] font-semibold mt-1 h-fit flex items-center justify-center text-center'>
                {text}
            </p> 
    
    </div>
  )
}

export default FeatureCard