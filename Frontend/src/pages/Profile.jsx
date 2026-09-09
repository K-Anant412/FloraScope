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

        {/*  Profile body---> Some options */}
        <div className='shrink-0 w-full md:w-[35%] h-[50%] border-2 relative md:-top-14.5 bg-amber-50 rounded-b-3xl md:p-7 p-4 flex flex-col items-center'>

          <a href="#" className='shrink-0 w-full md:w-fit h-fit text-xl gap-1 font-["nunito"] font-semibold flex justify-end items-center px-4 py-2 absolute top-0 right-0 z-50 text-[#4F9D4D] cursor-pointer transition-colors duration-300 hover:text-black'>
            <MdAlternateEmail className='relative top-0.5' />
            {userEmail}
          </a>

          <div className='w-full flex-1 p-2 flex flex-col items-center'>

            <h1 className='w-full h-fit text-2xl font-semibold pt-4 pl-3'>
              Total Scans: 100
            </h1>

            <h1 className='w-full h-fit text-2xl font-semibold pt-4 pl-3'>
              Unique : 100
            </h1>

            <h1 className='w-full h-fit text-2xl font-semibold pt-4 pl-3'>
              Favorite : 100
            </h1>

            <h1 className='w-full h-fit text-2xl font-semibold pt-4 pl-3'>
              How many days : 100
            </h1>

            <button className='w-[80%] gap-1 h-fit border-2 p-2 text-2xl font-bold rounded-3xl mt-4 transition-all duration-300 flex items-center justify-center bg-red-400 text-white hover:bg-red-500'>
              LogOut
              <TbLogout />
            </button>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Profile