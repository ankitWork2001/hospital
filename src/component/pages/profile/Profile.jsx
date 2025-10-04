import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


const Profile = () => {
  return (
    <div className='bg-[#E6F5F5] mt-5 p-2'>
      <div>
        <p className='text-center font-medium text-4xl pt-2'>Complete Your Profile</p>
        <p className='text-center text-xl pt-1'>All below fields are mandatory.</p>
        <div className='grid md:grid-cols-2 gap-6 p-2'>
        <div className='space-y-5 font-medium mt-2 mx-auto'>
            <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <span className='text-xl'><FaUserAlt /></span>
                <input className='outline-0 p-1 w-full' type="text" name='' placeholder='First Name' required />
            </div>
            <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <span className='text-xl'><FaUserAlt /></span>
                <input className='outline-0 p-1 w-full' type="text" name='' placeholder='Last Name' required />
            </div>
            <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <span className='text-xl'><IoIosCall/></span>
                <input className='outline-0 p-1 w-full' type="number" name='' placeholder='Phone Number' required />
            </div>

            <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <span className='text-xl'><MdEmail /></span>
                <input className='outline-0 p-1 w-full' type="email" name='' placeholder='Email ID' required />
            </div>

            <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <span className='text-xl'><FaCalendarAlt /></span>
                <input className='outline-0 p-1 w-full' type="date" name='' placeholder='Date Of Birth' required />
            </div>
            <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
               <select name="" id="" className='w-full'>
                <option value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
               </select>
            </div>
        </div>
        <div>
            <div className='space-y-5 font-medium mt-2 mx-auto'>
                <textarea className='border rounded-2xl w-85 md:w-100 border-[#018592] bg-white p-2 outline-0 ' rows={4} name=""  id="" placeholder='Address'></textarea>
                  <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <input className='outline-0 p-1 w-full' type="text" name='' placeholder='Search with area pin code' required />
                <span className='text-xl'><MdKeyboardArrowDown /></span>
            </div>
                  <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <input className='outline-0 p-1 w-full' type="text" name='' placeholder='State' required />
                <span className='text-xl'><MdKeyboardArrowDown /></span>
            </div>
                  <div className='border rounded-full w-auto md:w-100 border-[#018592] bg-white flex gap-1 items-center p-1 ps-3'>
                <input className='outline-0 p-1 w-full' type="number" name='' placeholder='Pin code' required />
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
