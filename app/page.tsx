"use client"
import Image from 'next/image';
import React from 'react';
import CustomButton from '@/components/CustomButton';
import CustomTitle from '@/components/CustomTitle';
import ServiceCard from '@/components/aboutus_components/ServiceCard';
import { servicesData, sliderPhotos } from './servicesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/a11y/a11y.min.css';
SwiperCore.use([Navigation, Pagination, A11y]);




export default function Home() {
  const bannerStyle = {
    backgroundImage: "url('/img/home/Banner.png')",
    backgroundSize: 'cover',
    backgroundOpacity: 1,
  };
  const breakpoints = {
    1200: {slidesPerView: 3},
    750: { slidesPerView: 2 },
    700: { slidesPerView: 1 },

  };
  

  return (
    <div className='w-full h-full'>
      <div className='w-full h-[700px] flex justify-center items-start flex-col text-white ' style={bannerStyle}>
        <div className="md:w-[80%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-left mb-4 px-4">
            Building Foundations, Creating Legacies!
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center lg:text-left px-4">
            A construction company plays a vital role in shaping the built environment, and its impact can be long-lasting. Building foundations and creating legacies are two fundamental aspects that define the essence of a construction company.
          </p>
        </div>
      </div>

      {/* <div className='w-full h-[1000px] flex justify-evenly items-center'>
        <div className='w-[30%] p-3 justify-center items-center inline-flex border-yellow border-2'>
          <Image src='/img/home/about.jpg' alt='mainBannerPhoto' width={800} height={500} />
        </div>

        <div className='w-[30%]'>
          <h2 className='text-yellow text-[55px]'></h2>
          
          <p className='text-black text-[22px]'>
            
          </p>
          
        </div>
      </div>  */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image src='/img/home/about.jpg' alt='mainBannerPhoto' width={800} height={500} />
          </div>
          <div className="justify-between lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
            <h2 className="sm:text-[55px] text-4xl text-yellow ">About Us</h2>
            <div className="w-[355px] border-2 border-black mt-7 mb-14"></div>
            <p className="mb-8 leading-relaxed text-black text-[22px]">BELZ Construction Company is a leading player in the construction industry, renowned for its commitment to excellence, innovation, and delivering exceptional construction projects. With a rich history spanning several decades, BELZ Construction Company has earned a stellar reputation for its unmatched craftsmanship, reliability, and dedication to client satisfaction. From residential buildings to commercial complexes and infrastructure projects, BELZ Construction Company has left an indelible mark on the landscape, shaping communities and transforming visions into reality.</p>
            <CustomButton
              text="Learn more about us"
              route='/about'
              styles='w-[365px] h-20 rounded-[50px] justify-center items-center inline-flex text-black text-2xl font-semibold bg-yellow transition-transform transform hover:scale-105 hover:text-white hover:bg-black'
            />
          </div>
        </div>


    <CustomTitle text='WHY CHOOSE US' textMain='Our Services' textMainColor={true} titleDesc='A construction company offers a wide range of services to facilitate the successful completion of construction projects. These services encompass various stages of the construction process, from initial planning to final completion. Here are some common services provided by construction companies:'/>

    
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className='w-full h-[350px] bg-yellow flex items-center justify-center flex-col mt-12'>
          <CustomTitle text='Contact Us' textMain='Do you want to start with us as soon as possible?' textMainColor={false} />
          <CustomButton
              text="Contact Us"
              styles="rounded-[50px] w-[276px] h-[54px] text-white bg-black text-xl font-normal flex justify-center items-center hover:bg-yellow hover:text-black hover:border hover:border-2"
              route="/contact"
            />
      </div>


      <div className='w-full flex items-center flex-col mt-5 mb-5'>
        <CustomTitle text='Work Process' textMain='How Our Work Process' textMainColor={false}/>
          <div className='w-[90%] flex justify-around items-center mt-7 flex-wrap'>
            <div className="w-[300px] h-[300px] bg-black rounded-[50px] shadow flex flex-col items-center justify-center m-3">
                <h3 className='text-white text-[100px] font-bold'>01</h3>
                <h4 className='text-white text-[31px] font-bold'>Receive Project</h4>
            </div>
            <div className="w-[300px] h-[300px] bg-black rounded-[50px] shadow flex flex-col items-center justify-center m-3">
                <h3 className='text-white text-[100px] font-bold'>02</h3>
                <h4 className='text-white text-[31px] font-bold'>Planning Work</h4>
            </div>
            <div className="w-[300px] h-[300px] bg-black rounded-[50px] shadow flex flex-col items-center justify-center m-3">
                <h3 className='text-white text-[100px] font-bold'>03</h3>
                <h4 className='text-white text-[31px] font-bold'>Creative Design</h4>
            </div>
            <div className="w-[300px] h-[300px] bg-black rounded-[50px] shadow flex flex-col items-center justify-center m-3">
                <h3 className='text-white text-[100px] font-bold'>04</h3>
                <h4 className='text-white text-[31px] font-bold'>Start Building</h4>
            </div>

          </div>
      </div>

      <div className="custom-background w-full h-[700px] flex flex-col items-center justify-evenly overflow-hidden">
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
     
      <CustomButton route='/project' text='More about project' styles='rounded-[50px] w-[276px] h-[54px] text-white bg-black text-xl font-normal flex justify-center items-center hover:bg-yellow hover:text-black hover:border hover:border-2'/>
    </div>


      <div className="bg-yellow  md:flex md:items-center">
          <div className="md:w-1/2 p-4">
            <CustomTitle text='OUR STRATEGY' textMain='Unique Concepts for Exceptional Interiors' textMainColor={false}/>
            <p className='text-black text-[25px] font-normal p-7'>Are you seeking truly unique interiors that reflect your vision? Our design services are tailored to bring your ideas to life. With our expertise, we provide a visual representation of your future interiors, allowing you to envision and customize every detail. By working closely with you, we ensure that the design aligns with your specific needs and desires. Let us help you create extraordinary spaces that exceed your expectations.</p>
          </div>
          <div className="md:w-1/2">
            <img src="img/home/about.jpg" alt="Зображення" className="w-full h-auto" />
          </div>
      </div>

    </div>
  );
}
