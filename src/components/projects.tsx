"use client";
import React, { useEffect, useState } from "react";
import { LayoutWrapper } from "./layoutWrapper";
import Image from "next/image";

import { client } from "@/components/utils/sanityConfig";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

interface ProjectData {
  subtitle: string;
  projectContent: string;
  title: string;
  projectUrl: string;
  _id: number;
  altText: string;
  projectImage: any;
}
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == 'portfolioProjects']{
               _id,
               title,
              subtitle,
              projectContent,
               projectUrl,
              "altText": projectImage.altText,
               projectImage
         }`;
      const data = await client.fetch(query);
      console.log(urlFor(data[0].projectImage).width(200).url());
      setProjects(data);
      return data;
    }
    fetchData();
  }, []);

  return (
    <LayoutWrapper>
      <section className=" body-font mb-5" id="projects">
        <div className="  pt-20 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-textColor font-bold text-5xl text-center ">
              My Projects
            </h1>
            {/* Project description tag is commit */}
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p> */}
          </div>
          <div className="grid grid-cols-[98%] sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 justify-center">
            {projects.map((project: ProjectData, i: number) => {
              return (
                <div className="cursor-pointer " key={i}>
                  <div className="flex relative h-full shadow-xl transition-all hover:scale-105 duration-200 ">
                    <Image
                      alt={project.altText}
                      className="absolute inset-0 w-full h-full object-cover object-center "
                      src={urlFor(project.projectImage).url()}
                      width={2000}
                      height={2000}
                    />
                    <div className="px-8 py-10 relative z-10 w-full  bg-white opacity-0 hover:opacity-100 border-2 border-white">
                      <h2 className="tracking-widest text-[1rem] title-font font-medium text-textParaColor  mb-1 line-clamp-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-textColor mb-3 line-clamp-1">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed text-textParaColor line-clamp-2">
                        {project.projectContent}
                      </p>
                      <Link
                        target="_blank"
                        href={project.projectUrl}
                        className="text-mainColor text-[18px] font-medium inline-flex items-center mt-2 "
                      >
                        <span className="hover:underline underline-offset-4 decoration-2 decoration-black">
                          View Project
                        </span>
                        <IoMdArrowForward
                          className="ml-2 font-bold"
                          size={18}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};