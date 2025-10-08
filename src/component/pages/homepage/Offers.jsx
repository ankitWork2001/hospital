import React from 'react'
import patientimg1 from '../../../assets/homeimg/image 65.png'
import patientimg2 from '../../../assets/homeimg/image 66.png'
import patientimg3 from '../../../assets/homeimg/image 67.png'


const Offers = () => {
  return (
    <div className='mt-3'>
      <div>
         <p className='text-center font-medium text-3xl pt-2 '>New Offers</p>
      </div>
      <div className='grid md:grid-cols-3 gap-5 md:p-3 p-2 mt-3'>
        <div className='card-service flex md:gap-2 justify-between '>
          <div className='text-start sm:mx-auto'>
            <button className='bg-[#B1F9E1] rounded-full p-1 px-3'>RS.100 Off</button>
            <p className='text-2xl font-semibold pt-3'>Physiotherapy</p>
            <p className='pt-4'>Flat RS.100/-off on</p>
            <p className='pt-1'>your 1st physiotherapy session.</p>
            <button className='border rounded-full p-1 px-3 text-xl mt-4 hover:bg-[#019196] hover:text-white cursor-pointer'>Book Now</button>
          </div>
          <div className='md:w-60 w-auto'> 
          <img className='w-full mt-3' src={patientimg1} alt="patient-img" />

          </div>
          </div>
        <div className='card-service flex md:gap-2 justify-between '>
          <div className='text-start'>
            <button className='bg-[#B1F9E1] rounded-full p-1 px-3'>10% off</button>
            <p className='text-2xl font-semibold pt-3'>ElderCare</p>
            <p className='pt-4'>Get Flat 10% off</p>
            <p className='pt-1'>Caretaker at Home.</p>
            <button className='border rounded-full p-1 px-3 text-xl mt-4 hover:bg-[#019196] hover:text-white cursor-pointer'>Book Now</button>
          </div>
          <div className='md:w-60 w-auto'>
          <img className='w-full' src={patientimg2} alt="patient-img" />

          </div>
          </div>
        <div className='card-service flex md:gap-2 justify-between '>
          <div className='text-start '>
            <button className='bg-[#B1F9E1] rounded-full p-1 px-3'>RS.100 Off</button>
            <p className='text-2xl font-semibold pt-3'>Doctor Visit</p>
            <p className='pt-4'>Flat 10% off</p>
            <p className='pt-1'>On Nurse visti to your home.</p>
            <button className='border rounded-full p-1 px-3 text-xl mt-4 hover:bg-[#019196] hover:text-white cursor-pointer'>Book Now</button>
          </div>
          <div className='md:w-60 w-auto'>
          <img className='w-full' src={patientimg3} alt="patient-img" />

          </div>
          </div>
      </div>
    </div>
  )
}

export default Offers
