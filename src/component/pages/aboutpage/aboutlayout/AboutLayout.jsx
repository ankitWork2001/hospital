import React from 'react'
import AboutDashboard from '../AboutDashboard'
import AboutComfort from '../AboutComfort'
import AboutTeam from '../AboutTeam'
import Emergency from "../../homepage/Emergency"

const AboutLayout = () => {
  return (
    <div>
      <AboutDashboard/>
      <AboutComfort/>
      <AboutTeam/>
      <Emergency/>
    </div>
  )
}

export default AboutLayout
