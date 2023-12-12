import React from 'react'
import {Divider} from "antd"

const Experience = () => {
  return (
    <section
      id="Experience"
      className="relative w-full h-screen max-w-7xl flex flex-col justify-center items-center  text-White z-0 p-4"
    >
    <div className='w-full flex justify-start font-bold'>
      <h1 >Education</h1>
    </div>
      <div className="container2">
        <ul>
          <li>
            <h3 className="text-[17px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">software Engineer</h3>
            <p className=' text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]'>
              Student in third year computer engineering, school 1337 (42
              Network) Khouribga-morocco{" "}
            </p>
            <span className="date">2023</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="text-[17px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">Bachelor's degree</h3>
            <p className=' text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]'>
              Bachelor's degree, physics-chemistry science, mechanical-energetic
              university of Sciences Rabat-morocco{" "}
            </p>
            <span className="date">2019-2020</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="text-[17px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">Baccalaureate,</h3>
            <p className=' text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]'>
              Baccalaureate in experimental science, with honors, lycee ibn al
              haytham tata-morocco{" "}
            </p>
            <span className="date">2014-2015</span>
            <span className="circle"></span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full  justify-center items-center ">
        <Divider  style={{color: 'white', fontWeight: 'bold'}} >Experience</Divider>
        <div className=' w-[95%] h-[300px] bg-white rounded-xl'></div>
      </div>
    </section>
  );
}

export default Experience