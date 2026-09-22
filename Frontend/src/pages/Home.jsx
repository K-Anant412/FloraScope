import React, { useState, useEffect } from 'react'
import Homepage from '../components/Homepage'
import MiddleHomepage from '../components/MiddleHomepage'
import HomeFooter from '../components/HomeFooter'
import PlantIdentification from './PlantIdentification'
import PlantInfo from './PlantInfo'
import Profile from '../pages/Profile'

const Home = () => {

  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState([]);
  const [userProfile, setUserProfile] = useState(false);

  return (
    <>
        <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>
            
              {isPlant && <PlantIdentification plantDetails={plantDetails} setIsPlant={setIsPlant} isPlant={isPlant} />}
              <Homepage setIsPlant={setIsPlant} setPlantDetails={setPlantDetails} />
              <MiddleHomepage />
              <HomeFooter />
              {/* <Profile />

              { isPlant && <PlantIdentification plantDetails={plantDetails} />} */}

        </section>
    </>
  )
}

export default Home