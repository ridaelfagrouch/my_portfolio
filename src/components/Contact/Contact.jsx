import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
import { message } from "antd";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  // const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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
        (result) => {
          message.success('This email is successfully sent')
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <section
      // ref={ref}
      id='Contact'
      className="contact w-full max-w-7xl flex flex-row justify-center items-center px-4"
      // variants={variants}
      // initial="initial"
      // whileInView="animate"
    >
      <div className="textContainer w-full" >
        <h1 >Let’s work together</h1>
        <div className="item" >
          <h2>Mail</h2>
          <span>elfagrouchrida21@gmail.com</span>
        </div>
        <div className="item" >
          <h2>Phone</h2>
          <span>+212 681225777</span>
        </div>
      </div>
      <div className="formContainer w-full">
        <form
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Your Name" name="name"/>
          <input type="email" required placeholder="Your Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button
          type="submit"
          className={` text-white font-bold bg-orange-600 h-10 flex justify-center items-center rounded-md`}
        >
          Submit
        </button>
          {error && "Error"}
        </form>
      </div>
    </section>
  );
};

export default Contact;