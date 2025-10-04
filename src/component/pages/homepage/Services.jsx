import React from 'react'
import rectangle1 from "../../../assets/homeimg/Rectangle 4433.png"
import rectangle2 from "../../../assets/homeimg/Rectangle 4434.png"
import rectangle3 from "../../../assets/homeimg/Rectangle 4435.png"
import rectangle4 from "../../../assets/homeimg/Rectangle 4436.png"

const Services = () => {
  return (
    <div className='mt-2'>
      <p className='text-center p-2 text-3xl  font-semibold pt-4'>Quick Services Highlights</p>

      <div className='grid md:grid-cols-4 gap-4 p-2'>
        <div className='card-service'>
            <img className='w-full ' src={rectangle1} alt="" />
            <p className='service-card-heading'>ICU Setup at Home</p>
            <p className='pt-2 textcolor'>Complete intensive care unit setup with ventilators, monitors, and critical care equipment.</p>
            <button className='border rounded-3xl p-1.5 px-3 mt-3 textcolor'>Enquire Now</button>
        </div>
        <div className='card-service'>
            <img className='w-full ' src={rectangle2} alt="" />
            <p className='service-card-heading'>Professional Nursing </p>
            <p className='pt-2 textcolor'>Qualified nurses providing 24/7 medical care, medication management, and health monitoring.</p>
            <button className='border rounded-3xl p-1.5 px-3  mt-3 textcolor'>Enquire Now</button>
        </div>
        <div className='card-service'>
            <img className='w-full ' src={rectangle3} alt="" />
            <p className='service-card-heading'>GDA Care</p>
            <p className='pt-2 textcolor'>General Duty Assistants for  daily care activities, patient mobility, and personal assistance.</p>
            <button className='border rounded-3xl p-1.5 px-3 textcolor mt-3'>Enquire Now</button>
        </div>
        <div className='card-service'>
            <img className='w-full ' src={rectangle4} alt="" />
            <p className='service-card-heading'>Medical Equipment</p>
            <p className='pt-2 textcolor'>Rent or purchase hospital-grade medical equipment for home care needs.</p>
            <button className='border rounded-3xl p-1.5 px-3 textcolor mt-3'>Enquire Now</button>
        </div>
      </div>
    </div>
  )
}

export default Services
