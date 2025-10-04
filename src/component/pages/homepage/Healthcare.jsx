import React from 'react'
import rightimg from "../../../assets/homeimg/hugeicons_tick-01.png"
import pacentimg from "../../../assets/homeimg/image 46.png"
import { IoLogoWhatsapp } from "react-icons/io";


const Healthcare = () => {
    return (
        <div className='mt-3'>
            <p className='text-center font-medium text-3xl pt-2 textcolor'>Why Choose Us ?</p>

            <div className='grid md:grid-cols-2 p-3 gap-5 mt-4'>
                <div className='p-1 mt-8'>
                    <div className='flex gap-3'>
                        <div className='rounded-full h-10 w-10 mt-2 flex justify-center items-center bg-green-300 p-2'>
                            <img className='w-full' src={rightimg} alt="right-icon" />
                        </div>
                        <div>
                            <p className='font-semibold  text-2xl'>Comfort & Familiarity</p>
                            <p className='pt-1'>Recover in the comfort of your own home surrounded by loved ones</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-4'>
                        <div className='rounded-full h-10 w-10 mt-2 flex justify-center items-center bg-green-300 p-2'>
                            <img className='w-full' src={rightimg} alt="right-icon" />
                        </div>
                        <div>
                            <p className='font-semibold  text-2xl'>Cost-Effective</p>
                            <p className='pt-1'>Significantly reduce healthcare costs while maintaining quality care</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-4'>
                        <div className='rounded-full h-10 w-10 mt-2 flex justify-center items-center bg-green-300 p-2'>
                            <img className='w-full' src={rightimg} alt="right-icon" />
                        </div>
                        <div>
                            <p className='font-semibold  text-2xl'>Reduced Infection Risk</p>
                            <p className='pt-1'>Lower risk of hospital-acquired infections in a controlled home environment</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-4'>
                        <div className='rounded-full h-10 w-10 mt-2 flex justify-center items-center bg-green-300 p-2'>
                            <img className='w-full' src={rightimg} alt="right-icon" />
                        </div>
                        <div>
                            <p className='font-semibold  text-2xl'>Personalized Care</p>
                            <p className='pt-1'>One-on-one attention from dedicated healthcare professionals</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img className='w-full' src={pacentimg} alt="" />
                        <button className=" px-4 py-2  rounded-3xl flex gap-2 items-center  absolute bottom-1 right-1 nav-button">
                            What’s App <p className="text-green-500 text-2xl"><IoLogoWhatsapp /></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Healthcare
