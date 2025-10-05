import React from 'react'
import DasbordSlider from './DasbordSlider'
import Services from './Services'
import Work from './Work'
import EnquireMedical from './EnquireMedical'
import Healthcare from './Healthcare'
import PatientCare from './PatientCare'
import Offers from './Offers'
import Gallery from './Gallery'
import Partner from './Partner'
import Emergency from './Emergency'

const HomeLayout = () => {
  return (
    <div>
        <DasbordSlider/>
        <Services/>
        <Work/>
        <EnquireMedical/>
        <Healthcare/>
        <PatientCare/>
        <Offers/>
        <Gallery/>
        <Partner/>
        <Emergency/>
    </div>
  )
}

export default HomeLayout
