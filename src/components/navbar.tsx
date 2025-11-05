"use client";
import { useState, useEffect } from "react";
import { Menu, X, CloudDownload } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigationItems = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Projects",
      href: "#projects",
    },
    {
      id: 3,
      title: "Skills",
      href: "#skills",
    },
    {
      id: 4,
      title: "Blog",
      href: "#blog",
    },
    {
      id: 5,
      title: "Contact",
      href: "#contact",
    }
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className="w-[95%] 2xl:w-[1400px] mx-auto z-50 sticky top-0 bg-white rounded-bl-lg rounded-br-lg">
      <nav className="bg-white px-3 rounded-bl-lg rounded-br-lg font-medium text-textColor ">
        <div className="z-50">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-mainColor">
                Logo
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                key={item.id}
                  href={item.href}
                  className=" hover:text-mainColor transition-all ease-in-out duration-300"
                >
                  {item.title}
                </Link>
              ))}
             
            </div>
            <a href="/assests/resume/Resume.pdf" className="group cursor-pointer transition-all duration-500 ease-in-out px-4 py-2 rounded-lg   bg-mainColor text-black font-medium  items-center gap-x-2    hidden md:flex hover:scale-105 " download>
              
                <span>Download Resume</span>
                <CloudDownload
                  id="download"
                  strokeWidth={1.5}
                  size={20}
                  className="group-hover:stroke-2"
                />
             
            </a>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && ( */}
          <div className={`absolute w-full transition-all ease-in-out duration-500  bg-white md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full top-0 left-0"}   `}>
            <div className="  pt-2 pb-3 space-y-2 bg-white text-textColor">
              <Link
                href="/"
                className="block px-3 py-2  hover:text-black hover:font-semibold hover:bg-mainColor rounded-md text-textColor"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href={"#projects"}
                className="block px-3 py-2 hover:text-black hover:font-semibold  hover:bg-mainColor rounded-md"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                href={"#skills"}
                className="block px-3 py-2 hover:text-black hover:font-semibold  hover:bg-mainColor rounded-md"
                onClick={toggleMenu}
              >
                Skills
              </Link>
              <Link
                href={"#blogs"}
                className="block px-3 py-2 hover:text-black hover:font-semibold  hover:bg-mainColor rounded-md"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href={"#contact"}
                className="block px-3 py-2 hover:text-black hover:font-semibold  hover:bg-mainColor rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </Link>
               
              <a href="/assests/resume/Resume.pdf" className="group cursor-pointer transition-all duration-500 ease-in-out px-4 py-2 rounded-lg bg-mainColor text-black font-medium flex items-center gap-x-2 hover:font-bold ] d-btn justify-self-center hover:scale-105" download>
               
                  <span>Download Resume</span>
                  <CloudDownload
                    id="download1"
                    strokeWidth={1.5}
                    size={20}
                    className="group-hover:stroke-2"
                  />
                
              </a>
            </div>
          </div>
        {/* )} */}
      </nav>
    </div>
  );
};
