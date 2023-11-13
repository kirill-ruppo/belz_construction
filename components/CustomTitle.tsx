import { CustomTitleProps } from "@/types";
import React from 'react'

export default function CustomTitle({text, textMain, textMainColor, titleDesc}: CustomTitleProps) {
  return (
    <div className="w-full  flex items-center justify-center flex-col">
        <div className="">
            <h3 className="text-black text-xl md:text-3xl font-normal">{text}</h3>
            <div className="w-[315.68px] h-[0px] border-2 border-black"></div>
        </div>

        <h2 className={`text-center p-3 ${textMainColor ? 'text-yellow' : 'text-black'} text-[35px]  md:text-[55px] font-bold`}>{textMain}</h2>
        <div className="w-[80%] mt-5 mb-5">
          <p className="text-left text-black text-[25px] text-base md:text-lg lg:text-xl font-medium">{titleDesc}</p>
        </div>
        
    </div>
  )
}
