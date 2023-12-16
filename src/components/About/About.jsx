import React, { useRef} from "react";
import { Image, Avatar } from "antd";
import { technologies } from "../../constants";


const About = () => {
  const ref = useRef();

  return (
    <section
      id="About"
      className="relative w-full max-w-7xl flex flex-col justify-center items-center space-y-4 max-xl:space-y-0 text-White  py-4 "
    >
      <div className="flex w-full  space-x-5 max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:space-x-0 max-xl:space-y-4 ">
        <div className="w-1/4  h-full max-xl:hidden bg-primary dark:bg-whitePrimary  rounded-lg flex justify-center items-center p-[2%] drop-shadow-2xl">
          <Image
            width={200}
            height={250}
            className="bg-whitePrimary max-xl:hidden"
            src="error"
            fallback="data:image/png;base64,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"
          />
        </div>
        <div className="w-[90%] hidden max-xl:flex h-[150px] bg-primary  dark:bg-whitePrimary  rounded-lg justify-center items-center p-[2%] drop-shadow-2xl">
          <Avatar size={100} className=" bg-whitePrimary" />
        </div>
        <div className=" w-3/4 max-xl:w-[90%] bg-primary dark:bg-whitePrimary rounded-lg flex flex-col justify-center p-[4%] space-y-3 drop-shadow-2xl">
          <h1 className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            🚀 Hey there!, I am{" "}
            <span className="text-orange-600 font-bold text-2xl max-xl:text-xl max-md:text-[12px] max-sm:text-[10px]">
              Rida El Fagrouch
            </span>
            .
          </h1>
          <p className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            {" "}
            I'm a{" "}
            <span className="text-white dark:text-primary font-bold ">
              Full Stack Web & Mobile Developer
            </span>{" "}
            from Morocco passionate about crafting efficient and elegant
            solutions.
          </p>
          <p className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            💻 With expertise in Frontend and Backend technologies, I specialize
            in creating seamless user experiences. I embrace simplicity in
            design and functionality.
          </p>
          <p className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            {" "}
            🌍 Let's connect and discuss how I can bring your ideas to life with
            clean, minimalist, and effective code.
          </p>
        </div>
      </div>
      <div className="flex  w-full max-xl:flex-col max-xl:justify-center max-xl:items-center  space-x-5 max-xl:space-x-0 max-xl:space-y-4 max-xl:pb-4">
        <div className="w-1/5 max-xl:hidden max-xl:w-[90%]  bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center items-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
          <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
            30+
          </h1>
          <h1 className="text-center text-white dark:text-primary">
            Completed Projects
          </h1>
        </div>
        <div className="w-1/5 max-xl:hidden max-xl:w-[90%]  bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
          <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
            3+
          </h1>
          <h1 className="text-center text-white dark:text-primary">Years</h1>
        </div>
        <div className="xl:hidden flex flex-row justify-between w-2/3 max-xl:w-[90%] space-x-3">
          <div className="w-1/2  bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center items-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
            <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
              30+
            </h1>
            <h1 className="text-white dark:text-primary text-center max-md:text-[10px]">
              Completed Projects
            </h1>
          </div>
          <div className="w-1/2   bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
            <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
              3+
            </h1>
            <h1 className="text-center max-md:text-[10px]">Years</h1>
          </div>
        </div>
        <div className="w-3/5 max-xl:w-[90%] bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
          <div className="w-full">
            <div className="text-3xl text-left leading-tight h-3">“</div>
            <p className="text-white dark:text-primary  text-center px-5 max-md:text-[10px]">
              Make it work, make it right, make it fast.
            </p>
            <div className="text-3xl text-right leading-tight h-3 -mt-3">”</div>
          </div>
          <div className="w-full">
            <p className="text-xs text-gray-500 text-center max-md:text-[10px]">
              @Kent Beck
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-xl:flex-col max-xl:justify-center max-xl:items-center  space-x-5 max-xl:space-x-0 ">
        <div className="w-full max-xl:w-[90%] bg-primary dark:bg-whitePrimary h-full rounded-lg flex flex-col justify-center items-center space-y-4 p-[4%] drop-shadow-2xl overflow-hidden ">
          <h1 className="text-white dark:text-primary max-md:text-[10px] font-bold">
            My Tech Stack
          </h1>
          <div className="container">
            <div className="scroll-wrapper">
              {technologies.map((item) => (
                <div
                  key={item.name}
                  className="orb bg-white dark:bg-whitePrimary-100 flex justify-center items-center rounded-full p-2 z-10 max-lg:p-0"
                >
                  <img src={item.icon} className="max-lg:w-[25px]" />
                </div>
              ))}
              {technologies.map((item) => (
                <div
                  key={item.name}
                  className="orb bg-white dark:bg-whitePrimary-100 flex justify-center items-center rounded-full p-2 z-10 max-lg:p-0"
                >
                  <img src={item.icon} className="max-lg:w-[25px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
