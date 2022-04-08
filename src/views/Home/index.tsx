import React from "react";

import Slider from "../../components/Slider";
import About from "../../components/About";
import News from "../../components/News";

import slideItems from "../../components/Slider/sliderMocks";
import newsItems from "../../components/News/newsMocks";

const Home = () => {
  return (
    <div style={{ overflow: "scroll", height: "100vh" }}>
      <Slider data={slideItems} />
      <News data={newsItems} />
      <About />
    </div>
  );
};

export default Home;
