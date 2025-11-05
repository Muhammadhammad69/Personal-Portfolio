import { LayoutWrapper } from "./layoutWrapper";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface BlogData {
  id: number;
  title: string;
  content: string;
  image: string;
}

export const Blog = () => {
  const blogData: BlogData[] = [
    {
      id: 1,
      title: "How to make web templates",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat.",
      image: "/assests/blog/1.png",
    },
    {
      id: 2,
      title: "Make Business card",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat.",
      image: "/assests/blog/2.png",
    },
    {
      id: 3,
      title: "How to make Flyer Design",
      content:
        "Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat.",
      image: "/assests/blog/3.png",
    },
  ];
  return (
    <LayoutWrapper>
      <section className=" body-font  mb-20 pt-16" id="blogs">
        <div className="flex flex-col text-center w-full mb-16" data-aos="fade-up">
          <h1 className="text-textColor font-bold text-4xl sm:text-5xl text-center ">
            Blogs
          </h1>
          {/* Project description tag is commit */}
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p> */}
        </div>
        <div className="mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogData.map((blog: BlogData, i: number) => {
              return (
                <div className="p-4  md:w-1/3 relative " key={i} data-aos="fade-up" data-aos-delay={(blog.id * 100) + 100}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={blog.image}
                      alt="blog"
                      width={1000}
                      height={1000}
                      priority
                    />
                    <div className="p-6 bg-white">
                      {/* category option will be add soon */}
                      {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2> */}
                      <h1 className="title-font text-lg font-medium text-textColor mb-3 line-clamp-2">
                        {blog.title}
                      </h1>
                      <p className="leading-relaxed mb-3 md:mb-10 text-textParaColor line-clamp-5 ">
                        {blog.content}
                      </p>
                      <div className="flex items-center flex-wrap md:absolute md:bottom-[30px] bg-white">
                        <Link
                          target="_blank"
                          href={""}
                          className="text-mainColor text-[18px] font-medium inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          <span className="hover:underline underline-offset-4 decoration-2 decoration-black">
                            Learn More
                          </span>
                          <IoMdArrowForward
                            className="ml-2 font-bold"
                            size={18}
                          />
                        </Link>

                        {/* ya blog comment or like krna k code hain */}
                        {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span> */}
                      </div>
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
