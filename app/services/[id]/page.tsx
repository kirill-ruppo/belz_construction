import CustomButton from '@/components/CustomButton';
import CustomTitle from '@/components/CustomTitle';
import React from 'react';
import { servicesData } from '@/app/servicesData';
export default function ServicePage ({params}: {
    params:{id: string}
})  {
    const { id } = params;

    // Знайдіть відповідний сервіс за slug
    const service = servicesData.find(service => service.slug === id);

    if (!service) {
        return <div>Service not found</div>;
    }

    const bannerStyle = {
        backgroundImage: "url('/img/home/test.jpg')",
        backgroundSize: 'cover',
    }
 
  return (
    <div>
        <div className='w-full h-[700px] flex justify-center items-center flex-col text-white'  style={bannerStyle}>
            <h1 className='text-white text-[55px] font-bold'>{service.title}</h1>
        </div>
        <div className='w-full h-full flex flex-col items-center'>
            <div className='w-[80%]'>
                <p className='text-black text-3xl font-normal'></p>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{service.title}</h1>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{service.desc}</p>
                        </div>
                        <div  className="flex flex-wrap -m-4">
                        {service.details.map(({title, text}) => (
                                <div key={1+2} className="xl:w-1/3 md:w-1/2 p-4">
                                    <div className="border border-gray-200 p-6 rounded-lg">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
                                        <p className="leading-relaxed text-base">{text}</p>
                                    </div>
                                </div>
                           
                        ))} 
                         </div>           
                </div>
                </section>
            </div>
            <div className='w-full h-[350px] bg-yellow flex items-center justify-center flex-col mt-12'>
                <CustomTitle text='Contact Us' textMain='Do you want to start with us as soon as possible?' textMainColor={false} />
                <CustomButton
                    text="Contact Us"
                    styles="rounded-[50px] w-[276px] h-[54px] text-white bg-black text-xl font-normal flex justify-center items-center hover:bg-yellow hover:text-black hover:border hover:border-2"
                    route="/contact"
                    />
            </div>
        </div>
    </div>
  );
}



{/* <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor"  className="w-6 h-6" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor"  className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor"  className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div> */}