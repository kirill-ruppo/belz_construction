"use client"
import React from 'react'
import {GoLocation} from 'react-icons/go'
import { useState, useEffect } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import ButtonPageLink from './ButtonPageLink'
import { DropdownButton } from './DropDown'
import { servicesData } from '@/app/servicesData'
import Link from 'next/link'
export default function MenuBar() {
  const [isOpen, setOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleButton = (e: any) =>{
    setDropdownOpen(!isDropdownOpen)
  }
  // const [isInMenu, setIsInMenu] = useState(false);


  // Заборона прокрутки при перебуванні в меню
  // useEffect(() => {
  //   if (isInMenu) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isInMenu]);

  const closeMenu = () => {
    setDropdownOpen(false);
    setOpen(!isOpen);
    console.log(isOpen)
  };
  return (
    <div  className='w-full h-[80px] bg-black relative flex items-center justify-center'>
      <div className='w-11/12 h-full flex flex-row items-center '>
          <div className='w-[100px]'>
            <img className='w-full' src='../img/home/logo.jpg' alt='logo'></img>
          </div>



        {/* панель меню для мобільних пристроїв */}
        <div className={isOpen ? 'fixed left-0 top-0 w-full h-full bg-pale_black ease-in-out duration-700' : 'fixed left-[-100%]'}> 
        <div className={isOpen ? 'fixed left-0 top-0 w-56 h-full bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <div className='w-11/12 h-full flex flex-col items-center'>
            <div className='w-[150px] '>
              <img className='w-full' src='../img/home/logo.jpg' alt='logo'></img>
            </div>
            <div className='flex flex-col h-48 gap-3 mt-5'>
                <ButtonPageLink route='/' onClick={(e: any) => { closeMenu(); }}>Home</ButtonPageLink>
                <ButtonPageLink route='/about' onClick={(e: any) => { closeMenu(); }}>About Us</ButtonPageLink>
                <div className='flex flex-col items-center'>
                  <button
                    name='about'
                    className='text-white hover:text-yellow duration-300 ease-linear active:text-focus'
                    onClick={handleButton}
                  >
                    Services
                  </button>
                  <ul className={isDropdownOpen ? 'w-[90%] flex flex-col items-start text-white' : 'hidden'}>
                      {servicesData.map(({title, slug}) => (
                        <Link key={1+2} href={`/services/${slug}`} onClick={closeMenu}>
                         <li className='w-full p-2 text-[12px]' >+ {title}</li>
                        </Link>
                      ))}
                  </ul>
                </div>
                <ButtonPageLink route='/contact' onClick={(e: any) => { closeMenu(); }}>Contact Us</ButtonPageLink>
                <div className='w-full p-5 flex fle items-center'>
                  <GoLocation size={25} color='#fff'/>
                    <div className='w-21 ml-2 text-white text-[12px]'>
                      7901 4th St N St. Petersburg, FL 33702
                    </div>
                </div>
            </div>

           

          </div>
        </div> 
        </div>
        {/* панель меню для desktop пристроїв */}
          <div className='relative w-full flex flex-row items-center justify-end'>
            <div className='block md:hidden '>
            <Hamburger color='white' size={22} toggled={isOpen} toggle={setOpen}></Hamburger>
            </div>
          
            <div className='w-1/2 hidden md:flex justify-evenly'>
              <ButtonPageLink route='/'>Home</ButtonPageLink>
              <ButtonPageLink route='/about'>About Us</ButtonPageLink>
              <DropdownButton>Services</DropdownButton>
              <ButtonPageLink route='/contact'>Contact Us</ButtonPageLink>
            </div>

            <div className='hidden md:flex items-center'>
              <GoLocation size={37} color='#fff'/>
              <div className='w-21 text-white'>
                7901 4th St N St.<br></br> Petersburg, FL 33702
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}





  

