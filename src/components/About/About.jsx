import React, {useRef, useEffect} from "react";
import { Image, Avatar } from "antd";
import myPhoto from "../../assets/photo/myPhoto.jpeg";
import Lottie from "lottie-react";
import animation from "../../assets/lottie_file/Animation_3.json";
import { technologies } from "../../constants";
import { motion, useInView, useAnimation } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      // staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("Animation should start now!: ", isInView);
      controls.start("visible");
    }
  }, [controls, isInView]);


  return (
    <motion.section
      id="About"
      className="relative w-full h-screen max-w-7xl flex flex-col justify-center items-center space-y-5 text-White max-xl:space-y-0 p-4 "
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {/* <div className="absolute w-full h-full flex justify-center items-center  opacity-5">
        <Lottie animationData={animation} className="w-[100%]" />
      </div> */}
      <motion.div variants={variants} className="flex w-full  space-x-5 max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:space-x-0 max-xl:space-y-2 ">
        <motion.div variants={variants} className="w-1/4 max-xl:w-[90%]  max-xl:h-[150px] bg-primary h-full rounded-lg flex flex-col justify-center items-center p-[2%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
          <Image src={myPhoto} className=" max-xl:hidden" style={{ height: '250px', objectFit: 'contain' }}/>
          <Avatar size={100} src={myPhoto} style={{ objectFit: 'contain' }} className="hidden max-xl:block  "/>
        </motion.div>
        <motion.div variants={variants} className=" w-3/4 max-xl:w-[90%] bg-primary rounded-lg flex flex-col justify-center p-[4%] space-y-3 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
          <h1 className="max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            🚀 Hey there!, I am{" "}
            <span className="text-orange-600 font-bold text-2xl max-xl:text-xl max-md:text-[12px] max-sm:text-[10px]">
              Rida El Fagrouch
            </span>
            .
          </h1>
          <p className="max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            {" "}
            I'm a{" "}
            <span className="font-bold ">
              Full Stack Web & Mobile Developer
            </span>{" "}
            from Morocco passionate about crafting efficient and elegant
            solutions.
          </p>
          <p className="max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
          💻 With expertise in Frontend and Backend technologies, I specialize in creating seamless user experiences. I embrace simplicity in design and functionality.
          </p>
          <p className="max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px]">
            {" "}
            🌍 Let's connect and discuss how I can bring your ideas to life with
            clean, minimalist, and effective code.
          </p>
        </motion.div>
        
      </motion.div>
      <motion.div variants={variants} className="flex w-full max-xl:flex-col max-xl:justify-center max-xl:items-center  space-x-5 max-xl:space-x-0 max-xl:space-y-2">
        <motion.div variants={variants} className="w-1/5 max-xl:hidden max-xl:w-[90%]  bg-primary h-[100px] rounded-lg flex flex-col justify-center items-center p-[6%] max-xl:p-[4%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
          <h1 className="text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">30+</h1>
          <h1 className="text-center ">Completed Projects</h1>
        </motion.div>
        <motion.div variants={variants} className="w-1/5 max-xl:hidden max-xl:w-[90%]  bg-primary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
          <h1 className="text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">3+</h1>
          <h1 className="text-center">Experience Years</h1>
        </motion.div>
        <motion.div variants={variants} className="xl:hidden flex flex-row justify-between w-2/3 max-xl:w-[90%] space-x-3">
          <motion.div variants={variants} className="w-1/2  bg-primary h-[100px] rounded-lg flex flex-col justify-center items-center p-[6%] max-xl:p-[4%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
            <h1 className="text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">30+</h1>
            <h1 className="text-center max-md:text-[10px]">Completed Projects</h1>
          </motion.div>
          <motion.div variants={variants} className="w-1/2   bg-primary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
            <h1 className="text-5xl max-xl:text-3xl max-md:text-xl font-bold text-center">3+</h1>
            <h1 className="text-center max-md:text-[10px]">Experience Years</h1>
          </motion.div>
        </motion.div>
        <motion.div variants={variants} className="w-3/5 max-xl:w-[90%] bg-primary h-[100px] rounded-lg flex flex-col justify-center p-[6%] max-xl:p-[4%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
          <motion.div variants={variants} className="w-full">
            <div  className="text-3xl text-left leading-tight h-3">“</div>
            <p className=" text-center px-5 max-md:text-[10px]">
              Make it work, make it right, make it fast.
            </p>
            <div className="text-3xl text-right leading-tight h-3 -mt-3">”</div>
          </motion.div>
          <motion.div variants={variants} className="w-full">
            <p className="text-xs text-gray-500 text-center max-md:text-[10px]">@Kent Beck</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className="flex w-full max-xl:flex-col max-xl:justify-center max-xl:items-center  space-x-5 max-xl:space-x-0 max-xl:space-y-2">
        <motion.div variants={variants} className="w-2/5 max-xl:hidden bg-primary h-full rounded-lg flex flex-col justify-center p-[4%] space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]"></motion.div>
        <motion.div variants={variants} className="w-2/5 max-xl:w-[90%] bg-primary h-full rounded-lg flex flex-col justify-center items-center space-y-2 py-[4%] shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)] overflow-hidden ">
          <h1 className="max-md:text-[10px]">My Tech Stack</h1>
          <motion.div variants={variants} className="container">
            <motion.div variants={variants} className="scroll-wrapper">
              {technologies.map((item) => (
                <motion.div variants={variants} key={item.name} className="orb bg-white flex justify-center items-center rounded-full p-2 z-10">
                  <img src={item.icon} />
                </motion.div>
              ))}
              {technologies.map((item) => (
                <motion.div variants={variants} key={item.name} className="orb bg-white flex justify-center items-center rounded-full p-2 z-10">
                  <img src={item.icon} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={variants}className="w-1/5 max-xl:hidden bg-primary h-full rounded-lg flex flex-col justify-center items-center space-y-2 shadow-[0_5px_20px_rgba(255,_255,_255,_0.2)]">
        <div  className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
        </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
