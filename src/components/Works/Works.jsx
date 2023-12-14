import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { technologies } from "../../constants";

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
        <div className="sticky top-0  max-w-[100%] flex h-screen items-center  overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
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

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden bg-white rounded-lg"
    >
      <div
        style={{
          // backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-black backdrop-blur-lg">
          {card.title}
        </p>
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