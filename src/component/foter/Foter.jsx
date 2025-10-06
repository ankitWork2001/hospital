import React from 'react'
const Foter = () => {
    return (
        <div className='foterfile mt-10'>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
                <div className='p-2'>
                    <img className='w-20' src='/Logo-1.png' alt="logo" />
                    <p className='text-white font-semibold text-2xl pt-3 cursor-pointer'>Hospital at Home</p>
                    <p className='text-gray-300 pt-2'>Bringing hospital-level care to the comfort of your home with professional healthcare services.</p>
                </div>
                <div className='p-3 text-center'>
                    <p className='pt-16 text-2xl text-white font-semibold cursor-pointer'>Services</p>
                    <p className='text-gray-300 pt-2  cursor-pointer'>ICU at Home</p>
                    <p className='text-gray-300 pt-2  cursor-pointer'>Nursing Care</p>
                </div>
                <div className='p-3 text-center'>
                    <p className='pt-16 text-2xl text-white font-semibold cursor-pointer'>Support</p>
                    <p className='text-gray-300 pt-2 cursor-pointer'>24/7 Emergency</p>
                    <p className='text-gray-300 pt-2 cursor-pointer'>Contact Us</p>
                </div>
                <div className='p-3 text-center'>
                    <p className='pt-16 text-2xl text-white font-semibold cursor-pointer'>Contact</p>
                    <p className='text-gray-300 pt-2 cursor-pointer'>1-800-HOME-ICU</p>
                    <p className='text-gray-300 pt-2 cursor-pointer'>care@hospitalathome.com</p>
                </div>
            </div>
        </div>
    )
}

export default Foter
