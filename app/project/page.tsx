"use client"
import React from 'react'
import { sliderPhotos } from '../servicesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export default function ProjectPage() {
  const bannerStyle = {
    backgroundImage: "url('/img/project/Banner.png",
    backgroundSize: 'cover',
  }
  const breakpoints = {
    1200: {slidesPerView: 3},
    750: { slidesPerView: 2 },
    700: { slidesPerView: 1 },

  };
  
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[700px] flex justify-center items-center flex-col text-white '  style={bannerStyle}>
            <h1 className='text-white text-center p-2 text-[30px] md:text-[55px] font-bold'>Project Name</h1>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center bg-yellow'>
        <div className='w-[90%] h-full flex flex-col justify-center items-center'>
          <h2 className='text-center text-black text-[35px] font-semibold'>On our website, we take pride in presenting our latest project - a vast residential complex.</h2>


          <section className="w-[95%] text-gray-400 bg-gray-900 body-font">
              <div className="container  py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0  overflow-hidden">
                  <img alt="feature" className="object-cover object-center h-full w-full" src="img/home/test.jpg"/>
                </div>
                <div className="flex flex-col flex-wrap lg:py-6  lg:w-1/2 lg:pl-12 lg:text-left text-center lg:rounded-tr-[50px] lg:rounded-br-[50px] bg-white">
                  <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                      <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-black text-lg title-font font-medium mb-3">Teamwork</h2>
                      <p className="leading-relaxed text-base">Our team executed a variety of tasks, from laying the foundation to completing the finishing touches, to create this unique complex. </p>
                     
                    </div>
                  </div>
                  <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                      <svg fill="none" stroke="currentColor"  className="w-6 h-6" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-black text-lg title-font font-medium mb-3">Attention to details</h2>
                      <p className="leading-relaxed text-base">Special attention was given not only to the interior infrastructure but also to the structure and the surrounding area, ensuring comfort and convenience for all residents. </p>
                      <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor"  className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                      <svg fill="none" stroke="currentColor"  className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-black text-lg title-font font-medium mb-3">High quality</h2>
                      <p className="leading-relaxed text-base">We are proud that all work was carried out by qualified and licensed professionals to ensure the highest quality standards. Our team worked diligently to meet tight deadlines, ensuring a swift completion of the complex. With us, you can be confident that your project will be executed professionally and on schedule. </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>

        <div className='w-[90%] flex flex-col justify-center items-center'>
          <div className='w-full'>
              <p className='text-black text-[25px] font-medium'>Creating this residential complex presented us with numerous complex engineering challenges that required exceptional knowledge and experience. However, thanks to our team of professionals, these challenges were overcome with ease. Our ability to devise innovative solutions and effectively address technical issues allowed us to successfully realize the project and create a modern residential complex that combines a high level of comfort and safety.</p>
          </div>
          <div className="w-full h-[700px] flex flex-col items-center justify-evenly overflow-hidden">
            <Swiper
              spaceBetween={50}
              breakpoints={breakpoints}
              navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {sliderPhotos.map(({img}) => (
                  <SwiperSlide key={1+2}><Image src={img} alt='mainBannerPhoto' width={500} height={100} /></SwiperSlide>
              ))}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
       
     
      </div>

    </div>
  )
}
