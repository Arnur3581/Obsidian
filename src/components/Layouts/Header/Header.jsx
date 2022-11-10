import React from "react";
import "./Header.css";
import "../../../assets/styles/index.css";
import { Logo } from "../../UI/Logo/Logo";
import Nav from "../../UI/Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <nav className="header__nav">
          <ul className="header__list">
            <Nav />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
