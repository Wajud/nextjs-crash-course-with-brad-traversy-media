import React from "react";
import headerStyles from "../src/styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to Date with the latest web dev news
      </p>
    </div>
  );
};

export default Header;
