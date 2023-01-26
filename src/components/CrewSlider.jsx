import React, { useEffect, useRef, useState } from 'react'
import { crewMembers } from "../utils/data";


function CrewSlider() {
    const [active, setActive] = useState(0);    
     
    useEffect(() => {
      const lastIndex = crewMembers.length - 1;
      if(active < 0 ){
        setActive(lastIndex)
      }
      if(active > lastIndex){
        setActive(0)
      }
    }, [active, crewMembers]);
  
    useEffect(() => {
       let slider = setInterval(() => {
        setActive(active + 1)
       }, 3000);
       return () => clearInterval(slider)
    }, [active]);

      
  return (
    <div className="flex mb-10 xl:mb-0 w-full relative h-full">
    {
     crewMembers.map(({name, desc, img, rank}, index) => (
     <div key={index}  className={`w-full h-full mx-8 xl:ml-44 xl:mr-10 ${index === active? '': 'hidden'}`}>        
    <div className='flex flex-col animation-delay-[2300ms] transition-all duration-500 ease-in xl:flex-row animate-crew'>
    <div className=" text-center md:order-1 mt-20 md:mt-10 md:mb-16 xl:mb-0 order-2 flex flex-col gap-4 md:gap-6 xl:justify-start xl:mt-14 xl:text-start tracking-widest">
     <div className='tracking-wider'>
     <p className="text-lg md:text-2xl uppercase text-gray-400 font-belleFair">{rank}</p>
     <h3 className="text-2xl mb-4 mt-2 uppercase font-belleFair md:text-5xl">
       {name}
     </h3>
     <p className="md:w-[500px] text-[#D0D6F9] text-sm mx-auto xl:mx-0 leading-5 xl:leading-6">
       {desc}
     </p>
     </div>
   </div>
   <div className="xl:h-[480px] mx-auto flex xl:w-[450px] order-1 md:order-2 w-72 h-80 md:w-96 md:h-96 relative after:absolute after:inline-block after:md:hidden after:h-[1px] after:bottom-0 after:w-full after:bg-gray-50 ">
     <img className="w-full h-full mx-auto 0" src={img} alt={`picture of ${name}`}/>
   </div>
    </div>
   <div className="w-full absolute left-0 xl:left-44 top-80 md:top-44 xl:top-64 mt-10 xl:my-0 justify-center xl:justify-start gap-4 flex">
    {
     crewMembers.map(({rank}, index) => (
      <span key={rank} onClick={() => setActive(index)} className={`inline-block rounded-full w-2.5 h-2.5 text-center cursor-pointer ${active === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-500'}`}></span>
     ))
    }
   </div>
     </div>
     ))
    }
    </div>
  )
}

export default CrewSlider