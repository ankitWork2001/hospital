import React from 'react'
import machineimg1 from "../../../assets/medicalimg/Rectangle 4433 (1).png"
import machineimg2 from "../../../assets/medicalimg/Rectangle 4462 (1).png"
import machineimg3 from "../../../assets/medicalimg/Rectangle 4463 (1).png"
import machineimg4 from "../../../assets/medicalimg/Rectangle 4464 (1).png"
import machineimg5 from "../../../assets/medicalimg/Rectangle 4466 (1).png"
import machineimg6 from "../../../assets/medicalimg/Rectangle 4469.png"
import machineimg7 from "../../../assets/medicalimg/Rectangle 4472 (1).png"
import machineimg8 from "../../../assets/medicalimg/Rectangle 4475 (1).png"
import machineimg9 from "../../../assets/medicalimg/IMG-20251006-WA0026.jpg"
import machineimg10 from "../../../assets/medicalimg/IMG-20251006-WA0027.jpg"
import machineimg11 from "../../../assets/medicalimg/IMG-20251006-WA0028.jpg"
import machineimg12 from "../../../assets/medicalimg/IMG-20251006-WA0029.jpg"
import machineimg13 from "../../../assets/medicalimg/IMG-20251006-WA0030.jpg"
import machineimg14 from "../../../assets/medicalimg/IMG-20251006-WA0031.jpg"
import machineimg15 from "../../../assets/medicalimg/IMG-20251006-WA0032.jpg"
import machineimg16 from "../../../assets/medicalimg/IMG-20251006-WA0033.jpg"
import machineimg17 from "../../../assets/medicalimg/IMG-20251006-WA0034.jpg"
import machineimg18 from "../../../assets/medicalimg/IMG-20251006-WA0035.jpg"
import machineimg19 from "../../../assets/medicalimg/IMG-20251006-WA0036.jpg"
import machineimg20 from "../../../assets/medicalimg/IMG-20251006-WA0037.jpg"
import machineimg21 from "../../../assets/medicalimg/IMG-20251006-WA0038.jpg"
import machineimg22 from "../../../assets/medicalimg/IMG-20251006-WA0039.jpg"
import machineimg23 from "../../../assets/medicalimg/IMG-20251006-WA0040.jpg"
import machineimg24 from "../../../assets/medicalimg/IMG-20251006-WA0041.jpg"
import machineimg25 from "../../../assets/medicalimg/IMG-20251006-WA0042.jpg"
import machineimg26 from "../../../assets/medicalimg/IMG-20251006-WA0043.jpg"
import machineimg27 from "../../../assets/medicalimg/IMG-20251006-WA0044.jpg"
import machineimg28 from "../../../assets/medicalimg/IMG-20251006-WA0045.jpg"
import machineimg29 from "../../../assets/medicalimg/IMG-20251006-WA0046.jpg"
import machineimg30 from "../../../assets/medicalimg/IMG-20251006-WA0047.jpg"
import machineimg31 from "../../../assets/medicalimg/IMG-20251006-WA0048.jpg"
import machineimg32 from "../../../assets/medicalimg/IMG-20251006-WA0049.jpg"
import machineimg33 from "../../../assets/medicalimg/IMG-20251006-WA0050.jpg"
import machineimg34 from "../../../assets/medicalimg/IMG-20251006-WA0051.jpg"
import machineimg35 from "../../../assets/medicalimg/IMG-20251006-WA0052.jpg"

const MedicalService = () => {

    const images = [
        machineimg1,
        machineimg2,
        machineimg3,
        machineimg4,
        machineimg5,
        machineimg6,
        machineimg7,
        machineimg8,
        machineimg9,
        machineimg10,
        machineimg11,
        machineimg12,
        machineimg13,
        machineimg14,
        machineimg15,
        machineimg16,
        machineimg17,
        machineimg18,
        machineimg19,
        machineimg20,
        machineimg21,
        machineimg22,
        machineimg23,
        machineimg24,
        machineimg25,
        machineimg26,
        machineimg27,
        machineimg28,
        machineimg29,
        machineimg30,
        machineimg31,
        machineimg32,
        machineimg33,
        machineimg34,
        machineimg35
    ]
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
                    {images.map((item) => (
                        <div className='card-service'>
                            <img className='md:h-65 w-full md:object-cover' src={item} alt="medical-machine-img" />
                            <button className='border rounded-full p-1 px-3 border-[#018592] text-xl font-semibold mt-2'>Enquire Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MedicalService
