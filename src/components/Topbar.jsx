import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Topbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center pt-8 md:pt-0 xl:pt-10 md:pl-10 md:pr-0 px-8">
      {/* APP ICON STARTS HERE */}
      <div>
      <img
        height={48}
        width={48}
        className="w-10 h-10 md:w-14 md:h-14"
        src="/shared/logo.svg"
      />
      </div>
      {/* APP ICON ENDS HERE */}

      {/* APP NAV ITEMS STARTS HERE */}
      <div className="hidden uppercase md:h-20 md:flex items-center justify-center xl:justify-start xl:before:absolute xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:-left-[368px] xl:before:inline-block xl:before:bg-gray-500 xl:before:w-[400px] xl:before:h-[1px] xl:pl-28 border border-opacity-10 relative border-gray-400 gap-14 xl:gap-14 w-full max-w-[600px] md:px-10 lg:px-0 xl:max-w-[800px] backdrop-blur-xl tracking-widest bg-gray-600 bg-opacity-5">
        {["home", "destination", "crew", "technology"].map((item, index) => (
          <NavLink key={item}
            to={`${item === "home" ? "/" : `/${item}`}`}
            className={({ isActive }) =>
              `relative py-8 h-full hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-1 ${
                isActive
                  ? "after:absolute after:inline-block after:bottom-0 after:animate-spread after:left-0 after:right-0 after:h-1 after:bg-white hover:after:bg-white"
                  : "after:transition-all after:duration-500 after:ease-out hover:after:animate-spread hover:after:bg-gray-500"
              }`
            }
          >
            <span className="font-bold mr-1.5 md:hidden xl:inline-block">{`0${index}`}</span>{" "}
            {item}
          </NavLink>
        ))}
      </div>
      {/* APP NAV ITEMS ENDS HERE */}

      {/* APP MOBILE NAV ITEMS STARTS HERE */}
      <Sidebar state={toggle} styling={`${toggle ? "" : "hidden"}`} />
      {/* APP MOBILE NAV ITEMS ENDS HERE */}

      {/* APP MOBILE NAV MENU TOGGLE BUTTON STARTS HERE */}
      <div className="md:hidden transition duration-150 ease-in-out">
        {/* TOGGLE OPEN BUTTON  */}

        <button
          className={`${toggle ? "hidden" : "hover:cursor-pointer"}`}
          onClick={() => setToggle(!toggle)}
        >
          <img width={24} height={21} src="/shared/icon-hamburger.svg" />
        </button>
        {/* TOGGLE CLOSE BUTTON  */}
        <button
          className={`${
            toggle
              ? "z-30 fixed hover:cursor-pointer top-10 right-9"
              : "hidden"
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <img width={22.05} height={21} src="/shared/icon-close.svg" />
        </button>
      </div>
      {/* APP MOBILE NAV MENU TOGGLE BUTTON ENDS HERE */}
    </nav>
  );
}

export default Topbar;
