import React from "react";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";


const featuresData = [
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "App Development",
    des: "Crafted applications tailored to your needs, ensuring seamless functionality and user satisfaction",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Enhance your online visibility with optimized website structure and data, improving search engine rankings",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Develop mobile solutions that align with your objectives, delivering a superior user experience",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Elevate user satisfaction with intuitive and visually appealing design solutions for a positive digital experience",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Reliable and efficient website hosting services to ensure seamless online presence and performance",
  },
];

const Services = () => {
  return (
    <section id='Services' className='w-full max-w-7xl flex flex-col justify-center items-center '>
      <div className=" w-full max-w-7xl grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 p-[5%]">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Services