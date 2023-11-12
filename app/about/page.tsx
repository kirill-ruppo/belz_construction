import React from 'react'
import CustomTitle from '@/components/CustomTitle'
import Image from 'next/image'
export default function About() {
    const bannerStyle = {
        backgroundImage: "url('/img/about/Banner.png",
        backgroundSize: 'cover',
    }
  return (
    <div>
        <div className='w-full h-[700px] flex justify-center items-center flex-col text-white '  style={bannerStyle}>
            <h1 className='text-white text-[55px] font-bold'>About Us</h1>
        </div>

        <div className='w-full flex flex-col items-center'>
          <div className='w-[85%] pt-10'>
            <h2 className='text-4xl font-semibold'>Welcome to Belz Construction Company!</h2>
            <p className='text-black text-[26px] font-normal mt-10 mb-10'> With years of experience in the construction industry, we are a trusted and reliable company that handles all kinds of construction projects. Whether you are looking to build, remodel, or renovate, we have the expertise and resources to turn your vision into reality.</p>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-3 border-yellow border-2">
                  <Image src='/img/home/about.jpg' alt='mainBannerPhoto' width={800} height={500} />
              </div>
              <div className="justify-between lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
                <p className="mb-8 leading-relaxed text-black text-[22px]">At Belz Construction Company, we understand that every project is unique. From residential to commercial, large-scale to small-scale, we approach each undertaking with the utmost professionalism and attention to detail. Our comprehensive services include design and planning, project management, site preparation, construction, and post-construction maintenance. We work closely with our clients to understand their specific requirements, providing tailored solutions that meet their expectations and exceed industry standards.</p>
              </div>
            </div>
          </div>
        </div>

        


        <div className='w-full flex flex-col justify-center items-center bg-yellow pt-5 pb-5'>
          <CustomTitle text='WHY CHOOSE US' textMain='Our Services' textMainColor={false}/>
          <div className='w-[90%] flex flex-col flex-wrap justify-between items-center md:flex-row'>
              <div className='w-[90%] md:w-[30%] h-[400px] flex flex-col justify-center items-center bg-white rounded-[50px] border-2 border-black'>
                <img src='img/about/1.jpg'></img>
                <h2 className='text-black text-[34px] font-bold'>Construction</h2>
                <p className='p-4'>Make your construction plans with the help of our drafting services to ensure you get what you imagined.</p>
              </div>
              <div className='w-[90%] md:w-[30%] h-[400px] flex flex-col justify-center items-center bg-white rounded-[50px] border-2 border-black'>
                <img src='img/about/2.jpg'></img>
                <h2 className='text-black text-[34px] font-bold'>Architecture</h2>
                <p className='p-4'>Avail the skills of our architecture professionals to design exceptional commercial and residential building</p>
              </div>
              <div className='w-[90%] md:w-[30%] h-[400px] flex flex-col justify-center items-center bg-white rounded-[50px] border-2 border-black'>
                <img src='img/about/3.jpg'></img>
                <h2 className='text-black text-[34px] font-bold'>Interior</h2>
                <p className='p-4'>Plan your interior remodeling now with our help, as we provide tools to help you envision the space.</p>
              </div>
          </div>
        </div>
    </div>
  )
}
