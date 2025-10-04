import React from 'react'
import serviceimg1 from "../../../assets/serviceimg/image 53.png"
import serviceimg2 from "../../../assets/serviceimg/image 54.png"
import serviceimg3 from "../../../assets/serviceimg/image 55.png"
import serviceimg4 from "../../../assets/serviceimg/image 56.png"

const LongServiceSection = () => {
    return (
        <div>
            <div className='mt-3'>
                <p className='text-center font-medium text-3xl pt-2 textcolor'>Long Term Care Services</p>
                <div className='grid md:grid-cols-4 gap-4 p-3 mt-4'>
                    <div className='card-service'>
                        <div className=' flex justify-center'>
                            <img className='w-40' src={serviceimg1} alt="medical-img" />
                        </div>
                        <p className='font-semibold text-xl pt-2'>ICU Setup</p>
                        <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <div className=' flex justify-center'>
                            <img className='w-40' src={serviceimg2} alt="medical-img" />
                        </div>
                        <p className='font-semibold text-xl pt-2'>Specialized Nurse at home</p>

                        <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <div className=' flex justify-center'>
                            <img className='w-40' src={serviceimg3} alt="medical-img" />
                        </div>
                        <p className='font-semibold text-xl pt-2'>Mother & Child Care</p>

                        <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                    </div>
                    <div className='card-service'>
                        <div className=' flex justify-center'>
                            <img className='w-40' src={serviceimg4} alt="medical-img" />
                        </div>
                        <p className='font-semibold text-xl pt-2'>Trained Attendant at home</p>

                        <button className='border rounded-3xl p-1.5 px-4 mt-4 cursor-pointer  textcolor'>Enquire Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LongServiceSection
