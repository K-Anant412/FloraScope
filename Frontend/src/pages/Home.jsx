import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Middle from '../components/Middle'
import Profile from '../pages/Profile'
const Home = () => {

  const [userProfile, setUserProfile] = useState(false);

  return (
    <>
        <section className='z-50 w-full h-full flex flex-col overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>
            {/*  ---Navbar--- */}
            <Navbar setUserProfile={setUserProfile}/>
          <div className='w-full min-h-full h-fit md:p-10 flex flex-col items-center '>
            {!userProfile ? (
              <>
                <HeroSection />
                <Middle />
              </>
            ) : (

              <Profile />
            )
            }

          </div>

        </section>
    </>
  )
}

export default Home