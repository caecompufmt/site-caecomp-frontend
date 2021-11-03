import React from "react";

import Slider from "../../components/Slider";

import slideItems from "../../components/Slider/sliderMocks";

const Home = () => {
  return (
    <>
      <Slider data={slideItems} />
    </>
  );
};

export default Home;
