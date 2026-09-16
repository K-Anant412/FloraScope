import React from 'react'

const FeatureCard = ({image, title, text, sr=false, sr_num}) => {
  return (
    <div className='bg-[#E8F5E9] h-full md:w-[18%] w-full rounded-3xl flex flex-col items-center justify-center border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
    
      { sr ? 
        <>
          <div className='w-full h-[50%] flex items-center justify-center'>
            <h2 className='w-[27%] h-[60%] rounded-[50%] text-3xl font-bold bg-[#F8E7A2] font-["nunito"] border flex items-center justify-center'>{sr_num}</h2>
            <div className='w-[45%] h-full rounded-[50%] overflow-hidden bg-center bg-cover' style={{backgroundImage: `url(${image})`}}></div>
          </div>
        </>
        :
        <div className='w-[45%] h-[50%] rounded-[50%] overflow-hidden bg-center bg-cover' style={{backgroundImage: `url(${image})`}}></div>
      }
            <h1 className='w-full h-fit flex items-center justify-center text-xl font-["nunito"] font-bold text-[#2b532a]'>
              {title}
            </h1>         
            <p className='w-[90%] font-semibold mt-1 h-fit flex items-center justify-center text-center'>
                {text}
            </p> 
    
    </div>
  )
}

export default FeatureCard