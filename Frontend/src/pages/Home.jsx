import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import Middle from '../components/Middle'
import Profile from '../pages/Profile'
import Homepage from '../components/Homepage'
import MiddleHomepage from '../components/MiddleHomepage'
import HomeFooter from '../components/HomeFooter'
import PlantIdentification from './PlantIdentification'
import PlantInfo from './PlantInfo'

const Home = () => {

  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState([]);
  const [userProfile, setUserProfile] = useState(false);

  return (
    <>
        <section className='hidden z-50 w-full h-full flex-col items-center overflow-x-hidden overflow-y-auto scrollbar-none bg-[#E8F5E9]'>
            {/*  ---Navbar--- */}
            
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

        <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>
            
              <Homepage />
              <MiddleHomepage />
              <HomeFooter/>
              <PlantIdentification />

        </section>
    </>
  )
}

export default Home