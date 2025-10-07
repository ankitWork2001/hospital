import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import doctorpatientimg from "../../../assets/serviceimg/image 50 (1).png"

const ServiceDashboard = () => {
  const [callOpen,setCallOpen] = useState(false)
  return (
    <div>
      <div className='dasboradmain'>
              <div className='grid md:grid-cols-2 gap-3'>
            <div className='p-3 flex justify-center items-center'>
              <div className='p-2'>
                  <p className='slider-heading'>Our Comprehensive Services</p>
                  <p className='slider-heading-2'>We provide complete hospital-level care in your home with professional medical staff and advanced equipment</p>
                 <div className='md:flex sm:flex flex-wrap gap-6 mt-5 relative items-center'>
                  <a target='_blank' href="https://wa.me/917206783874">
                   <button className='border border-amber-500 text-amber-500 rounded-2xl p-1.5 px-5 mt-3'>Book Appointment </button>
                   </a>
                   <div>
                  <button onClick={()=>setCallOpen(!callOpen)} className='nav-button mt-3'>Call Now   <p className="text-2xl">< IoIosCall /></p></button>
                         { callOpen&& <div className="bg-white rounded-2xl absolute md:top-14 shadow-2xl p-5 z-50">
                        <p className="flex items-center gap-2 pt-2"><IoIosCall className="text-xl" /> 72067-83874</p>
                        <p className="flex items-center gap-2 pt-2"> <IoIosCall className="text-xl" /> 8920-889555</p>
                    </div>}
                   </div>
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
