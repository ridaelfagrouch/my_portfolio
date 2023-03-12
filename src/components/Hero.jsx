import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion"
import { useState } from "react";
  

const Hero = () => {
  const sentence = "Hi,|I'm Rida|Web Developer".split("|");
  const controls = useAnimationControls();
  const [isPlaying, SetIsPlaying] = useState(false)

  const rubberBand = () => {
        controls.start({
            transform : [
                "scale(1, 1)",
                "scale(1.4, .55)",
                "scale(.75, 1.25)",
                "scale(1.25, .85)",
                "scale(.9, 1.05)",
                "scale(1, 1)"
            ],
            transition: {
              duration: .8
            }
        })
        SetIsPlaying(true);
    }
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}>
        {
          sentence.map((item, index) => (
            <motion.span
              key={index}
              className={`text-5xl font-bold ${"I'm Rida" == item ? "text-orange-500":"text-white"}`} 
              animate={controls} 
              onMouseOver={() => !isPlaying && rubberBand()} 
              onAnimationComplete = {() => SetIsPlaying(false)}>{item}<br /></motion.span>
              ))
        }
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;