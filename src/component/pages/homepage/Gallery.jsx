import React from 'react'
import patientimg1 from '../../../assets/homeimg/Rectangle 4492.png'
import patientimg2 from '../../../assets/homeimg/Rectangle 4493.png'
import patientimg3 from '../../../assets/homeimg/Rectangle 4494.png'
import patientimg4 from '../../../assets/homeimg/Rectangle 4495.png'

const Gallery = () => {
    return (
        <div className='mt-15'>
            <div>
                <p className='text-center font-medium text-3xl pt-2'>Our Gallery</p>
            </div>
           <div className='grid md:grid-cols-4 gap-5 p-3 mt-3'>
                   <div className='overflow-hidden'><img className='w-full hover:scale-105 transition duration-300 ease-in-out' src={patientimg1} alt="patient-img" /></div>
                   <div className='overflow-hidden'><img className='w-full hover:scale-105 transition duration-300 ease-in-out' src={patientimg2} alt="patient-img" /></div>
                   <div className='overflow-hidden'><img className='w-full hover:scale-105 transition duration-300 ease-in-out' src={patientimg3} alt="patient-img" /></div>
                   <div className='overflow-hidden'><img className='w-full hover:scale-105 transition duration-300 ease-in-out' src={patientimg4} alt="patient-img" /></div>
                 </div>
        </div>
    )
}

export default Gallery
