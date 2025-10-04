import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import HomeLayout from '../pages/homepage/HomeLayout'
import ServiceLayout from '../pages/servicepage/serviceLayout/ServiceLayout'
import AboutLayout from '../pages/aboutpage/aboutlayout/AboutLayout'
import MedicalLayout from '../pages/medical/medicalLayout/MedicalLayout'
import GelleryLayout from '../pages/gellerypage/gellerylayout/GelleryLayout'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='/Services' element={<ServiceLayout/>}/>
        <Route path='/About' element={<AboutLayout/>}/>
        <Route path='/Medical' element={<MedicalLayout/>}/>
        <Route path='/Gallery' element={<GelleryLayout/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute
