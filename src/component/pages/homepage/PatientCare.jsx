import React from 'react'
import patientimg1 from '../../../assets/homeimg/Rectangle 4472.png'
import patientimg2 from '../../../assets/homeimg/Rectangle 4475.png'
import patientimg3 from '../../../assets/homeimg/Rectangle 4478.png'
import patientimg4 from '../../../assets/homeimg/Rectangle 4481.png'
import patientimg5 from '../../../assets/homeimg/Rectangle 4502.png'
import patientimg6 from '../../../assets/homeimg/Rectangle 4505.png'
import patientimg7 from '../../../assets/homeimg/Rectangle 4508.png'
import patientimg8 from '../../../assets/homeimg/Rectangle 4511.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules'

const PatientCare = () => {
    const images = [

        {
           image: patientimg1,
            text: "ICU at Home"
        },
        {
            image:patientimg2,
            text: "Nurse at Home"
        },
        {
            image:patientimg3,
            text: "⁠Doctor at Home"
        },
        {
            image:patientimg4,
            text: "Mother & Baby Care"
        },
        {
            image:patientimg5,
            text: "⁠Physiotherapy at Home"
        },
        {
            image:patientimg6,
            text: "Buy & Rent Medical Equipment"
        },
        {
            image:patientimg7,
            text: "Buy or Rent Wheelchairs"
        },
        {
            image:patientimg8,
            text: "Buy or Rent CPAP & BiPAP for Home"
        }

        ];
  return(
     <div className='mt-10'>
            <div>
                <p className='text-center font-medium text-3xl pt-2 '>Care Tailored for your specific needs</p>
            </div>

              <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            spaceBetween={10}
                            breakpoints={{
                                0: { slidesPerView: 1 },    
                                640: { slidesPerView: 2 },     
                                768: { slidesPerView: 3 },    
                                1024: { slidesPerView: 4 },    
                            }} pagination={{ clickable: true }} 
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index} className='p-3 pb-9'>
                                    <div className='pb-8 card-service'>
                                        <img src={img.image} alt={`Slide ${index + 1}`} className="lg:w-auto md:w-auto sm:w-auto w-full h-auto" />
                                        <button className='border truncate overflow-hidden w-full rounded-full border-[#018592] p-1 px-3 mt-3 hover:bg-[#019196] hover:text-white cursor-pointer'>{img.text}</button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </div>

  )

}

export default PatientCare
