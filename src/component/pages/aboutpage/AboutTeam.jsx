import React from 'react'
import teammemberimg1 from "../../../assets/aboutimg/Team-member 3.jpg"
import teammemberimg2 from "../../../assets/aboutimg/Team-member 2.jpg"
import teammemberimg3 from "../../../assets/aboutimg/Team-member 1.jpg"

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
          <p className='text-xl text-center font-medium'>Dr Ravi kumar pt.</p>
        </div>
        <div className='mt-2 p-1'>
          <div className='w-full md:h-90 overflow-hidden'>
            <img src={teammemberimg2} alt="" />
          </div>
                    <p className='text-xl text-center font-medium'>Bijesh</p>

        </div>
        <div className='mt-2 p-1'>
          <div className='w-full md:h-90 overflow-hidden'>
            <img src={teammemberimg3} alt="" />
          </div>
                    <p className='text-xl text-center font-medium'>Lakhan singh</p>

        </div>

      </div>
    </div>
  )
}

export default AboutTeam
