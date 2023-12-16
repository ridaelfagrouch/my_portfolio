import React, { useState, useEffect, useRef } from "react";

const DarkMode = () => {
  const ref = useRef();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  return (
    <div className="daynight ">
      <label htmlFor="checkbox">
        <input
          ref={ref}
          type="checkbox"
          name=""
          id="checkbox"
          defaultChecked={theme === "dark"}
          onClick={handleThemeSwitch}
        />
        <div className="toggle">
          <div className="cloud"></div>
          <div className="star"></div>
          <div className="sea"></div>
          <div className="mountains"></div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
