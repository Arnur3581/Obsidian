import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__inner">
          <h1 className="benefits__title">
            Our <span>Benefits</span>
          </h1>
          <div className="benefits__line"></div>
          <div className="benefits__row">
            <div
              className="benefit"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <i className="benefit__card-icon">⚡️</i>
              <h2 className="benefit__card-title">Uninterrupted work</h2>
              <p className="benefit__card-text">Bot works day and night!</p>
              <a href="/" className="link">
                Learn more
                <span className="link__arrow"> </span>
              </a>
            </div>
            <div
              className="benefit"
              data-aos="zoom-in"
              data-aos-duration="1400"
            >
              <i className="benefit__card-icon">🐳</i>
              <h2 className="benefit__card-title">More Commands</h2>
              <p className="benefit__card-text">
                Bot have got over 60 commands!
              </p>
              <a href="/" className="link">
                Learn more
                <span className="link__arrow"> </span>
              </a>
            </div>
            <div
              className="benefit"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <i className="benefit__card-icon">🛠️</i>
              <h2 className="benefit__card-title">Moderariton</h2>
              <p className="benefit__card-text">
                The best auto modetion system
              </p>
              <a href="/" className="link">
                Learn more
                <span className="link__arrow"> </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
