import React from 'react'
import teammemberimg1 from "../../../assets/aboutimg/Team-member 1.jpg"
import teammemberimg2 from "../../../assets/aboutimg/Team-member 2.jpg"
import teammemberimg3 from "../../../assets/aboutimg/Team-member 3.jpg"
import teammemberimg4 from "../../../assets/aboutimg/Rectangle 4520.png"
import teammemberimg5 from "../../../assets/aboutimg/Rectangle 4521.png"
import teammemberimg6 from "../../../assets/aboutimg/Rectangle 4522.png"

const AboutTeam = () => {
  return (
    <div className='mt-4'>
      <div>
        <p className='text-2xl font-semibold text-center pt-2'>Meet Our Team</p>
      </div>
      <div className='grid md:grid-cols-3 gap-5 p-3'>
        <div className='mt-2 p-1'>
          <div className='w-full md:h-90 overflow-hidden'>
            <img src={teammemberimg1} alt="" />
          </div>
          <p className='text-xl text-center font-medium'>Meena Ganesh</p>
          <p className='text-center pt-1'>Co-founder and Chairperson</p>
        </div>
        <div className='mt-2 p-1'>
          <div className='w-full md:h-90 overflow-hidden'>
            <img src={teammemberimg2} alt="" />
          </div>            <p className='text-xl text-center font-medium'>Ganesh Krishnan</p>
          <p className='text-center pt-1'>Co-founder & Director</p>
        </div>
        <div className='mt-2 p-1'>
          <div className='w-full md:h-90 overflow-hidden'>
            <img src={teammemberimg3} alt="" />
          </div>            <p className='text-xl text-center font-medium'>Vaibhav Tewari</p>
          <p className='text-center pt-1'>Co-founder & CEO</p>
        </div>
        <div className='mt-2 p-1'>
          <img src={teammemberimg4} alt="" />
          <p className='text-xl text-center font-medium'>G. Ramasubramani</p>
          <p className='text-center pt-1'>Chief Technology Officer (CTO)</p>
        </div>
        <div className='mt-2 p-1'>
          <img src={teammemberimg5} alt="" />
          <p className='text-xl text-center font-medium'>Surendra Kumar Gupta</p>
          <p className='text-center pt-1'>Finance Head</p>
        </div>
        <div className='mt-2 p-1'>
          <img src={teammemberimg6} alt="" />
          <p className='text-xl text-center font-medium'>Sharat S</p>
          <p className='text-center pt-1'>National Sales Head</p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
