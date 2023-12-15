import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card } from 'antd';
import { technologies, projects } from "../../constants";

const { Meta } = Card;

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
        <div className="sticky top-0  max-w-[90%] flex h-screen items-center  overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {projects.map((card) => {
              return <MyCard card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
        {/* <div className="absolute bottom-48 flex w-screen h-24 items-center justify-center">
          <div className="scroll-wrapper">
            {technologies.map((item) => (
              <motion.div
                key={item.name}
                className="orb bg-white flex justify-center items-center rounded-full p-2 z-10 max-lg:p-0"
              >
                <img src={item.icon} className="max-lg:w-[25px]" />
              </motion.div>
            ))}
            {technologies.map((item) => (
              <motion.div
                key={item.name}
                className="orb bg-white flex justify-center items-center rounded-full p-2 z-10 max-lg:p-0"
              >
                <img src={item.icon} className="max-lg:w-[25px]" />
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

const MyCard = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative w-[300px] h-[450px] overflow-hidden rounded-lg bg-white"
    >
      <img alt="example" src={card.image} className="w-full h-full object-fill" />
      <div className="absolute bottom-0 p-4 bg-white w-full flex flex-col text-black justify-center items-center space-y-2 bg-opacity-90">
        <h2 className="font-bold text-xl">{card.name}</h2>
        <h3 className="text-sm">{card.description}</h3>
        <div className="w-full h-full grid grid-cols-6 justify-center items-center">
          {card.tech.map(
            (item) => (
              <img src={item.icon} className="w-[35px]" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;

const cards = [
  {
    // url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    // url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    // url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    // url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    // url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    // url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    // url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    // url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 8,
  },
  {
    // url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 9,
  },
  {
    // url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 10,
  },
  {
    // url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 11,
  },
];