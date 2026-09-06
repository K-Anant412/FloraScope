import React from 'react'

const Profile = () => {
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

      </div>

    </section>
  )
}

export default Profile