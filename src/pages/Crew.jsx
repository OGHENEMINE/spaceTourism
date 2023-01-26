import React, { useEffect, useRef } from "react";
import CrewSlider from "../components/CrewSlider";
import Topbar from "../components/Topbar";
import gsap from "gsap";
import PageTitle from "../components/PageTitle";

function Crew() {
  
  return (
    <div className="text-white relative max-w-full min-h-screen xl:h-screen overflow-hidden bg-cover bg-center object-cover bg-[url('/crew/background-crew-mobile.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] xl:bg-[url('/crew/background-crew-desktop.jpg')]">
      <Topbar />
      <PageTitle title='meet your crew' num='02'/>
      <CrewSlider/>
    </div>
  );
}

export default Crew;
