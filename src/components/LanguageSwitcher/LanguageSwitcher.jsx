import React from "react";

const LanguageSwitcher = () => {
  return (
      <label class="language-switcher">
        <input type="checkbox" />
        <span class="slider round"></span>
        <span class="select-fr">FR</span>
        <span class="select-en">EN</span>
      </label>
  );
};

export default LanguageSwitcher;
