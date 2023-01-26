import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import gsap from "gsap";


function DestinationNav({title, children}) {
    const links = useRef({});
  const tl = useRef(null);
  const titleRef = useRef(null);
  const desc = useRef(null);
   useEffect(() => {
    const ctx = gsap.context(() => {
      const one = links.current[0];
    const two = links.current[1];
    const three = links.current[2];
    const four = links.current[3];
  
   tl.current = gsap.timeline({delay: 0.4});
   tl.current.from([one, two , three, four], {
    opacity: 0,
     y:-10,
     duration: 0.4,
     stagger: 0.4,
     ease: 'power4.in'
   });
   tl.current.from([titleRef.current, desc.current], {
    opacity: 0,
    skewX:-10,
    x:20,
    duration: 0.5,
    ease: 'power3.in',
    stagger: 0.4
   })
    })

    return () => ctx.revert()
   }, [links, titleRef]);

  return (
    <>
        <nav>
            <div className="uppercase text-[#D0D6F9] flex items-center justify-center xl:justify-start gap-6 md:gap-10 xl:gap-5 tracking-wider lg:tracking-widest">
              {["moon", "mars", "europa", "titan"].map((item, index) => (
                <NavLink
                 end 
                 ref={el => links.current[index] = el}
                  key={item}
                  className={({ isActive }) =>
                    `relative hover:after:absolute hover:after:inline-block hover:after:h-1 hover:after:left-0 hover:after:right-0 hover:after:-bottom-2 ${
                      isActive
                        ? "after:animate-spread after:absolute after:inline-block text-white after:h-1 after:left-0 after:right-0 after:-bottom-2 after:bg-white hover:after:bg-white"
                        : "after:transition-all after:duration-500 after:ease-out hover:after:animate-spread hover:after:bg-gray-500"
                    }`
                  }
                  to={`${
                    item === "moon" ? "/destination" : `/destination/${item}`
                  }`}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </nav>
          <div>
            <h2 ref={titleRef} className="font-belleFair uppercase text-white text-6xl md:text-8xl my-7 xl:mt-8 xl:mb-4">
              {title}
            </h2>
            {children}
            </div>
    </>
  )
}

export default DestinationNav