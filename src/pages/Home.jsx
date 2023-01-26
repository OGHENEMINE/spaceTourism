import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import { gsap } from "gsap/all";

function Home() {
  let subtitle = useRef(null);
  let space = useRef(null);
  let desc = useRef(null);
  let explore = useRef(null);
 
  // using gsap to write out element animation
  useEffect(() => {
   const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from([subtitle, space], {
      opacity: 0,
      y: -10,
      skewY: 5,
      ease: "power3.in",
      duration: 0.5,
      stagger: {
        amount: 0.5,
      },
    });
    tl.from(desc, {
      opacity: 0,
      x: 10,
      ease: "power3.in",
      duration: 0.5,
    });
    tl.from(explore, {
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.5
    });
   })
   return () => ctx.revert(); 

  }, [subtitle, space, desc, explore]);

  return (
    <div className="text-white relative max-w-full min-h-screen overflow-hidden bg-cover bg-center object-cover bg-[url('/home/background-home-mobile.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] xl:bg-[url('/home/background-home-desktop.jpg')]">
      <Topbar />
      <div className="flex flex-col px-2 xl:flex-row xl:px-20 md:mt-20 xl:mt-32 my-12 md:mx-12">
        <div className="md:w-5/6 text-[#D0D6F9] xl:w-2/6 mx-auto text-center tracking-widest xl:text-start">
          <p
            ref={el => subtitle = el}
            className="text-lg font-belleFair xl:text-xl uppercase"
          >
            so, you want to travel to
          </p>
          <h1
            ref={el => space = el}
            className="text-white font-belleFair uppercase text-7xl md:text-8xl xl:text-9xl mb-6 mt-3"
          >
            space
          </h1>
          <p
            ref={el => desc = el}
            className="tracking-widest leading-6 mb-14 md:mb-10 xl:mb-0 px-6 md:px-28 xl:px-0 text-sm"
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link ref={el => explore = el} to="/destination" className="mx-auto xl:pl-48">
          <div  className=" md:w-60 w-40 z-10 before:absolute cursor-pointer before:w-full before:h-full before:bg-white mt-10 md:mt-20 before:rounded-full before:-z-10 before:opacity-60 before:hover:animate-pulse-circle transition duration-700 ease-in-out md:mb-5 md:h-60 h-40 bg-white relative text-black font-belleFair rounded-full">
            <span className="absolute top-1/2 tracking-widest text-2xl md:text-3xl -translate-y-1/2 left-1/2 -translate-x-1/2 uppercase">
              explore
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
