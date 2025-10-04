import React from 'react'
import { IoIosCall } from "react-icons/io";
import doctorpatientimg from "../../../assets/serviceimg/image 50 (1).png"

const ServiceDashboard = () => {
  return (
    <div>
      <div className='dasboradmain'>
              <div className='grid md:grid-cols-2 gap-3'>
            <div className='p-3 flex justify-center items-center'>
              <div className='p-2'>
                  <p className='slider-heading'>Our Comprehensive Services</p>
                  <p className='slider-heading-2'>We provide complete hospital-level care in your home with professional medical staff and advanced equipment</p>
                 <div className='flex gap-6 mt-5'>
                   <button className='border border-amber-500 text-amber-500 rounded-2xl p-1.5 px-5'>Book Appointment </button>
                  <button className='nav-button'>Call Now   <p className="text-2xl">< IoIosCall /></p></button>
                 </div>
              </div>
            </div>
            <div>
              <div className=''>
                 <div className='p-4'>
                    <img className='w-full' src={doctorpatientimg} alt="" />
                 </div>
              </div>
            </div>
      
              </div>
          </div>
    </div>
  )
}

export default ServiceDashboard
