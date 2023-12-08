import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { Button } from 'antd';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (title) => {
    setToggle(false);
    setActive(title);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex justify-between items-center fixed top-4 left-0 z-50`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white border-b-2 border-orange-500"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium hover:cursor-pointer hover:border-orange-500 hover:border-b-2`}
              onClick={() => handleNavLinkClick(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <Button
          type="primary"
          className={`hidden sm:block text-white font-medium bg-orange-500 ${
            active === 'Contact' ? 'border-b-2 border-white' : ''
          }`}
          href="#contact"
          onClick={() => handleNavLinkClick('Contact')}
        >
          Contact Me
        </Button>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* mobile mode ---------------------------------------------------------------------------- */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-white border-b-2 border-orange-500'
                      : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => handleNavLinkClick(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <Button
                type="primary"
                className={` text-white font-medium bg-orange-500 ${
                  active === 'Contact' ? 'border-b-2 border-white' : ''
                }`}
                href="#contact"
                onClick={() => handleNavLinkClick('Contact')}
              >
                Contact Me
              </Button>
            </ul>
          </div>
          {/* ---------------------------------------------------------------------------- */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
