import React from "react";

import Slider from "../../components/Slider";

import { slideItems } from "../../temp";

const Home = () => {
  return (
    <>
      <Slider data={slideItems} />
    </>
  );
};

export default Home;
