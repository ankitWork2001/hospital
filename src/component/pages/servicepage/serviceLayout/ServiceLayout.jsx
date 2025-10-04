import React from 'react'
import ServiceDashboard from '../ServiceDashboard'
import Services from "../../homepage/Services"
import Work from "../../homepage/Work"
import LongServiceSection from '../LongServiceSection'
import Benifit from '../Benifit'

const ServiceLayout = () => {
  return (
    <div>
      <ServiceDashboard/>
      <Services/>
      <Work/>
      <LongServiceSection/>
      <Benifit/>
    </div>
  )
}

export default ServiceLayout
