import React, { useState } from "react";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import Exp1Modal from "./ui/Exp1Modal";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Experience = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.section
      id="Experience"
      className="relative  w-full  max-w-7xl flex flex-col justify-center items-center space-y-5  text-White"
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        variants={variants}
        className="flex flex-col space-y-12 justify-center items-center w-full max-w-7xl"
      >
        <div className="w-full px-[5%]">
          <Divider
            style={{ fontWeight: "bold" }}
            className="text-primary dark:text-white"
          >
            {t("experience.Experience")}
          </Divider>
        </div>
        <div className="container2 flex justify-center ">
          <ul className="w-[100%] text-white dark:text-primary">
            <li className="bg-primary dark:bg-whitePrimary">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {t("experience.position")}
              </h3>
              <h2 className="text-[14px] max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {t("experience.duration")}
              </h2>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                {t("experience.description")}
              </p>
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer "
                onClick={() => setOpen(true)}
              >
                {t("experience.readMoreLink")}
              </a>
              <span className="date">2023</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-col justify-center items-center  space-y-12 w-full max-w-7xl"
      >
        <div className="w-full px-[5%]">
          <Divider
            style={{ fontWeight: "bold" }}
            className="text-primary dark:text-white"
          >
            {t("experience.Education")}
          </Divider>
        </div>
        <div className="container2 flex justify-center ">
          <ul className="w-full text-white dark:text-primary">
            <li className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {t("experience.educationSection.item1.degree")}
              </h3>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                {t("experience.educationSection.item1.description")}
              </p>
              <span className="date">2023</span>
              <span className="circle"></span>
            </li>
            <li className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {t("experience.educationSection.item2.degree")}
              </h3>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                {t("experience.educationSection.item2.description")}
              </p>
              <span className="date">2019-2020</span>
              <span className="circle"></span>
            </li>
            <li className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {t("experience.educationSection.item3.degree")}
              </h3>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                {t("experience.educationSection.item3.description")}
              </p>
              <span className="date">2014-2015</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </motion.div>
      <Exp1Modal open={open} setOpen={setOpen} />
    </motion.section>
  );
};

export default Experience;
