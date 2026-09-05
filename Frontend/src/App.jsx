import { useState } from 'react'
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import PlantInfo from './pages/PlantInfo';

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

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<AuthPage/>} />
          <Route path="/register" element={<AuthPage/>} />
          <Route path="/plantinfo" element={<PlantInfo/>} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes> 

      </section>
    </>
  )
}

export default App
