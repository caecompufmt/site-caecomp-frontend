import React from "react";

import Slider from "../../components/Slider";
import About from "../../components/About";

import slideItems from "../../components/Slider/sliderMocks";

const Home = () => {
  return (
    <div style={{ height: "100vh", flex: 1 }}>
      <Slider data={slideItems} />
      <About />
    </div>
  );
};

export default Home;
