import React from 'react'
import doctorimg from "../../../assets/loginimg/image 49.png"
import { IoLogoWhatsapp } from "react-icons/io";


const Login = () => {
    return (
        <div className='bg-[#E6F5F5] mt-5'>
            <div className='grid md:grid-cols-2 gap-8 p-3'>
                <div className='p-2 md:p-5'>
                    <img className='w-full' src={doctorimg} alt="" />
                </div>
                <div  className='h-full'>
                    <div className='flex justify-center items-center md:mt-20 lg:mt-30'>
                          <div className='bg-[#019196] rounded-2xl p-3  md:w-100'>
                    <p className='text-center font-medium text-2xl text-white'>Login</p>
                    <p className='text-gray-200 text-center pt-3'>Welcome to Apollo Healthcare</p>
                    <form action="" className='p-2 space-y-5 mt-5'>
                        <label htmlFor="101" className='text-white ps-3'>Mobile Number</label>
                        <input className='border border-black p-2 mt-2 rounded-full outline-0 w-full bg-white' type="number" name="" id="101" required/><br/>
                        <button className=' border-black border-2 rounded-full p-2 px-5  w-full bg-white font-bold text-lg cursor-pointer'>SEND  OTP</button>
                    </form>
                </div>
                    </div>
                    <div className='flex justify-end mt-10'>
                <button className="nav-button flex items-center gap-2">
                    WhatsApp <IoLogoWhatsapp className="text-green-500 text-xl" />
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
