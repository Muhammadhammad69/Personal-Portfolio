"use client";
import { CloudDownload } from "lucide-react";
import { LayoutWrapper } from "./layoutWrapper";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export const HeroSection = () => {

  return (
    <LayoutWrapper>
      <section className="text-gray-600 body-font mx-auto">
        <div className=" mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
          <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"  data-aos="fade-up">
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
                <button className="cursor-pointer flex items-center px-6 py-2 rounded-lg  bg-mainColor text-black font-medium  transition-all duration-300
                ease-in-out hover:translate-y-1">
                  Contact
                </button>
              </Link>
              <a href="/assests/resume/Resume.pdf" className="group cursor-pointer mt-4 xs:mt-0 xs:ml-4 px-4 py-2 rounded-lg  bg-mainColor text-black font-medium flex items-center gap-x-2   justify-self-center transition-all duration-300 ease-in-out hover:translate-y-1" download>
              
                <span>Download Resume</span>
                <CloudDownload
                  id="download2"
                  strokeWidth={1.5}
                  size={20}
                  className="group-hover:stroke-2"
                />
             
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full justify-self-end" data-aos="fade-up">
            <Image
              className="object-cover object-center rounded-full w-100 mx-auto md:mx-0 md:ml-auto "
              alt="hero"
              src="/assests/profile/3d-avatar-cartoon-character_113255-103130.jpg"
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
