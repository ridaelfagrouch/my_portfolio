import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-12 h-80 max-xl:h-60 max-lg:h-56  max-md:h-40 py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b from-black hover:to-white-500 transition-colors duration-100 group border-[1px] border-white">
      <div className="h-72 max-xl:h-52 max-lg:h-48  max-md:h-32 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 max-xl:gap-5 max-md:gap-2 translate-y-16 max-lg:translate-y-10 group-hover:translate-y-0  transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            <span className="text-5xl max-xl:text-3xl max-md:text-xl text-orange-500">
              {icon}
            </span>
          </div>
          <div className="flex flex-col gap-4 max-md:gap-2">
            <h2 className="text-xl max-xl:text-lg max-lg:text-sm max-md:text-[10px] font-bold text-gray-300">
              {title}
            </h2>
            <p className="max-lg:text-[10px] max-md:text-[8px]">{des}</p>
            <a
              className="font-medium text-secondary underline hover:cursor-pointer max-lg:text-[10px] max-md:text-[8px]"
              href="#Contact"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
