import React from "react";
import logo from "../../../assets/img/obsidian-logo.png";
import "../Logo/Logo.css";

export const Logo = () => {
  return (
    <div className="ui__logo">
      <img src={logo} alt="" />
      <span>OBSIDIAN</span>
    </div>
  );
};
