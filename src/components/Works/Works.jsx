import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../constants";
import { ArrowRightOutlined } from "@ant-design/icons";

const Works = () => {
  return (
    <div className="w-full px-[5%]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section id="Works" ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0  flex flex-col justify-center items-center">
        <div className="sticky top-0  max-w-[90%] max-lg:max-w-[100%] flex h-screen items-center  overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {projects.map((card, index) => {
              return <MyCard card={card} key={index} />;
            })}
          </motion.div>
        </div>
        <div className="absolute w-full xs:bottom-10 bottom-[200px] flex justify-center items-center">
          <a href="#Services">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
          </a>
        </div>
      </div>
    </section>
  );
};

const MyCard = ({ card }) => {
  return (
    <div
      key={card.key}
      className="relative w-[300px] max-lg:w-[250px] h-[450px] overflow-hidden rounded-lg bg-whitePrimary transition-transform ease-in-out   hover:cursor-pointer border-2 border-primary dark:border-white "
    >
      <img
        alt="example"
        src={card.image}
        className="w-full h-full object-fill"
      />
      <div className="absolute bottom-0 p-4 bg-whitePrimary w-full flex flex-col text-black justify-center items-center space-y-2 bg-opacity-90">
        <h2 className="font-bold text-xl">{card.name}</h2>
        <h3 className="text-sm">{card.description}</h3>
        <div className="w-full h-full grid grid-cols-6 justify-center items-center">
          {card.tech.map((item, index) => (
            <img key={index} src={item.icon} className="w-[35px]" />
          ))}
        </div>
        <motion.div
          className="flex w-full flex-row space-x-2 text-md font-bold"
          whileHover={{ scale: 1.2, originX: 0 }}
          transition={{ type: "", stiffness: 300 }}
        >
          <ArrowRightOutlined />
          <a href={card.source_code_link}>Source Code</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
