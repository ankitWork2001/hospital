import React from 'react'
import medicalimg1 from "../../../assets/homeimg/Rectangle 4466.png"
import medicalimg2 from "../../../assets/homeimg/Rectangle 4462.png"
import medicalimg3 from "../../../assets/homeimg/Rectangle 4463.png"

const EnquireMedical = () => {
    return (
        <div className='mt-3'>
            <p className='text-center font-medium text-3xl pt-2'>Medical Equipment from Hospital at home</p>
            <div className='grid md:grid-cols-3 gap-4 p-3 mt-4'>
                <div></div>
                <div className='card-service'>
                    <img className='w-full' src={medicalimg1} alt="medical-img" />
                    <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                </div>
               <div></div>
            </div>

        </div>
    )
}

export default EnquireMedical
