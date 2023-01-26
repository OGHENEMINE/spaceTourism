import React from "react";
import DestinationNav from "../components/DestinationNav";
import CountUp from "react-countup";

function Europa() {
  return (
    <div className="xl:px-24 lg:my-0 my-12 px-10 lg:px-12">
      <div className="grid md:grid-cols-1 xl:grid-cols-2 place-content-between items-center mt-6">
        <div className="mx-auto">
          <img
            width={350}
            height={350}
            alt="a picture of europa"
            className="animate-orbit w-72 md:w-96"
            src="/destination/image-europa.webp"
          />
        </div>
        <div className="md:w-5/6 lg:w-4/6 mt-10 md:mt-14 xl:mt-0 mx-auto text-center xl:text-start">
          <DestinationNav title="europa">
            <p className="text-sm relative after:absolute after:left-0 after:right-0 after:-bottom-8 after:inline-block after:bg-gray-500 after:h-[0.5px] text-[#D0D6F9] leading-7 md:tracking-widest">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </DestinationNav>
          <div className="tracking-widest text-[#D0D6F9] flex md:flex-row flex-col mt-20 lg:mt-14 gap-12 md:gap-60 xl:gap-9 items-center justify-center xl:justify-start text-sm uppercase">
            <div>
              <p>AVG. DISTANCE</p>
              <p className="text-white md:w-40 text-3xl mt-1 md:text-2xl font-belleFair">
                <CountUp start={50} end={628} delay={1} duration={2} /> MIL. km
              </p>
            </div>
            <div>
              <p>Est. travel time</p>
              <p className="text-white md:w-40 text-3xl mt-1 md:text-2xl font-belleFair">
                <CountUp start={0} end={3} delay={1} duration={2} /> years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Europa;
