import { useState } from 'react'
import desktop_bg from '../public/Desktop_image/desktop_bg.png';
import desktop_bg_sticker from '../public/Desktop_image/desktop_bg_sticker.png';

import phone_bg from '../public/Phone_image/phone_bg.jpg';
import phone_bg_sticker from '../public/Phone_image/phone_bg_sticker.png';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';

import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

function App() {

  //  background color: #E8F5E9
  //  Primary color: #4F9D4D
  //  Secondary color: #A8D58D
  //  Accent color: #F8E7A2
  //  Dark color: #285943

  return (
    <>
      <section className="relative w-screen h-screen overflow-hidden">

        {/* <Home /> */}   

        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<AuthPage/>} />
          <Route path="/register" element={<AuthPage/>} />
          <Route path="/profile" element={<Home/>} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes> */}
        
        <div
          className="absolute inset-0 hidden md:block bg-center bg-cover"
          style={{
            backgroundImage: `url(${desktop_bg})`,
          }}
        />

        <div
          className="absolute inset-0 block md:hidden bg-center bg-cover"
          style={{
            backgroundImage: `url(${phone_bg})`,
          }}
        />

          
          <AuthPage />

        <div
          className="absolute inset-0 hidden md:block z-40 bg-center bg-cover pointer-events-none"
          style={{
            backgroundImage: `url(${desktop_bg_sticker})`,
          }}
        />

        <div
          className="absolute inset-0 block md:hidden z-40 bg-center bg-cover pointer-events-none"
          style={{
            backgroundImage: `url(${phone_bg_sticker})`,
          }}
        />

      </section>
    </>
  )
}

export default App
