import React from 'react'
import doctorpatientimg from "../../../assets/aboutimg/Rectangle 4514.png"
import doctorpatientimg2 from "../../../assets/aboutimg/Rectangle 4515.png"

const AboutComfort = () => {
  return (
    <div className='mt-3'>
     <div className='flex justify-center'>
       <div className='w-150'>
        <p className='text-center text-3xl font-bold pt-2'>Heal at The Comfort of Your Home</p>
        <p className='text-center pt-2'>Hospital at Home delivers quality care with compassion. We bring quality medical care into our patients’ homes and aim to make primary healthcare not only more accessible, but also more affordable and accountable to our patients’ needs.</p>
      </div>
     </div>
      <div className='grid md:grid-cols-2 gap-7 p-3 mt-5'>
       <div className='flex justify-center items-center card-service'>
         <div> 
            <p className='pt-2 text-2xl font-semibold'>Our Vision</p>
            <p className='pt-3'>Hospital at Home aims to deliver quality ‘out-of-hospital’ medical care, which is affordable and easily accessible to patients, thus improving the quality of life of patients and families.</p>
        </div>
       </div>
        <div>
          <img className='w-full' src={doctorpatientimg} alt="doctor-img" />
        </div>

           <div>
          <img className='w-full' src={doctorpatientimg2} alt="doctor-img" />
        </div>
         <div className='flex justify-center items-center card-service'>
         <div> 
            <p className='pt-2 text-2xl font-semibold'>Our Mission</p>
            <p className='pt-3'>To provide the best care to every patient through a strong focus on service excellence and simplified processes guided by evidence-based medical care and technology in the following areas- Preventive Care | Pre/Post Natal Care | Post-operative Care | Critical Care | Chronic Disease Management | Palliative Care | & Elder Care.</p>
        </div>
       </div>
       
      </div>
    </div>
  )
}

export default AboutComfort
