import { LayoutWrapper } from "./layoutWrapper";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

interface Skills {
  name: string;
  percentage: string;
  width: string;
}
export const Skills = () => {
  const skillsData: Skills[] = [
    {
      name: "Html",
      percentage: "100%",
      width: "w-[100%]",
    },
    {
      name: "CSS",
      percentage: "95%",
      width: "w-[95%]",
    },
    {
      name: "Typescript/Javascript",
      percentage: "90%",
      width: "w-[90%]",
    },
    {
      name: "Nextjs",
      percentage: "90%",
      width: "w-[90%]",
    },
  ];
  return (
    <LayoutWrapper>
      <section className="text-gray-600 body-font" id="skills">
        <div className="  pb-20 pt-16 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-textColor font-bold text-4xl sm:text-5xl text-center ">
              Skills
            </h1>

            {/* <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div> */}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 items-center">
            {skillsData.map((skill: Skills, i: number) => {
              return (
                <div className="p-4 w-[90%] sm:w-1/2 md:w-1/3 " key={i}>
                  <div className="flex items-center  gap-3">
                    <div className="w-10 h-10 my-auto inline-flex items-center justify-center rounded-full bg-mainColor text-black flex-shrink-0">
                      <IoCheckmarkDoneSharp size={20} />
                    </div>
                    <p className="text-textColor font-bold text-[16px]">
                      {skill.name}
                    </p>
                  </div>

                  <div className="flex-grow w-full h-2 border border-mainColor mt-4 rounded-full py-[0.24rem] px-[0.2rem]  flex items-center  ">
                    <div
                      className={`h-1 ${skill.width} bg-mainColor rounded-full `}
                    ></div>
                  </div>
                  <p className="text-right text-textParaColor text-[16px] font-medium mt-1">
                    {skill.percentage}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </LayoutWrapper>
  );
};
