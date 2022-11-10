import React from "react";

import Header from "../components/Layouts/Header/Header";
import Benefits from "../components/Home/Benefits/Benefits";
import Welcome from "../components/Home/Welcome/Welcome";
import Servers from "../components/Home/Servers/Servers";
import Outro from "../components/Layouts/Outro/Outro";
import Footer from "../components/Layouts/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Benefits />
      <Servers />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="svg outro__svg"
      >
        <path
          fill="#c7c7c7"
          fill-opacity="1"
          d="M0,256L17.1,250.7C34.3,245,69,235,103,218.7C137.1,203,171,181,206,181.3C240,181,274,203,309,208C342.9,213,377,203,411,165.3C445.7,128,480,64,514,58.7C548.6,53,583,107,617,117.3C651.4,128,686,96,720,112C754.3,128,789,192,823,234.7C857.1,277,891,299,926,272C960,245,994,171,1029,138.7C1062.9,107,1097,117,1131,122.7C1165.7,128,1200,128,1234,128C1268.6,128,1303,128,1337,106.7C1371.4,85,1406,43,1423,21.3L1440,0L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
      <Outro />
      <Footer />
    </>
  );
};

export default Home;
