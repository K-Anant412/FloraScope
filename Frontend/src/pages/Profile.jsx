import React, { useEffect, useState, useContext } from 'react'
import { plantService } from '../service/api';
import { AuthContext } from '../context/AuthContext';

// icons
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";

// images
import camera from '../assets/Desktop_image/camera.png'
import profile from '../assets/Desktop_image/profile_image.jpg'
import banner from '../assets/Desktop_image/profile_banner.png'

const Profile = () => {
  
  // const {user} =  useContext(AuthContext);
  // const [userName, setUserName] = useState('');
  // const [userEmail, setUserEmail] = useState('');

  // const [plantHistory, setPlantHistory] = useState([]);
  // const [fetchingData, setFetchingData] = useState(true);
  // const [requestError, setRequestError] = useState(null);

  // useEffect(() => {
  //   console.log("Current user state in Profile:", user);
  //   if (!user) {
  //   console.log("fetch_plant did not run because user is null/falsy");
  //   return;
  // }
  //   const fetch_plant = async() =>{
  //     try {
  //       setFetchingData(true);
  //       setRequestError(null);

  //       const response = await plantService.plantHistory();

  //       setPlantHistory(response.data.data || []);
  //       console.log(response.data.data);
      
  //     } catch (error) {
  //       if (error.response?.status ===400 && error.response?.data?.message ==="Empty dataset."){
  //         setPlantHistory([]);
  //       }
  //     } finally {
  //       setFetchingData(false)
  //     }
  //   };

  //   if(user) {
  //     setUserName(user.name)
  //     setUserEmail(user.email)
  //     fetch_plant();
  //   }

  // }, [user])
  

  return (
    <section className='w-full h-full flex items-center justify-center md:p-6 bg-[#E8F5E9]'>

      <div className='w-full h-full border border-black rounded-3xl flex flex-col items-center overflow-hidden'>

        {/*  Header section for profile image, name, edit option */}
        <div className='w-full h-[35%] flex items-center md:pl-10 md:p-4 gap-5 bg-center bg-cover' style={{backgroundImage: `url(${banner})`}}>

          {/*  profile image  */}
          <div className='h-55 w-55 shrink-0 rounded-[50%] relative bg-center bg-cover border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]' style={{backgroundImage:`url(${profile})`}}>

            <div className='w-20 h-20 rounded-[50%] absolute bottom-0 right-0 bg-center bg-cover' style={{backgroundImage: `url(${camera})`}}>

            </div>
          </div>

          {/*  profile basic info  */}
          <div className='h-full w-[50%] shrink-0 flex flex-col items-center justify-center gap-2 pl-5'>

            <h1 className='w-full h-fit md:text-4xl font-["Fredoka"] font-semibold text-[#285943]'>
              Aqua
            </h1>
            <h2 className='w-full h-fit text-2xl font-["nunito"] font-semibold text-[#3f8a68]'>
              Plants make life better
            </h2>

            <h2 className='w-full h-fit text-xl font-["nunito"] font-semibold text-[#3f8a68] flex items-center gap-2'>
              <IoMailOpenOutline />
              user@example.com
            </h2>
            <h2 className='w-full h-fit text-xl font-["nunito"] font-semibold text-[#3f8a68] flex items-center gap-2'>
              <IoCalendarClearOutline />
              30/03/2005
            </h2>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Profile