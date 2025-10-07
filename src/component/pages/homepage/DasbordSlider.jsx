import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import doctorimg from '../../../assets/homeimg/dasbord_doctor.png'
import femaledoctorimg from '../../../assets/homeimg/image 61.png'
import arrowimg from "../../../assets/homeimg/image 50.png"

const DasbordSlider = () => {
const [callOpen,setCallOpen] = useState(false)
  const slides = [
    {
      title: "Hospital Care at Your Home",
      desc: "High-quality ICU, nursing & medical care in the comfort of your home.",
      img: doctorimg,
    },
    {
      title: "Buy or Rent Top-Quality medical Equipment with Ease",
      desc: "Choose from a wide selection of medical equipment, available for both purchase and rental. We make it easy to get the quality equipment you need, when and how you need i",
      img: femaledoctorimg,
    },
  ];
  return (
    <div className='dasboradmain'>
      <div className="w-full max-w-6xl mx-auto mt-2">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="rounded-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-6 bg-[#e8f8f9] p-10 rounded-lg">
                <div className="flex justify-center items-center">
                <div>
                    <h2 className="text-3xl font-bold  text-[#018592] mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6">{slide.desc}</p>
                  <div className="md:flex sm:flex flex-wrap gap-6 mt-5 relative items-center">
                    <a target='_blank' href="https://wa.me/917206783874">
                    <button className="px-5 py-2 border-2 border-amber-500 text-amber-500 rounded-full cursor-pointer font-bold text-lg mt-3 hover:bg-amber-500 hover:text-white">
                      Book Appointment
                    </button>
                    </a>
                    <div>
                      <button onClick={()=>setCallOpen(!callOpen)} className="px-5 py-2 bg-[#019196] flex items-center gap-3 text-white cursor-pointer font-bold text-lg rounded-full mt-3 hover:border-[#019196] hover:border hover:bg-white hover:text-[#019196]">
                      Call Now <p className='font-bold text-xl'><IoIosCall/></p>
                    </button>
                     { callOpen && <div className="bg-white rounded-2xl absolute top-14 shadow-2xl p-5 z-50">
                        <p className="flex items-center gap-2 pt-2"><IoIosCall className="text-xl" /> 72067-83874</p>
                        <p className="flex items-center gap-2 pt-2"> <IoIosCall className="text-xl" /> 8920-889555</p>
                    </div>}
                    </div>
                  </div>
                </div>
                </div>

                <div className="flex gap-7 ">
                  <div>
                    <img className='w-30 mt-8 hidden md:flex' src={arrowimg} alt="" />
                  </div>
                  <img
                    src={slide.img}
                    alt="medical equipment"
                    className="rounded-lg md:w-100 w-full mt-2"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default DasbordSlider
