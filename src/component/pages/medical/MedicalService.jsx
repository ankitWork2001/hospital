import React from 'react'
import machineimg1 from "../../../assets/medicalimg/Rectangle 4433 (1).png"
import machineimg2 from "../../../assets/medicalimg/Rectangle 4462 (1).png"
import machineimg3 from "../../../assets/medicalimg/Rectangle 4463 (1).png"
import machineimg4 from "../../../assets/medicalimg/Rectangle 4464 (1).png"
import machineimg5 from "../../../assets/medicalimg/Rectangle 4466 (1).png"
import machineimg6 from "../../../assets/medicalimg/Rectangle 4469.png"
import machineimg7 from "../../../assets/medicalimg/Rectangle 4472 (1).png"
import machineimg8 from "../../../assets/medicalimg/Rectangle 4475 (1).png"

const MedicalService = () => {
    return (
        <div className='mt-3'>
            <div>
                <p className='text-[#019196] font-semibold text-3xl pt-4 text-center'>Medical Equipment from Hospital at home</p>
            </div>
            <div className='flex justify-center mt-5'>
                <div>
                    <div className='flex gap-4 flex-wrap p-2'>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Masks</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Wheel Chair</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Respiratory</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>DVT Pump</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Pumps</button>
                    </div>
                    <div className='flex gap-4 flex-wrap p-2'>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Monitoring</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Nimbus Bed</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Oxygen Concentrator</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Ventilator</button>
                        <button className='p-2 border border-[#018592] rounded-full px-5'>Suction</button>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='grid md:grid-cols-4 gap-4 p-3'>
                    <div className='card-service'>
                        <img src={machineimg1} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#018592] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg2} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg3} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg4} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg5} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg6} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg7} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <img src={machineimg8} alt="" />
                        <button className='border rounded-full p-1 px-3 border-[#019196] text-xl font-semibold mt-2'>Enquire Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalService
