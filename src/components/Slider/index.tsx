import React from "react";

import { Container, Carousel, ImageBackground } from "./styles";
import { SlideItem } from "./types";

import Caption from "./Caption";

interface Props {
  data: SlideItem[];
}

const Slider = ({ data }: Props) => {
  return (
    <Container>
      <Carousel
        fade
        interval={1000}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
        id="carousel"
      >
        {data?.map((slideItem) => (
          <Carousel.Item key={slideItem.id}>
            <ImageBackground src={slideItem.src} alt={slideItem.title} />
            <Caption
              id={slideItem.id}
              category={slideItem.category}
              title={slideItem.title}
              description={slideItem.description}
              href={slideItem.href}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

const nextIcon = (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.82019 13L15.4431 13L10.1044 18.59L11.4605 20L19.1009 12L11.4605 4L10.1139 5.41L15.4431 11L3.82019 11V13Z"
      fill="white"
    />
  </svg>
);

const prevIcon = (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1009 11H7.47801L12.8167 5.41L11.4605 4L3.82019 12L11.4605 20L12.8072 18.59L7.47801 13H19.1009V11Z"
      fill="white"
    />
  </svg>
);

export default Slider;
