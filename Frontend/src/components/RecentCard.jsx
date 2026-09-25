import React from 'react'

const RecentCard = ({plantName, plantImage, scanDate}) => {
  return (
    <div className='shrink-0 w-60 text-gray-500 h-[85%] bg-[#A8D58D] border-2 rounded-2xl p-2 flex flex-col justify-center items-center'>
        <div className='w-full h-[55%] border rounded-2xl bg-white bg-center bg-cover' style={{backgroundImage: `url(${plantImage})`}}>
                    {/*  Plant Image */}
        </div>
            <h1 className=' w-full h-fit text-xl font-bold pl-4 font-["nunito"] mt-3'>
                {plantName}
            </h1>
            <h1 className='w-full h-fit text-xl font-bold pl-4 font-["nunito"]'>
                Scan on: 
                <p>{scanDate}</p>
            </h1>

            <button className='w-fit h-fit text-xl font-["fredoka"] font-bold text-gray-700 border px-3 py-1 rounded-3xl bg-red-400 transition-all duration-200 hover:bg-red-500 cursor-pointer hover:text-white/80'>
                Remove
            </button>
    </div>
  )
}

export default RecentCard