import React, { useRef} from "react";
import { Image, Avatar } from "antd";
import { technologies } from "../../constants";
import { useTranslation } from "react-i18next";
import myphoto from "../../assets/photo/myPhoto.jpeg";


const About = () => {
  const ref = useRef();
  const { t} = useTranslation();

  return (
    <section
      id="About"
      className="relative w-full max-w-7xl flex flex-col justify-center items-center space-y-4 max-xl:space-y-0 text-White  py-4 "
    >
      <div className="flex w-full  space-x-5 max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:space-x-0 max-xl:space-y-4 ">
        <div className="w-1/4  h-full max-xl:hidden bg-primary dark:bg-whitePrimary  rounded-lg flex justify-center items-center  drop-shadow-2xl">
          <Image
            width={"100%"}
            height={350}
            className="bg-whitePrimary max-xl:hidden rounded-lg"
            src={myphoto}
          />
        </div>
        <div className="w-[90%] hidden max-xl:flex h-[150px] bg-primary  dark:bg-whitePrimary  rounded-lg justify-center items-center p-[2%] drop-shadow-2xl">
          <Avatar size={100} className=" bg-whitePrimary" />
        </div>
        <div className=" w-3/4 max-xl:w-[90%] bg-primary dark:bg-whitePrimary rounded-lg flex flex-col justify-center p-[4%] space-y-3 drop-shadow-2xl">
          <h1 className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            🚀{" "}{t("about.greeting")}{" "}
            <span className="text-orange-600 font-bold text-2xl max-xl:text-xl max-md:text-[12px] max-sm:text-[10px]">
              Rida El Fagrouch
            </span>
            .
          </h1>
          <p className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            {" "}
            {t("about.Im")}{" "}
            <span className="text-white dark:text-primary font-bold ">
            {t("about.title")}
            </span>{" "}
            {t("about.from")}
          </p>
          <p className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            💻 {t("about.subtitle")}
          </p>
          <p className="text-white dark:text-primary max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            {" "}
            🌍 {t("about.contact")}
          </p>
        </div>
      </div>
      <div className="flex  w-full max-xl:flex-col max-xl:justify-center max-xl:items-center  space-x-5 max-xl:space-x-0 max-xl:space-y-4 max-xl:pb-4">
        <div className="w-1/5 max-xl:hidden max-xl:w-[90%]  bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center items-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
          <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
            30+
          </h1>
          <h1 className="text-center text-white dark:text-primary">
            {t("about.CompletedProjects")}
          </h1>
        </div>
        <div className="w-1/5 max-xl:hidden max-xl:w-[90%]  bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
          <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
            3+
          </h1>
          <h1 className="text-center text-white dark:text-primary">{t("about.Years")}</h1>
        </div>
        <div className="xl:hidden flex flex-row justify-between w-2/3 max-xl:w-[90%] space-x-3">
          <div className="w-1/2  bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center items-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
            <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
              30+
            </h1>
            <h1 className="text-white dark:text-primary text-center max-md:text-[10px]">
              {t("about.CompletedProjects")}
            </h1>
          </div>
          <div className="w-1/2   bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
            <h1 className="text-white dark:text-primary text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">
              3+
            </h1>
            <h1 className="text-center max-md:text-[10px]">{t("about.Years")}</h1>
          </div>
        </div>
        <div className="w-3/5 max-xl:w-[90%] bg-primary dark:bg-whitePrimary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 drop-shadow-2xl">
          <div className="w-full">
            <div className="text-3xl text-left leading-tight h-3">“</div>
            <p className="text-white dark:text-primary  text-center px-5 max-md:text-[10px]">
              {t("about.qoute")}
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
            {t("about.techStack")}
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
