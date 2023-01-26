import React, { useEffect, useState } from 'react'
import { technologyItem } from "../utils/data";


function TechSlider() {
    const [active, setActive] = useState(0)
   
  useEffect(() => {
    const lastIndex = technologyItem.length - 1
    if(active < 0){
      setActive(0)
    };
    if(active > lastIndex){
      setActive(0)
    }
  },[active, technologyItem]);

  useEffect(() => {
    const slider = setInterval(() => {
      setActive(active + 1);
    }, 3000);

    return () => clearInterval(slider)
  }, [active])
  
  return (
    <div className='flex w-full h-full relative'>
    {technologyItem.map(({title, landscapeImg, portraitImg, desc}, index) => (
    <>
      <div className={`flex flex-col  animate-tech animation-delay-[2300ms] transition-all duration-500 ease-in-out xl:flex-col w-full h-full xl:ml-44 xl:mr-0 ${active === index? '' : 'hidden'}`}>        
       <div className="text-center text-[#D0D6F9] relative xl:h-screen flex flex-col xl:justify-start xl:ml-36 md:order-1 order-2 mt-28 md:mt-36 xl:mt-28 xl:text-start tracking-widest">
       <p className="uppercase text-sm">THE TERMINOLOGY…</p>
       <h3 className="text-2xl text-white uppercase font-belleFair md:text-6xl mt-2.5 mb-6">
       {title}
       </h3>
       <p className="xl:w-[380px] md:w-[500px] text-sm mx-6 md:mx-auto xl:mx-0 mb-24 xl:mb-0 leading-6">
       {desc}
       </p>
     </div>
     <div className="w-[450px] hidden h-[430px] absolute right-0 top-0 xl:flex" >
       <div className="w-full h-full" style={{
                               backgroundImage: `url(${portraitImg})`,
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                               backgroundSize: 'cover'}}>          
       </div>
     </div>
     <div className="xl:hidden w-screen mt-5 md:mt-0 h-56 md:h-[400px] relative" >
       <div className="w-full h-full" style={{
                               backgroundImage: `url(${landscapeImg})`,
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                               backgroundSize: 'cover'}}>          
       </div>
     </div>
       </div>
       <div className='flex absolute left-1/2 -translate-x-1/2 xl:left-60 font-belleFair top-72 md:top-[450px] xl:top-32 xl:flex-col gap-6'>
         {technologyItem.map(({title}, index) => (
           <span key={index} onClick={() => setActive(index)} className={`inline-flex items-center justify-center cursor-pointer text-lg md:text-xl w-12 md:w-14 h-12 md:h-14 rounded-full border text-center ${active === index? 'bg-white text-black' : ' border-gray-700 hover:border-white'}`}>{index + 1}</span>
         ))}
       </div>
    </>
  ))}
   </div> 
  )
}

export default TechSlider