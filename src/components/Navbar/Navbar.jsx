import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { Button } from "antd";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (title) => {
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(link.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <nav
      className={`${styles.paddingX} w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50  bg-shadow-xl backdrop-blur-sm `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link, idx) => (
            <li key={idx} onClick={() => handleNavLinkClick(link.title)}>
              <a
                href={`#${link.id}`}
                className="relative text-xl  text-white font-bold cursor-pointer"
              >
                {active === link.title ? (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full top-6"
                  />
                ) : null}
                {link.title != "Contact" ? link.title : ""}
              </a>
            </li>
          ))}
        </ul>

        <Button
          type="primary"
          className={` text-white font-bold bg-orange-600  ${
            active === "Contact" ? "border-2 border-white" : ""
          }`}
          href="#Contact"
          onClick={() => handleNavLinkClick("Contact")}
        >
          Contact Me
        </Button>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* mobile mode ---------------------------------------------------------------------------- */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white border-b-3 border-orange-500"
                      : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer `}
                  onClick={() => handleNavLinkClick(link.title)}
                >
                  {link.title != "Contact" && (
                    <a href={`#${link.id}`} >{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* ---------------------------------------------------------------------------- */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
