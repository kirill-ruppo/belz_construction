import React from 'react'
import {ButtonPageLinkProps} from "@/types";
import { useRouter } from 'next/navigation'
function ButtonPageLink({children, route, onClick}: ButtonPageLinkProps) { 
  const router = useRouter()
  const handleClick = (e: any) => {
    onClick && onClick(e); // Викликайте переданий обробник подій
    router.push(route);
  };
  return (
    <button className='text-white hover:text-yellow duration-300 ease-linear active:text-focus' onClick={handleClick}>{children}</button>
  )
}

export default ButtonPageLink