"use client";
import React, { useState, useEffect } from "react";
import { CloudDownload } from "lucide-react";
import { LayoutWrapper } from "./layoutWrapper";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export const HeroSection = () => {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    if (isHover) {
      const btn = document.querySelector("#download2");
      btn?.classList.add("stroke-[2.5]");
    } else if (!isHover) {
      const btn = document.querySelector("#download2");
      btn?.classList.remove("stroke-[2.5]");
    }
  }, [isHover]);

  return (
    <LayoutWrapper>
      <section className="text-gray-600 body-font mx-auto">
        <div className=" mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl lg:text-5xl lg:leading-[55px] mb-4 font-bold text-mainColor">
              <span className="text-textColor">I&#39;m Hammad</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex flex-col xs:flex-row justify-center">
              <Link href={"#contact"} className="self-center xs:self-start">
                <button className=" flex items-center px-6 py-2 rounded-lg  bg-mainColor text-black font-medium hover:font-bold transition-all hover:translate-y-1">
                  Contact
                </button>
              </Link>
              <button
                className="mt-4 xs:mt-0 xs:ml-4 px-4 py-2 rounded-lg  bg-mainColor text-black font-medium flex items-center gap-x-2 hover:font-bold stroke-[3] d-btn justify-self-center transition-all hover:translate-y-1"
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
              >
                <span>Download Resume</span>
                <CloudDownload
                  id="download2"
                  strokeWidth={1.5}
                  size={20}
                  className=""
                />
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full justify-self-end">
            <Image
              className="object-cover object-center rounded-full w-[25rem] mx-auto md:mx-0 md:ml-auto "
              alt="hero"
              src={require("../../public/assests/profile/3d-avatar-cartoon-character_113255-103130.jpg")}
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
