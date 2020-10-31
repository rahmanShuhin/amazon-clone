import React from "react";
import amazon_logo from "../../img/amazon_logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={amazon_logo} alt="amazon_logo" />
    </div>
  );
};

export default Header;
