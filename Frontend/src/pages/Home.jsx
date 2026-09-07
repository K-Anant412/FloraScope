import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Middle from '../components/Middle'
import Profile from '../pages/Profile'

import PlantInfo from './PlantInfo'
const Home = () => {

  const [userProfile, setUserProfile] = useState(false);
  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState([]);

  return (
    <>
        <section className='z-50 w-full h-full flex flex-col items-center overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>
            {/*  ---Navbar--- */}
            <Navbar setUserProfile={setUserProfile}/>
          <div className='w-full min-h-full h-fit md:p-10 flex flex-col items-center'>
            {!userProfile ? (
              <>
                <HeroSection setIsPlant={setIsPlant} setPlantDetails={setPlantDetails} />
                <Middle />
                { isPlant && 
                  <PlantInfo plantDetails={plantDetails} /> 
                }
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