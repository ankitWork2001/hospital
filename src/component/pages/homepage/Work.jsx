import React from 'react'

const Work = () => {
    return (
        <div>
            <div className='dasboradmain p-2 mt-3 textcolor'>
                <p className='text-center font-medium text-3xl pt-2 textcolor'>How It Works</p>
                <p className='text-center text-lg pt-2'>Simple step to get professional health care at your home</p>

                <div className='grid md:grid-cols-3 gap-7 p-4 mt-5'>
                    <div className='bg-white card-service'>
                        <p className='font-bold text-4xl font-Montserrat pt-4'>0 1</p>
                        <p className='font-semibold text-2xl pt-2'>Consultation & Assessment</p>
                        <p className='text-lg pt-2'>Our medical team evaluates your needs through phone or video consultation to determine the right care plan.</p>
                    </div>
                    <div className='bg-white card-service'>
                        <p className='font-bold text-4xl font-Montserrat pt-4'>0 2</p>
                        <p className='font-semibold text-2xl pt-2'>Setup & Equipment</p>
                        <p className='text-lg pt-2'>We deliver and set up all necessary medical equipment and assign qualified healthcare professionals.</p>
                    </div>
                    <div className='bg-white card-service'>
                        <p className='font-bold text-4xl font-Montserrat pt-4'>0 3</p>
                        <p className='font-semibold text-2xl pt-2'>Continuous Care</p>
                        <p className='text-lg pt-2'>Receive ongoing professional healthcare with 24/7 monitoring and regular doctor consultations.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work
