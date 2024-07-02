import React from "react";
import { Modal } from "antd";
import { Atikia } from "../../assets";
import { useTranslation } from "react-i18next";
import { highlightWords } from "../utils";
import { Image } from 'antd';

const ExpModal = ({
  open,
  onClose,
  experience,
  Exp1ModalPointsEn,
  Exp1ModalPointsFr,
  wordsToHighlight,
  ExpImages,
}) => {
  const { t, i18n } = useTranslation();

  const ExpModalPoint =
    i18n.language === "en" ? Exp1ModalPointsEn : Exp1ModalPointsFr;


  return (
    <Modal
      title={experience?.modalContent?.title || ""}
      width={800}
      centered
      open={open}
      footer={null}
      onCancel={onClose}
    >
      {experience && (
        <>
          <div className="flex w-full flex-row space-x-4">
            <img src={Atikia} className="w-[40px]" alt="Company Logo" />
            <div className="flex w-full flex-col">
              <h3 className="text-[17px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {experience?.modalContent?.content?.title || ""}
              </h3>
              <div className="w-full flex flex-row justify-between">
                <h3 className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
                  {experience?.modalContent?.content?.companyName || ""}
                </h3>
                <h3 className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
                  {`${experience?.year}`}
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 mx-5 flex items-center flex-col">
            <ul className="list-disc px-2">
              {ExpModalPoint.map((point, index) => (
                <li
                  key={index}
                  className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]"
                >
                  {highlightWords(point, wordsToHighlight)}
                </li>
              ))}
            </ul>
            <div className="w-full mt-5 flex items-center flex-wrap justify-center">
              {ExpImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={100}
                  alt="Experience Image"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ExpModal;
