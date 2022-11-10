import React from "react";
import "../Footer/Footer.css";
import { Logo } from "../../UI/Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__row">
            <div className="footer__column">
              <Logo />
              <h1 className="footer__title">Дипломная работа Арнура</h1>
              <span className="footer__copyright">
                © Copyright | Obsidian 2022
              </span>
            </div>
            <ul className="footer__list footer__column">
              <h2 className="footer__list-title">Home page</h2>
              <li className="footer__item">
                <a href="/" className="link">
                  welcome
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="link">
                  benefits
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="link">
                  servers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="link">
                  outro
                </a>
              </li>
            </ul>
            <ul className="footer__list footer__column">
              <h2 className="footer__list-title">Pages</h2>
              <li className="footer__item">
                <a href="/" className="link">
                  home
                </a>
              </li>
              <li className="footer__item">
                <a href="/commands" className="link">
                  commands
                </a>
              </li>
              <li className="footer__item">
                <a href="/news" className="link">
                  articles
                </a>
              </li>
              <li className="footer__item">
                <a href="/support" className="link">
                  support
                </a>
              </li>
            </ul>

            <div className="footer__column"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
