import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="s-welcome">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 420"
          className="support__svg"
        >
          <path
            fill="#742eff"
            fill-opacity="1"
            d="M0,96L18.5,122.7C36.9,149,74,203,111,218.7C147.7,235,185,213,222,186.7C258.5,160,295,128,332,122.7C369.2,117,406,139,443,170.7C480,203,517,245,554,234.7C590.8,224,628,160,665,149.3C701.5,139,738,181,775,176C812.3,171,849,117,886,106.7C923.1,96,960,128,997,144C1033.8,160,1071,160,1108,181.3C1144.6,203,1182,245,1218,234.7C1255.4,224,1292,160,1329,160C1366.2,160,1403,224,1422,256L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <div className="s-inner">
            <div className="s-wrapper" data-aos="fade-up-right">
              <h1 className="s-title">
                We will <span>always</span> come
                <br /> to the rescue!
              </h1>
              <a href="https://discord.gg/mwFaVqDTkB" className="link">
                Go to support server
                <div className="link__arrow"></div>
              </a>
            </div>
            <span className="s-icon" data-aos="fade-up-left">
              ⛑
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
