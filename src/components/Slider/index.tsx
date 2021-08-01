import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import {
  categoryLabelStyle,
  containerStyle,
  descriptionLabelStyle,
  titleLabelStyle,
} from "./styles";

export interface SlideItem {
  category: string;
  title: string;
  description: string;
  src?: string;
}

interface IProps {
  data: SlideItem[] | null;
}

const Caption = ({ category, title, description }: SlideItem) => {
  return (
    <Container style={containerStyle}>
      <Row className="mb-4">
        <i style={categoryLabelStyle}>{category}</i>
      </Row>
      <Row className="mb-3">
        <a href="/">
          <h1 style={titleLabelStyle}>{title.toUpperCase()}</h1>
        </a>
      </Row>
      <Row>
        <p style={descriptionLabelStyle}>{description}</p>
      </Row>
    </Container>
  );
};

const Slider = ({ data }: IProps) => {
  const imageSettings = {
    width: "100vh",
    height: "787px",
  };

  return (
    <Carousel fade interval={1000}>
      {data?.map((slideItem) => (
        <Carousel.Item>
          <img
            width={imageSettings.width}
            height={imageSettings.height}
            src={slideItem.src}
            className="d-block w-100"
            alt={slideItem.title}
          />
          <Carousel.Caption className="m-5">
            <Caption
              category={slideItem.category}
              title={slideItem.title}
              description={slideItem.description}
            />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
