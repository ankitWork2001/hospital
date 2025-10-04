import React from 'react'
import LongDasboard from '../LongDasboard'
import LongServiceSection from "../../servicepage/LongServiceSection"
import Benifit from "../../servicepage/Benifit"
import Emergency from "../../homepage/Emergency"

const LongtermLayout = () => {
  return (
    <div>
      <LongDasboard/>
      <LongServiceSection/>
      <Benifit/>
        <Emergency/>
    </div>
  )
}

export default LongtermLayout
