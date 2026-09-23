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
import plant from '../assets/Desktop_image/plant.png'
import microscope from '../assets/Desktop_image/microscope.png'

const Profile = () => {

  const [click, setClick] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(!user) return;
    console.log(user);
  }, [click])
  


  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-[#E8F5E9] md:p-5 p-3'>
      <div className='w-full h-screen border-2 border-black'>

        <button
          onClick={()=>setClick(!click)}
          className='w-fit h-fit text-xl font-semibold py-3 px-4 border rounded-2xl cursor-pointer'
        >
          Click
        </button>

      </div>
    </section>
  )
}

export default Profile