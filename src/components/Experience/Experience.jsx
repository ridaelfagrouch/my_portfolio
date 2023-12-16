import React, { useState } from "react";
import { Divider, Modal } from "antd";
import { Atikia } from "../../assets";

const Experience = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="Experience"
      className="relative w-full h-screen max-w-7xl flex flex-col justify-center items-center space-y-5  text-White"
    >
      <div className="flex flex-col space-y-12 justify-center items-center w-full max-w-7xl">
        <div className="w-full px-[5%]">
          <Divider
            style={{ fontWeight: "bold" }}
            className="text-primary dark:text-white"
          >
            Experience
          </Divider>
        </div>
        <div className="container2 flex justify-center ">
          <ul className="w-[100%] text-white dark:text-primary">
            <li className="bg-primary dark:bg-whitePrimary">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                Mobile Developer
              </h3>
              <h2 className="text-[14px] max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                Four month Internship - Atikia company
              </h2>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                Engineered cross-platform mobile applications, ensuring a
                consistent and responsive user experience on both iOS and
                Android platforms{" "}
              </p>
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer "
                onClick={() => setOpen(true)}
              >
                Read more
              </a>
              <span className="date">2023</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  space-y-12 w-full max-w-7xl">
        <div className="w-full px-[5%]">
          <Divider
            style={{ fontWeight: "bold" }}
            className="text-primary dark:text-white"
          >
            Education
          </Divider>
        </div>
        <div className="container2 flex justify-center ">
          <ul className="w-full text-white dark:text-primary">
            <li className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                Software Engineer
              </h3>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                Student in third year computer engineering, school 1337 (42
                Network) Khouribga-morocco{" "}
              </p>
              <span className="date">2023</span>
              <span className="circle"></span>
            </li>
            <li className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                Bachelor's degree
              </h3>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                Bachelor's degree, physics-chemistry science,
                mechanical-energetic university of Sciences Rabat-morocco{" "}
              </p>
              <span className="date">2019-2020</span>
              <span className="circle"></span>
            </li>
            <li className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl">
              <h3 className="text-[17px]  max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                Baccalaureate,
              </h3>
              <p className=" text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
                Baccalaureate in experimental science, with honors, lycee ibn al
                haytham tata-morocco{" "}
              </p>
              <span className="date">2014-2015</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        title="Internship"
        width={800}
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <div className="flex w-full flex-row space-x-4">
          <img src={Atikia} className="w-[40px]" />
          <div className="flex w-full flex-col">
            <h3 className="text-[17px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
              Mobile Developer
            </h3>
            <div className="w-full flex flex-row justify-between">
              <h3 className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
                Atikia Company - Morocco
              </h3>
              <h3 className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
                03/2023 - 07/2023
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 mx-5 flex  items-center">
          <ul className="list-disc">
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Engineered cross-platform mobile applications using{" "}
              <span className="font-bold">React Native</span>, ensuring a
              consistent and responsive user experience on both iOS and Android
              platforms.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Leveraged <span className="font-bold">Express/Node.js</span> to
              develop <span className="font-bold">backend</span> functionality,
              seamlessly integrated with{" "}
              <span className="font-bold">Prisma</span> and{" "}
              <span className="font-bold">PostgreSQL</span> for efficient data
              management.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Crafted visually appealing and cohesive UIs with{" "}
              <span className="font-bold">Styled Components</span>, maintaining
              a unified design language across the app.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Orchestrated state management with{" "}
              <span className="font-bold">Redux</span>, centralizing data flow
              and expediting feature development.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Integrated third-party{" "}
              <span className="font-bold">External APIs</span>, enriching app
              capabilities with real-time data and extended functionalities.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              using <span className="font-bold">React-query</span> as
              asynchronous state management.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Bolstered code quality and type safety with{" "}
              <span className="font-bold">TypeScript</span>, resulting in more
              robust code and streamlined collaboration.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Ensured type-safe communication between{" "}
              <span className="font-bold">frontend</span> and{" "}
              <span className="font-bold">backend</span> using{" "}
              <span className="font-bold">trpc</span>, enhancing API
              reliability.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              Assisted in <span className="font-bold">debugging</span>,{" "}
              <span className="font-bold">testing</span>, and performance
              optimization, refining the app's overall efficiency.
            </li>
            <li className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
              <span className="font-bold">Documented code-base</span> and
              technical processes, facilitating knowledge sharing and
              on-boarding.
            </li>
          </ul>
        </div>
      </Modal>
    </section>
  );
};

export default Experience;
