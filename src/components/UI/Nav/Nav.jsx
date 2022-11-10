import React from "react";
import { nav } from "../Nav/navigation";
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <>
      {nav.map((props, index) => (
        <li key={index} className="ui-nav__item">
          <a href={props.href} className="ui-nav__link">
            {props.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default Nav;
