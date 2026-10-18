import React, { useState, useEffect } from 'react'
import Homepage from '../components/Homepage';
import MiddleHomepage from '../components/MiddleHomepage';
import HomeFooter from '../components/HomeFooter';
import PlantIdentification from './PlantIdentification';
import PlantCare from './PlantCare';
import CarePhone from '../components/CarePhone';

const Home = () => {

  const [isPlant, setIsPlant] = useState(false);
  const [plantDetails, setPlantDetails] = useState([]);
  const [plantImage, setPlantImage] = useState(null);
  const [userProfile, setUserProfile] = useState(false);

  const [isCare, setIsCare] = useState(false);
  const [careDetails, setCareDetails] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if(!user){
      return <>
        <h1 className='w-screen h-screen md:text-4xl text-2xl font-bold font-["nunito"] bg-[#E8F5E9]'>
          Please Login / Register First
        </h1>
      </>
    }
    setUserProfile(user)
    
  }, [])
  
  const handleCareData = (data) =>{
    setCareDetails(data);
    setIsCare(true);
  }

  return (
    <>
        <section className='w-screen h-screen overflow-x-hidden overflow-y-auto scrollbar-none'>
            
              {
                isPlant?
                <PlantIdentification 
                  plantDetails={plantDetails} 
                  setIsPlant={setIsPlant} 
                  isPlant={isPlant} 
                  plantImage={plantImage} 
                /> 
                :isCare ?
                <PlantCare 
                  plantDetails={careDetails}
                  setIsCare={setIsCare}
                  plantImage={plantImage}
                  isCare={isCare}
                />
                :
                <>
                  <Homepage setIsPlant={setIsPlant} setPlantDetails={setPlantDetails} setPlantImage={setPlantImage} />
                  <MiddleHomepage />
                  <HomeFooter />
                  <CarePhone />
                </>
              
              }

        </section>
    </>
  )
}

export default Home