import React from 'react'

const Profile = () => {
  return (
    <section className='w-full h-full flex items-center justify-center md:p-6 p-3 pt-0'>

      <div className='w-full h-full border-2 rounded-3xl border-black flex flex-col'>

        {/*  Profile header---> Card, Graph */}
        <div className='shrink-0 w-full h-[50%] flex items-center justify-center p-0 md:p-5'>

          {/*  Profile Card */}
          <div className='md:w-60 w-[80%] md:h-full h-[80%] border border-black rounded-2xl flex flex-col items-center p-2'>
              <div className='w-[45%] h-[39%] bg-white border rounded-[50%]'></div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Profile