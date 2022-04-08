import React from "react";

import Slider from "../../components/Slider";
import About from "../../components/About";
import News from "../../components/News";

import slideItems from "../../components/Slider/sliderMocks";
import newsItems from "../../components/News/newsMocks";
import Assignments from "../../components/Assignments";

const Home = () => {
  return (
    <div style={{ overflow: "scroll", height: "100vh" }}>
      <Slider data={slideItems} />
      <News data={newsItems} />
      <About />
      <Assignments />
    </div>
  );
};

export default Home;
