import React from 'react'
import patientimg from "../../../assets/serviceimg/image 57.png"

const Benifit = () => {
  return (
    <div className='dasboradmain mt-5'>
      <div>
        <p className='text-center font-bold text-3xl pt-2'>Benefits of Hospital at home LONG-TERM CARE</p>
      </div>
      <div className='grid md:grid-cols-2 gap-4 p-4 mt-4'>
        <div className='p-1 mt-5'>
            <p className='font-medium text-2xl pt-5'>Improved quality of life</p>
            <p>Personal care of Apollo enhances comfort and dignity.</p>
            <p className='font-medium text-2xl pt-5'>Professional assistance</p>
            <p>Skilled caregivers handle medical and non-medical needs effectively.</p>
            <p className='font-medium text-2xl pt-5'>Peace of mind</p>
            <p>Families are assured that their loved ones are in capable hands.</p>
        </div>
        <div>
            <img className='w-full' src={patientimg} alt="patient" />
        </div>
      </div>
    </div>
  )
}

export default Benifit
