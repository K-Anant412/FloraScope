import React, { useEffect, useState } from 'react'

const Profile = ({setPlantHistory}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = async() =>{
      const user = localStorage.getItem('user')
      

    }
  }, [])
  
  

  return (
    <section className='w-full h-full flex items-center justify-center md:p-6 p-3 pt-0'>

      <div className='relative w-full h-full border-2 overflow-hidden rounded-3xl border-black flex flex-col'>

        <div className='w-full h-[28%] border-b-2 bg-white absolute'></div>

        {/*  Profile header---> Card, Graph */}
        <div className='shrink-0 w-full h-[50%] flex flex-col z-50 border border-black p-0 md:p-5'>

          <div className='w-[13%] h-45 rounded-[50%] border-4 relative top-5 left-5 border-[#E8F5E9] bg-white'>

          </div>

          <h1 className='text-2xl z-50 relative top-5 font-semibold'>User Name</h1>

        </div>

        <button
          className='w-50 px-0 py-3 flex items-center justify-center h-fit text-2xl font-sans font-semibold cursor-pointer border-0 rounded-3xl text-white bg-[#4F9D4D] transition-all duration-300 hover:bg-[#4b8649] hover:text-white/40 relative top-5 left-5'
        >
          Check History
        </button>

      </div>

    </section>
  )
}

export default Profile