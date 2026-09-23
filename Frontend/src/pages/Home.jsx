import React, { useState, useEffect } from 'react'
import Homepage from '../components/Homepage'
import MiddleHomepage from '../components/MiddleHomepage'
import HomeFooter from '../components/HomeFooter'
import PlantIdentification from './PlantIdentification'
import Profile from '../pages/Profile'

const Home = () => {

  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState([]);
  const [plantImage, setPlantImage] = useState(null);
  const [userProfile, setUserProfile] = useState(false);

  return (
    <>
        <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>
            
              {
                isPlant?
                <PlantIdentification plantDetails={plantDetails} setIsPlant={setIsPlant} isPlant={isPlant} plantImage={plantImage} /> :
                <>
                  <Homepage setIsPlant={setIsPlant} setPlantDetails={setPlantDetails} setPlantImage={setPlantImage} />
                  <MiddleHomepage />
                  <HomeFooter />
                  <Profile />
                </>
              
              }

        </section>
    </>
  )
}

export default Home