import React, { useEffect, useState, useContext } from 'react'
import { plantService } from '../service/api';
import { AuthContext } from '../context/AuthContext';

// Service imports
import { userService } from '../service/api';

// icons
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";

// images
import camera from '../assets/Desktop_image/camera.png'
import profile from '../assets/Desktop_image/profile_image.jpg'
import banner from '../assets/Desktop_image/profile_banner.png'
import plant from '../assets/Desktop_image/plant.png'
import microscope from '../assets/Desktop_image/microscope.png'

const Profile = () => {

  const [click, setClick] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userHistory, setUserHistory] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(!user) return;
    console.log(user);
  }, [])

  const handleProfile = async() =>{
    try {
      const user = await userService.getUserData();
      const user_history = await userService.getProfile();

      if(!user){
        alert("User not logged-in");
        return;
      }

      setUserData(user.data.data)
      console.log("User Data: ", user.data.data);
      console.log("Profile: ", user_history.data.data);
      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section className='w-full min-h-screen bg-[#E8F5E9]'>
      <div className='w-full h-screen border-2 border-black flex flex-col md:p-0 p-3 md:gap-8 gap-4'>

        {/*  Profile header  */}
        <div className='relative border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] w-full md:h-60 h-fit md:rounded-none rounded-2xl bg-white flex md:flex-row flex-col items-center md:p-5 p-2.5'>
          {/*  Profile Image  */}
          <div className='shrink-0 md:w-40 w-25 md:h-40 h-25 border-2 rounded-[50%] bg-center bg-cover' style={{backgroundImage: `url(${profile})`}}>

          </div>
          {/*  User name, email, account date */}
          <div className='shrink-0 md:w-full md:h-full relative md:top-0 -top-4 md:p-4 p-2 flex flex-col justify-center'>

            <h1 className='w-full p-2 h-fit md:text-3xl text-[24px] font-["nunito"] font-extrabold flex items-center justify-center md:items-start md:justify-normal'>
              User Name
            </h1>
            <h1 className='w-full pl-2 h-fit md:text-2xl text-xl font-["nunito"] flex items-center font-semibold'>
              -user412@gmail.com
            </h1>
            <h1 className='w-full pl-2 h-fit md:text-2xl text-xl font-["nunito"] flex items-center font-semibold'>
              -12 Sep, 2026
            </h1>

          </div>
        </div>

        {/*  Profile intro section contains total scans, plants identified, favorite plants */}
        <div className='relative w-full h-fit md:h-120 md:p-4 flex md:flex-row flex-col gap-4 overflow-y-auto scrollbar-none'>
          {/*  Left side  */}
          <div className='shrink-0 md:w-[20%] h-full rounded-2xl flex flex-col items-center md:gap-4 gap-2 p-1'>
            {/*  Tags  */}
            <div className='w-full md:h-25 border rounded-4xl flex items-center p-2 md:p-4 bg-white border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
              <img src={camera} alt="camera" className='md:h-23 relative md:-left-5' />
              <h1 className='text-[#285943] relative md:-left-6 text-2xl font-["nunito"] font-bold'>
                Total Scans:
                <p className='font-semibold text-xl text-gray-500'>120</p>
              </h1>
            </div>
            <div className='w-full md:h-25 border rounded-4xl flex items-center p-2 md:p-4 bg-white border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
              <img src={plant} alt="camera" className='md:h-23 relative md:-left-5' />
              <h1 className='text-[#285943] relative md:-left-6 text-2xl font-["nunito"] font-bold'>
                Favorites:
                <p className='font-semibold text-xl text-gray-500'>12</p>
              </h1>
            </div>
            <div className='w-full md:h-25 border rounded-4xl flex items-center p-2 md:p-4 bg-white border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
              <img src={microscope} alt="camera" className='md:h-23 relative md:-left-5 -top-1' />
              <h1 className='text-[#285943] relative md:-left-6 text-2xl font-["nunito"] font-bold'>
                Care Guides:
                <p className='font-semibold text-xl text-gray-500'>20</p>
              </h1>
            </div>
            
            <button 
              onClick={handleProfile}
              className='w-full md:h-20 border h-15 rounded-4xl flex items-center justify-center md:text-3xl text-2xl border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] font-["Fredoka"] md:font-extrabold font-semibold transition-all duration-200 bg-red-400 text-white hover:bg-red-500 cursor-pointer'>
              Log-Out
            </button>
          </div>

          {/*  Right side-- Only visible for md*/}
          <div className='md:flex hidden shrink-0 overflow-hidden h-full flex-1 border-2 rounded-4xl bg-white flex-col border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]'>
            <h1 className='shrink-0 bg-[#A8D58D]  text-[#285943] w-full h-fit text-2xl font-["nunito"] font-bold p-2 px-4 border-b-2'>
              Recent Scan's
            </h1>
            {/*  Recent scan records  */}
            <div className='w-full flex-1 p-3 px-6 flex items-center'>

              <div className='w-60 text-gray-500 h-[85%] bg-[#A8D58D] border-2 rounded-2xl p-2 flex flex-col justify-center items-center'>
                <div className='w-full h-[55%] border rounded-2xl bg-white'>
                    {/*  Plant Image */}
                </div>
                <h1 className=' w-full h-fit text-xl font-bold pl-4 font-["nunito"] mt-3'>
                  Plant Name
                </h1>
                <h1 className='w-full h-fit text-xl font-bold pl-4 font-["nunito"]'>
                  Scan on: 
                  <p>12 Sep, 2026</p>
                </h1>

                <button className='w-fit h-fit text-xl font-["fredoka"] font-bold text-gray-700 border px-3 py-1 rounded-3xl bg-red-400 transition-all duration-200 hover:bg-red-500 cursor-pointer hover:text-white/80'>
                  Remove
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile