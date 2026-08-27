import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
        <section className='z-50 w-full h-full flex flex-col md:flex-row overflow-x-hidden md:overflow-y-hidden overflow-y-scroll scrollbar-none bg-[#E8F5E9]'>

          {/*  ---Navbar--- */}
          <Navbar />

        </section>
    </>
  )
}

export default Home