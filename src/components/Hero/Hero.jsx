import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import RidaCv from "../../assets/resume/ridaCv.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { printPlugin } from "@react-pdf-viewer/print";
import "@react-pdf-viewer/print/lib/styles/index.css";
import { themePlugin } from "@react-pdf-viewer/theme";
import Lottie from "lottie-react";
import animation from "../../assets/lottie_file/Animation_2.json";

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
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

  return (
    <section id="Home" className={`relative w-full overflow-hidden`}>
      <div className="max-w-7xl h-full mx-auto flex flex-row justify-between space-x-2 py-5 max-2xl:relative">
        <div className=" flex flex-col gap-6 py-[10%] max-2xl:justify-center max-2xl:items-center max-2xl:w-full max-sm:gap-3">
          <h1 className="text-5xl font-bold max-md:text-4xl max-sm:text-2xl">Hello, I'm</h1>
          <h1 className="text-4xl font-bold text-orange-600 max-md:text-3xl max-sm:text-xl">
            Rida El Fagrouch
          </h1>
          <h1 className="text-5xl font-bold max-md:text-4xl max-sm:text-2xl">Full Stack Js Developer</h1>
          <Button
            type="primary"
            className="w-[200px] h-[50px] text-white text-xl font-bold bg-orange-600 z-10 max-sm:text-lg max-sm:w-[150px] max-sm:h-[40px]"
            icon={<ExportOutlined />}
            onClick={showModal}
          >
            Resume
          </Button>
        </div>
        <div className="w-[55%] max-2xl:absolute max-2xl:w-full max-2xl:h-full max-2xl:z-[-1] max-2xl:opacity-50">
          <Lottie animationData={animation} className="w-[100%]" />
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
      <motion.div
        className="absolute bottom-[-150px] text-[50vh] whitespace-nowrap max-w-screen text-secondary opacity-5 w-[100%] font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web & Mobile Developer
      </motion.div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={RidaCv}
            plugins={[
              newPlugin,
              fullScreenPluginInstance,
              printPluginInstance,
              themePluginInstance,
            ]}
          />
        </Worker>
      </Modal>
    </section>
  );
};

export default Hero;
