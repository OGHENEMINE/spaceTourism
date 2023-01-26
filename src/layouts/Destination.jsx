import React from "react";
import { Outlet } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Topbar from "../components/Topbar";

function Destination() {


  return (
    <div className="text-white relative max-w-full min-h-screen overflow-hidden bg-cover bg-center object-cover bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] xl:bg-[url('/destination/background-destination-desktop.jpg')]">
      <Topbar />
      <PageTitle title='pick your destination' num='01'/>
      <div className="transition duration-500 ease-in-out">
        <Outlet />
      </div>
    </div>
  );
}

export default Destination;
