import React, { useEffect, useState, useContext } from 'react'
import { plantService } from '../service/api';
import { AuthContext } from '../context/AuthContext';
import ProfileImg from '../assets/Desktop_image/profile.jpg'
import PlantCard from '../components/PlantCard';
import { MdAlternateEmail } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const Profile = () => {
  
  const {user} =  useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

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
      setUserName(user.name)
      setUserEmail(user.email)
      fetch_plant();
    }

  }, [user])
  

  return (
    <section className='border-4 w-full h-full flex items-center justify-center md:p-6 pt-0 bg-cover bg-center'>

      <div className='relative w-full h-full overflow-hidden md:rounded-3xl flex flex-col'>

        <div className='w-full md:h-[28%] h-40 border-b-2 bg-center bg-cover absolute bg-white overflow-hidden'>
          <img src={ProfileImg} alt="desktop Profile" className='w-full h-full cover' />
        </div>

        {/*  Profile header---> User image, name */}
        <div className='shrink-0 w-full h-fit md:h-[50%] flex items-center md:gap-10 z-50 p-3 md:p-5 relative md:top-0 py-4.5 gap-3'>

          <div className='md:w-[13%] w-30 md:h-45 h-30 rounded-[50%] border-4 relative md:top-15 shrink-0 md:left-5 border-[#E8F5E9] bg-white'>

          </div>

          <h1 className='flex-col gap-0.5 rounded-3xl bg-white h-fit w-50 border text-2xl z-50 relative md:top-15 flex items-center justify-center font-semibold font-["nunito"] p-2'>
            {userName}
            <p className='text-sm font-mono font-normal'>
              join: 2 August 2026
            </p>
          </h1>

        </div>

        

      </div>

    </section>
  )
}

export default Profile