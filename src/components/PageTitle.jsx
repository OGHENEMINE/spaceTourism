import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

function PageTitle({title, num}) {
    const pageTitle = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(pageTitle.current, {
          opacity: 0,
          y: 25,
          duration: 0.5,
          ease: 'power2.in'
      });       
    })

    return () => ctx.revert()
    }, [pageTitle]);
  return (
    <div>
    <h4 ref={pageTitle} className="text-white w-full mt-10 text-center md:ml-11 xl:ml-44 md:text-start uppercase text-lg md:text-2xl tracking-widest font-medium">
       <span  className="text-gray-500 font-bold">{num}</span> {title}
     </h4>
    </div>
  )
}

export default PageTitle