import React from "react";
import "./Welcome.css";
import logo from "../../../assets/img/discord-logo.png";
import welcome_image from "../../../assets/img/obsidian-logo.png";

const Welcome = () => {
  return (
    <section className="welcome">
      <svg
        className="welcome__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#682fda"
          fillOpacity="1"
          d="M0,288L12.6,277.3C25.3,267,51,245,76,250.7C101.1,256,126,288,152,282.7C176.8,277,202,235,227,213.3C252.6,192,278,192,303,208C328.4,224,354,256,379,240C404.2,224,429,160,455,133.3C480,107,505,117,531,128C555.8,139,581,149,606,176C631.6,203,657,245,682,266.7C707.4,288,733,288,758,266.7C783.2,245,808,203,834,181.3C858.9,160,884,160,909,138.7C934.7,117,960,75,985,101.3C1010.5,128,1036,224,1061,245.3C1086.3,267,1112,213,1137,197.3C1162.1,181,1187,203,1213,192C1237.9,181,1263,139,1288,122.7C1313.7,107,1339,117,1364,112C1389.5,107,1415,85,1427,74.7L1440,64L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
        ></path>
      </svg>
      <div className="welcome__shadow"></div>
      <div className="container">
        <div className="welcome__inner">
          <div className="welcome__wrapper" data-aos="fade-up">
            <img src={welcome_image} alt="" className="welcome__img" />
            <div className="welcome__content">
              <h1 className="welcome__title">Obsidian Bot</h1>
              <p className="welcome__text">
                Create Own Professional Discord Server With Us!
              </p>
              <button className="welcome__button btn">
                <img src={logo} alt="" />
                <span>Add now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
