import React, {useState} from "react";

const LanguageSwitcher = () => {
    const [lang, setLang] = useState("EN");
  return (
      <label class="language-switcher">
        <input type="checkbox" defaultChecked={lang === "EN"}/>
        <span class="slider round"></span>
        <span class="select-fr">FR</span>
        <span class="select-en">EN</span>
      </label>
  );
};

export default LanguageSwitcher;
