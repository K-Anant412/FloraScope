import React, { useEffect, useState, useContext } from 'react'
import { plantService } from '../service/api';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  
  const {user} =  useContext(AuthContext);
  const [plantHistory, setPlantHistory] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [requestError, setRequestError] = useState(null);

  useEffect(() => {
    console.log("Current user state in Profile:", user);
    if (!user) {
    console.log("fetch_plant did not run because user is null/falsy");
    return;
  }
    const fetch_plant = async() =>{
      try {
        setFetchingData(true);
        setRequestError(null);

        const response = await plantService.plantHistory();

        setPlantHistory(response.data.data || []);
        console.log(response.data.data);
      
      } catch (error) {
        if (error.response?.status ===400 && error.response?.data?.message ==="Empty dataset."){
          setPlantHistory([]);
        }
      } finally {
        setFetchingData(false)
      }
    };

    if(user) {
      fetch_plant();
    }

  }, [user])
  

  return (
    <section className='border-4 w-full h-full flex items-center justify-center md:p-6 pt-0 bg-cover bg-center'>

      <div className='relative w-full h-full overflow-hidden md:rounded-3xl flex flex-col'>

        <div className='w-full md:h-[28%] h-40 border-b-2 bg-center bg-cover absolute' style={{backgroundImage: "url('/Desktop_image/profile.jpg')"}}></div>

        {/*  Profile header---> Card, Graph */}
        <div className='shrink-0 w-full h-[50%] flex flex-col z-50 p-0 md:p-5'>

          <div className='md:w-[13%] w-30 md:h-45 h-30 rounded-[50%] border-4 relative md:top-15 top-26 left-5 border-[#E8F5E9] bg-white'>

          </div>

          <h1 className='text-2xl z-50 relative md:top-15 top-26 md:left-10 left-5 font-semibold'>User Name</h1>

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