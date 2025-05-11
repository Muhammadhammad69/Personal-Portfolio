import React from "react";
import { LayoutWrapper } from "./layoutWrapper";

export const Contact = () => {
  return (
    <LayoutWrapper>
      
      <section className="text-gray-600 body-font relative px-3 py-16" id="contact">
      <h1 className="text-textColor font-bold text-4xl sm:text-5xl text-center " >Contact Us</h1>
        <div className="container  py-16 mx-auto flex sm:flex-nowrap flex-wrap" >
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.504595812292!2d67.09844908868632!3d24.825359222185973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b9b06208e57%3A0x7c44546663f83f73!2sAllah%20Wala%20Town%20Korangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1734756455637!5m2!1sen!2s"
              style={{ filter: " contrast(1.2) opacity(0.8)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md text-textParaColor" >
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-textColor tracking-widest text-sm">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Allah Wala Town Korangi, Crossing, Karachi
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-textColor tracking-widest text-sm">
                  EMAIL
                </h2>
                <a className=" leading-relaxed">
                  muhammadhammad3379@gmail.com
                </a>
                <h2 className="title-font font-semibold text-textColor tracking-widest text-sm mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0319-8382269</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-6 rounded-md">
            <h2 className="text-textColor text- mb-1 font-bold title-font">
              Leave Us Your Info
            </h2>
            
            <div className="relative mb-4 mt-5">
              <label htmlFor="name" className="leading-7 text-sm text-textColor font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#E4E6EB] rounded border  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-textColor font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#E4E6EB] rounded border  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-textColor font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-[#E4E6EB] rounded border h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="rounded-lg  bg-mainColor text-black font-medium hover:font-bold px-6 py-2 text-lg transition-all hover:translate-y-1 ">
              Send Message
            </button>
            
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
