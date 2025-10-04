import React from 'react'
import { IoIosCall } from "react-icons/io";
import doctorimg from "../../../assets/longtermimg/image 51.png"

const LongDasboard = () => {
  return (
  <div>
  <div className='bg-[#E6F5F5]'>
    <div className='grid md:grid-cols-2 gap-3'>
      
      {/* Left side */}
      <div className='p-3 flex justify-center items-center'>
        <div className='p-2'>
          <p className='slider-heading'>
            Compassionate Care You Can Trust at Home
          </p>
          <p className='slider-heading-2'>
            Expert care for your loved ones, combining medical excellence with the comfort of home.
          </p>
          
          <div className='flex gap-6 mt-5'>
            <button className='border border-amber-500 text-amber-500 rounded-2xl p-1.5 px-5'>
              Book Appointment
            </button>
            
            <button className='nav-button flex items-center gap-2'>
              Call Now <span className="text-2xl"><IoIosCall /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div>
        <div className='p-4 flex justify-end'>
          <img className='w-full md:w-120' src={doctorimg} alt="doctor" />
        </div>
      </div>
      
    </div>
  </div>
</div>
 )
}

export default LongDasboard
