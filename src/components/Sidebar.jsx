import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'

function Sidebar({styling, state}) {
  const links = useRef({});
  const tl = useRef(null);
  const menu = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        const one = links.current[0];
      const two = links.current[1];
      const three = links.current[2];
      const four = links.current[3];
      tl.current = gsap.timeline({paused: true});
      tl.current.to(menu.current, {
        top: 0,
        duration: 0.5,
        ease: 'power3.inOut'
      });
       tl.current.from([one, two, three, four], {
        opacity: 0,
        y:-20, 
        ease: 'power4.in',
        duration:0.5,
        stagger: 0.5
      });    
      })
       return () => ctx.revert()
    }, [links, menu]);

    useEffect(() => {
      state ? tl.current.play() : tl.current.reverse()
    }, [state])

  return (
    <div className={`${styling? styling : ''}`}>
        <div ref={menu} className="flex flex-col pl-10 gap-4 uppercase tracking-widest pt-36 fixed -top-[100vh] h-screen right-0 bg-[#979797] text-sm backdrop-blur-2xl bg-opacity-5 left-32 z-30">
        {["home", "destination", "crew", "technology"].map((item, index) => (
          <NavLink ref={el => links.current[index] = el} key={item}
            to={`${item === "home" ? "/" : `/${item}`}`}
            className={({ isActive }) => (`relative hover:after:absolute py-4 hover:after:inline-block hover:after:bottom-0 hover:after:top-0 hover:after:right-0 hover:after:w-1.5 ${isActive ? 'after:absolute after:inline-block after:bottom-0 after:top-0 after:right-0 after:w-1.5 after:bg-white after:animate-spread ' : 'after:transition-all after:duration-500 after:ease-out hover:after:animate-spread hover:after:bg-gray-500'}`)}>
            <span className="font-bold mr-1.5 md:hidden xl:inline-block">{`0${index}`}</span>
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar