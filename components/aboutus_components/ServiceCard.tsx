import React from 'react';
import { ServiceCardProps } from '@/types';
import Link from 'next/link';

export default function ServiceCard({ img, title, desc, slug }: ServiceCardProps) {
  return (
    <div className="w-[80%] max-h-[800px]  lg:w-[65%] bg-white shadow-custom-yellow border border-black transition-transform transform hover:scale-95 hover:shadow-none duration-1000 ease-in-out">
      <Link href="/services/[id]" as={`/services/${slug}`}>
        <img src={img} alt={title} className="w-full h-[40%]" />
        <div className="h-[400px] justify-between p-4 flex flex-col items-center">
          <h3 className="text-black text-xl md:text-2xl lg:text-3xl font-regular font-montserrat">{title}</h3>
          <p className="text-black text-base md:text-sm lg:text-xl font-normal font-montserrat leading-relaxed">{desc}</p>
          <button className="bg-yellow rounded-full w-[40%] h-[40px] text-center text-black text-sm font-normal">
            Read more
          </button>
        </div>
      </Link>
    </div>
  );
}
