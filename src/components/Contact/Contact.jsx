import { useRef, useState } from "react";
import { message } from "antd";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const {t} = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i53o66b",
        "template_8mm5ufk",
        formRef.current,
        "qERpG8dZ1r-79ZIQL"
      )
      .then(
        () => {
          message.success('This email is successfully sent')
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <section
      id='Contact'
      className="contact w-full max-w-7xl flex flex-row justify-center items-center px-4"
    >
      <div className="textContainer w-full text-primary dark:text-white" >
        <h1 >{t("contact.title")}</h1>
        <div className="item" >
          <h2>Email</h2>
          <span>elfagrouchrida21@gmail.com</span>
        </div>
      </div>
      <div className="formContainer w-full">
        <form
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder={t("contact.name")} name="name" className="border-2 border-primary dark:border-white "/>
          <input type="email" required placeholder={t("contact.email")} name="email" className="border-2 border-primary dark:border-white"/>
          <textarea rows={8} placeholder="Message" name="message" className="border-2 border-primary dark:border-white"/>
          <button
          type="submit"
          className={` text-white font-bold bg-orange-600 h-10 flex justify-center items-center rounded-md`}
        >
          {t("contact.send")}
        </button>
          {error && "Error"}
        </form>
      </div>
    </section>
  );
};

export default Contact;