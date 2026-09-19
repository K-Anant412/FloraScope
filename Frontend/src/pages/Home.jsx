import React, { useState, useEffect } from 'react'
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
        <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>
            
              <Homepage setIsPlant={setIsPlant} setPlantDetails={setPlantDetails} />
              <MiddleHomepage />
              <HomeFooter/>
              {/* <PlantIdentification plantDetails={plantDetails} /> */}

        </section>
    </>
  )
}

export default Home