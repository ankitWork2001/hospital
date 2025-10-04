import React from 'react'
import { IoIosCall } from "react-icons/io";
import patientimg from "../../../assets/medicalimg/image 59.png"

const MedicalDasborad = () => {
  return (
    <div>
       <div className='bg-[#E6F5F5]'>
                    <div className='grid md:grid-cols-2 gap-3'>
                  <div className='p-3 flex justify-center items-center'>
                    <div className='p-2'>
                        <p className='slider-heading'>Buy or Rent Medical Equipment from Hospital at home </p>
                        <p className='slider-heading-2'>Convenient, personalized medical care delivered in the comfort of your home.</p>
                       <div className='flex gap-6 mt-5'>
                         <button className='border border-amber-500 text-amber-500 rounded-2xl p-1.5 px-5'>Book Appointment </button>
                        <button className='nav-button'>Call Now   <p className="text-2xl">< IoIosCall /></p></button>
                       </div>
                    </div>
                  </div>
                  <div>
                    <div className=''>
                       <div className='p-4'>
                          <img className='w-full' src={patientimg} alt="" />
                       </div>
                    </div>
                  </div>
            
                    </div>
                </div>
    </div>
  )
}

export default MedicalDasborad
