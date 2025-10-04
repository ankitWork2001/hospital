import React from 'react'
import medicalimg1 from "../../../assets/homeimg/Rectangle 4466.png"
import medicalimg2 from "../../../assets/homeimg/Rectangle 4462.png"
import medicalimg3 from "../../../assets/homeimg/Rectangle 4463.png"
import medicalimg4 from "../../../assets/homeimg/Rectangle 4464.png"

const EnquireMedical = () => {
    return (
        <div className='mt-3'>
            <p className='text-center font-medium text-3xl pt-2 textcolor'>Medical Equipment from Hospital at home</p>
            <div className='grid md:grid-cols-4 gap-4 p-3 mt-4'>
                <div className='card-service'>
                    <img className='w-full' src={medicalimg1} alt="medical-img" />
                    <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                </div>
                <div className='card-service'>
                    <img className='w-full' src={medicalimg2} alt="medical-img" />
                    <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                </div>
                <div className='card-service'>
                    <img className='w-full' src={medicalimg3} alt="medical-img" />
                    <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                </div>
                <div className='card-service'>
                    <img className='w-full' src={medicalimg4} alt="medical-img" />
                    <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                </div>
            </div>

        </div>
    )
}

export default EnquireMedical
