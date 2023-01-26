import React from 'react'
import Topbar from "../components/Topbar";
import TechSlider from '../components/TechSlider';
import PageTitle from '../components/PageTitle';


function Technology() {
  

  return (
    <div className="text-white relative max-w-full min-h-screen xl:h-screen overflow-hidden bg-cover bg-center object-cover bg-[url('/technology/background-technology-mobile.jpg')] md:bg-[url('/technology/background-technology-tablet.jpg')] xl:bg-[url('/technology/background-technology-desktop.jpg')]">
    <Topbar />
    <PageTitle title='space launch 101' num='03'/>
   <TechSlider/>
  </div>
  )
}

export default Technology