"use client"
import React, {useState} from 'react'
import CustomTitle from './CustomTitle'
import CustomButton from './CustomButton'
import Link from 'next/link'
import { servicesData } from '@/app/servicesData'
export default function Footer() {
    const questions = [
        {
          question: 'What services does Belz Construction Company provide?',
          answer: 'Answer 1 Lorem ipsum dolor sit amet...',
        },
        {
          question: 'Where is the office of Belz Construction Company located?',
          answer: 'Answer 2 Lorem ipsum dolor sit amet...',
        },
        {
          question: 'What types of construction projects does Belz Construction Company specialize in?',
          answer: 'Answer 3 Lorem ipsum dolor sit amet...',
        },
        {
          question: 'What types of construction projects does Belz Construction Company specialize in?',
          answer: 'Answer 4 Lorem ipsum dolor sit amet...',
        },
      ];

        const [activeIndex, setActiveIndex] = useState(-1);
      
        const handleActiveButton = (index: number) => {
          setActiveIndex(index === activeIndex ? -1 : index);
        };
    


  return (
        <div className='w-full h-full  '>
            <div className='w-full h-full '>
            <div className="flex flex-col items-center justify-center custom-background w-full h-[700px]">
                <CustomTitle text='Frequently Asked Questions' textMain='Get Every Answer From Here' textMainColor={false}/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg'>
                {questions.map((item, index) => (
                    <div key={index} className='w-full'>
                    <button
                        className='w-full text-left border-2 border-pale_yellow p-2 hover:bg-pale_yellow hover:text-black text-lg'
                        onClick={() => handleActiveButton(index)}
                    >
                        {item.question}
                    </button>
                    <p className={activeIndex === index ? 'block  p-4' : 'hidden'}>{item.answer}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>

        <footer className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24  mx-auto flex md:items-center lg:items-start  md:flex-nowrap flex-wrap flex-col">
            <div className="w-[100%] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex justify-between items-center flex-col md:flex-row">
                    <span className=" text-white text-4xl font-bold">Lets Make Your Dream House Together</span>
                    <CustomButton route='/contact' text='Contact Us' styles='rounded-[50px] w-[276px] h-[54px] text-white bg-yellow text-xl font-normal flex justify-center items-center hover:bg-black hover:text-White mt-3'></CustomButton>
                   
            </div>

            <div className='w-[100%] h-[2px] bg-yellow mt-5 mb-5'></div>

            <div className="flex-grow flex flex-row flex-wrap  text-left justify-center  text-white">
                <div className='md:w-[30%] w-[90%] mb-3'>
                    <p className='text-white font-semibold'>We are a leading firm for all your construction, engineering, architecture, and interior needs.</p>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className=" font-medium text-gray-900 tracking-widest text-sm mb-3">Our Links</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link className="text-gray-600 hover:text-gray-800" href='/about'>+ About Us</Link>
                        </li>
                        <li>
                            <Link className="text-gray-600 hover:text-gray-800" href='/contact'>+ Contact Us</Link>
                        </li>
                        <li>
                            <Link className="text-gray-600 hover:text-gray-800" href='/project'>+ Project Us</Link>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className=" font-medium text-gray-900 tracking-widest text-sm mb-3">Our Services</h2>
                    <nav className="list-none mb-10">
                        
                        {servicesData.map(({title, slug}) => (
                            <li key={1+2}>
                                <Link href={`/services/${slug}`}>+ {title}</Link>
                            </li>
                        ))}                      
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© 2023 CXDevelopment —
                <a href="mailto: cxdevelopment@gmail.com" rel="noopener noreferrer" className="text-white ml-1" target="_blank">cxdevelopment@gmail.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                <svg fill="white"   className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
                </a>
                <a className="ml-3 text-gray-500">
                <svg fill="white"   className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                </a>
                <a className="ml-3 text-gray-500">
                <svg fill="white" stroke="currentColor"   className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
                </a>
                <a className="ml-3 text-gray-500">
                <svg fill="white" stroke="currentColor"  className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
                </a>
            </span>
            </div>
        </div>
        </footer> 
    </div>
  )
}
