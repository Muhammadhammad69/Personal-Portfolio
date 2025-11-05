import { LayoutWrapper } from "./layoutWrapper";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
export const Footer = () => {
  return (
    <LayoutWrapper>
      <footer className="text-gray-600 body-font px-3 rounded-tl-lg rounded-tr-lg bg-white">
        <div className="container  py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Portfolio —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Protfolio
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" >
            <Link href={""} className="bg-mainColor2 hover:bg-mainColor text-mainColor3 hover:text-black px-2 py-2 rounded-full transition-all duration-300 ease-in-out" data-aos="fade-up">
              <FaFacebookF className="" size={20} />
            </Link>
            <Link
              href={""}
              className="ml-3 bg-mainColor2 hover:bg-mainColor text-mainColor3 hover:text-black px-2 py-2 rounded-full transition-all duration-300 ease-in-out "
            >
              <FaTwitter className="" size={20} />
            </Link>
            <Link
              href={""}
              className="ml-3 bg-mainColor2 hover:bg-mainColor text-mainColor3 hover:text-black px-2 py-2 rounded-full transition-all duration-300 ease-in-out "
            >
              <FaLinkedinIn className="" size={20} />
            </Link>
            <Link
              href={""}
              className="ml-3 bg-mainColor2 hover:bg-mainColor text-mainColor3 hover:text-black px-2 py-2 rounded-full transition-all duration-300 ease-in-out"
            >
              <IoLogoInstagram className="" size={20} />
            </Link>
            <Link
              href={""}
              className="ml-3 bg-mainColor2 hover:bg-mainColor text-mainColor3 hover:text-black px-2 py-2 rounded-full transition-all duration-300 ease-in-out"
            >
              <IoLogoGithub className="" size={20} />
            </Link>
          </span>
        </div>
      </footer>
    </LayoutWrapper>
  );
};
