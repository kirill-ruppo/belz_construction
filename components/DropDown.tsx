import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/app/servicesData';
// export const DropdownButton = ({ children }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     clearTimeout(timeoutId); // Clear any existing timeout
//   };

//   const handleMouseLeave = () => {
//     // Set a timeout to hide the dropdown after a short delay
//     const id = setTimeout(() => setIsHovered(false), 200); // Adjust the delay as needed
//     setTimeoutId(id);
//   };

//   return (
//     <div
//       className="relative group"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <span className="cursor-pointer text-white">{children}</span>
//       {isHovered && (
//         <div className="w-[100px] absolute hidden md:flex flex-col mt-2 space-y-2 bg-white p-2 rounded shadow">
//           <ul>
//             <li>Service 1</li>
//             <li>Service 2</li>
//             <li>Service 3</li>
//             <li>Service 4</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

export const DropdownButton = ({ children }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timeoutId); // Clear any existing timeout
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after a short delay
    const id: any = setTimeout(() => setIsHovered(false), 200); // Adjust the delay as needed
    setTimeoutId(id);
  };

  const handleClick = () => {
    // Toggle the dropdown on click for mobile
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Add click handler
    >
      <span className="cursor-pointer text-white">{children}</span>
      {isHovered && (
        <div className="w-[150px] absolute hidden md:flex flex-col mt-2 space-y-2 bg-white p-2 rounded shadow">
          <ul>
          {servicesData.map(({slug, title}) => (
             <li key={slug} className='text-xs p-2 hover:bg-pale_black hover:text-white duration-75'>
             <Link href={`/services/${slug}`}>
               {title}
             </Link>
           </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
};

  
  