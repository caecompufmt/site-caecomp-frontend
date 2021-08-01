import React from "react";
import { Col } from "react-bootstrap";

import Slider from "../../components/Slider";
import { slideItems } from "../../temp";

const Home = () => {
  return (
    <>
      <Col>
        <Slider data={slideItems} />
      </Col>
    </>
  );
};

export default Home;
