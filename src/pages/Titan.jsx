import React from "react";
import DestinationNav from "../components/DestinationNav";
import CountUp from "react-countup";

function Titan() {
  return (
    <div className="lg:px-24 lg:my-0 my-12 px-10 md:px-12">
      <div className="grid md:grid-cols-1 xl:grid-cols-2 place-content-between items-center mt-6">
        <div className="mx-auto">
          <img
            width={350}
            height={350}
            alt="a picture of titan"
            className="animate-orbit w-72 md:w-96"
            src="/destination/image-titan.webp"
          />
        </div>
        <div className="md:w-5/6 xl:w-4/6 mt-10 md:mt-14 xl:mt-0 mx-auto text-center xl:text-start">
          <DestinationNav title='titan'>
            <p className="text-sm relative after:absolute after:left-0 after:right-0 after:-bottom-8 after:inline-block after:bg-gray-500 after:h-[0.5px] text-[#D0D6F9] leading-7 md:tracking-widest">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </DestinationNav>
          <div className="text-[#D0D6F9] tracking-widest flex md:flex-row flex-col mt-20 lg:mt-14 gap-12 md:gap-60 xl:gap-14 items-center justify-center xl:justify-start text-sm uppercase">
            <div>
              <p>AVG. DISTANCE</p>
              <p className="text-white md:w-40 text-3xl mt-1 md:text-2xl font-belleFair">
                <CountUp start={0} end={1.6} decimals={1} delay={1} duration={1}/> BIL. km
              </p>
            </div>
            <div>
              <p>Est. travel time</p>
              <p className="text-white md:w-40 text-3xl mt-1 md:text-2xl font-belleFair"><CountUp start={0} end={7} delay={1} duration={1}/> years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titan;
