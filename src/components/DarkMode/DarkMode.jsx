import React, {useState, useEffect} from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

const DarkMode = () => {
    const [theme, setTheme] = useState('dark');
    const element = document.documentElement;

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
      <div className="daynight ">
        <label htmlFor="checkbox">
          <input type="checkbox" name="" id="checkbox" defaultChecked onClick={handleThemeSwitch} />
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
