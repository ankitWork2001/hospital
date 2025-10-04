import React from 'react'
import branchimg1 from '../../../assets/homeimg/Rectangle 4488.png'
import branchimg2 from '../../../assets/homeimg/Rectangle 4489.png'
import branchimg3 from '../../../assets/homeimg/Rectangle 4490.png'
import branchimg4 from '../../../assets/homeimg/Rectangle 4491.png'
import branchimg5 from '../../../assets/homeimg/Rectangle 4532.png'
import branchimg6 from '../../../assets/homeimg/Rectangle 4533.png'
import branchimg7 from '../../../assets/homeimg/Rectangle 4534.png'
import branchimg8 from '../../../assets/homeimg/Rectangle 4535.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules'

const Partner = () => {

    const images = [
        branchimg1,
        branchimg2,
        branchimg3,
        branchimg4,
        branchimg5,
        branchimg6,
        branchimg7,
        branchimg8,
    ];
    return (
        <div className='mt-7'>
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
                    <SwiperSlide key={index} className='p-3'>
                        <div className='pb-6'>
                            <img src={img} alt={`Slide ${index + 1}`} className="lg:w-auto md:w-auto sm:w-auto w-full h-auto" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Partner
