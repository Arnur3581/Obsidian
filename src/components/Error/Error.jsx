import React from "react";

import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error">
        <div className="error__inner">
          <h1 className="error__title">404!</h1>
          <p className="error__text">Page not found!</p>
          <a href="/" className="link">
            Go to main page
            <div className="link__arrow"></div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
