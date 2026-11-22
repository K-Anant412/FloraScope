import React, { useEffect, useState, useContext } from 'react'
import RecentCard from '../components/RecentCard';
import { plantService } from '../service/api';
import { AuthContext } from '../context/AuthContext';

// Service imports
import { userService } from '../service/api';

// icons
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

// images
import camera from '../assets/Desktop_image/camera.png';
import profile from '../assets/Desktop_image/profile_image.jpg';
import banner from '../assets/Desktop_image/bannermd.png';
import plant from '../assets/Desktop_image/plant.png';
import microscope from '../assets/Desktop_image/microscope.png';
import profile_bg from '../assets/Desktop_image/nagu.jpg';

const Profile = () => {

  const [userData, setUserData] = useState(null);
  const [userHistory, setUserHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState(null);
  const [recentScans, setRecentScans] = useState(null);

  useEffect(() => {
    
    let isMounted = true;

    const handleProfile = async() =>{
      try {
        setIsLoading(true);
        const user = await userService.getProfile();
        
        if(!user || !user.data){
          console.log("User not found");
          
          return;
        }

          const Profile = user.data.data ?? user.data;
          // setUserData(Profile);
          setUserHistory(Profile);
          const formattedCreatedAt = Profile.user?.created_at
            ? new Date(Profile.user.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "N/A";
            
          const result = {
            "name": Profile.user.name,
            "email": Profile.user.email,
            "created_at": formattedCreatedAt
          };
          setUserData(result)

          const bodyData = user.data.data;
          
          //  Profile body data
          console.log("Profile Body: ",bodyData);
          setTags(bodyData);
          setRecentScans(user.data.data.scans);
          
      } catch (error) {
        console.log(error.message);
      }finally{
        if(isMounted) setIsLoading(false);
      }
      
    }

    handleProfile();

    return () =>{
      isMounted = false;
    };
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#E8F5E9]">
        <p className="text-xl font-semibold">Loading profile...</p>
      </div>
    );
  }

  return (
    <section className='w-full h-screen bg-[#E8F5E9] flex items-center p-5'>

      <div className='border-white/40 shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)] overflow-hidden w-full h-full border-2 rounded-3xl flex items-center'>

      {/*  left section  */}
        <div className='h-full w-[35%] bg-center bg-cover pt-15 shrink-0 flex flex-col items-center ' style={{backgroundImage:`url(${profile_bg})`}}>
          
          <div className='w-full h-fit flex items-center px-5'>

            {/*  Profile image */}
            <div className='w-60 h-60 shrink-0 rounded-4xl relative border-2 border-[#2b532a] bg-center bg-cover' style={{backgroundImage: `url(${profile})`}}>
              <button className='w-12 h-12 bg-[#2b532a] border-none rounded-[50%] absolute -bottom-3 -right-3 flex items-center justify-center transition-all duration-200 hover:bg-[#346e33] cursor-pointer '>
                <MdEdit className='text-3xl text-white' />
              </button>
            </div>

            <div className='w-full h-fit flex items-center flex-col'>

              <h1 className='relative w-fit border p-2 px-4 bg-[#E8F5E9] rounded-2xl h-fit flex flex-col justify-center text-3xl font-["nunito"] font-bold'>
               <p className='font-semibold'>Hello,</p>
                User Name
              </h1>

            </div>

          </div>

        </div>

        <div className='w-full h-full bg-white p-5 flex flex-col items-center pt-10'>
          <div className='w-full h-fit flex items-center justify-center gap-10'>

            <div className='w-60.5 h-27 border-2 rounded-2xl bg-[#E8F5E9] border-none flex justify-center flex-col '>
              <h1 className='w-full h-fit text-3xl font-bold font-["nunito"] pl-8'>
                Join Date:</h1>
              <p className='w-full h-fit text-2xl font-semibold font-["nunito"] pl-8'>
                12 Sep 2026</p>
            </div>

            <div className='w-60.5 h-27 border-2 rounded-2xl bg-[#E8F5E9] border-none flex justify-center flex-col '>
              <h1 className='w-full h-fit text-3xl font-bold font-["nunito"] pl-8'>
                Total Scans:</h1>
              <p className='w-full h-fit text-2xl font-semibold font-["nunito"] flex items-center justify-center'>
                24</p>
            </div>

            <div className='w-60.5 h-27 border-2 rounded-2xl bg-[#E8F5E9] border-none flex justify-center flex-col '>
              <h1 className='w-full h-fit text-3xl font-bold font-["nunito"] pl-8'>
                Favorite's:</h1>
              <p className='w-full h-fit text-2xl font-semibold font-["nunito"] flex items-center justify-center'>
                7</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Profile