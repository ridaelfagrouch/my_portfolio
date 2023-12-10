import React, {useState} from "react";
import { motion } from "framer-motion";
import { Button, Modal} from "antd";
import { ExportOutlined } from "@ant-design/icons";
import RidaCv from "../../assets/resume/ridaCv.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { printPlugin } from '@react-pdf-viewer/print';
import '@react-pdf-viewer/print/lib/styles/index.css';
import { themePlugin } from '@react-pdf-viewer/theme';


const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullScreenPluginInstance = fullScreenPlugin();
  const newPlugin = defaultLayoutPlugin();
  const printPluginInstance = printPlugin();
  const themePluginInstance = themePlugin();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 10,
      },
    },
  };

  return (
    <section id="Home" className={`relative w-full overflow-hidden`}>
      <div className="max-w-7xl h-full mx-auto flex flex-row " >
        <div className="py-[10%] px-[5%] flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Hello, I'm</h1>
            <h1 className="text-4xl font-bold text-orange-500">Rida El Fagrouch</h1>
            <h1 className="text-6xl font-bold ">Full Stack Js Developer</h1>
            <Button type="primary"  className="w-[200px] h-[50px] text-white text-xl font-bold bg-orange-500 z-10" icon={<ExportOutlined/>} onClick={showModal}>
              Resume
            </Button>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
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
      <motion.div className="absolute bottom-[-150px] text-[50vh] whitespace-nowrap max-w-screen text-secondary opacity-5 w-[100%] font-bold" 
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web & Mobile Developer
      </motion.div>
      <Modal  open={isModalOpen}  onCancel={handleCancel} footer={null} width={1000} centered >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={RidaCv} plugins={[newPlugin, fullScreenPluginInstance, printPluginInstance, themePluginInstance]} />
          </Worker>
      </Modal>
    </section>
  );
};

export default Hero;
