import styled from "styled-components";
import { Carousel as CarouselBootstrap } from "react-bootstrap";

export const Carousel = styled(CarouselBootstrap)`
  & > div {
    & > ol {
      & > li {
        background-color: red;
        border-radius: 50%;
        height: 10px;
        width: 10px;
      }
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: #333;
  align-items: center;
  justify-content: center;
`;

export const ImageBackground = styled.img`
  display: flex;
  align-self: center;
  width: 100vw;
  height: 500px;
  @media (max-width: 768px) {
    height: 250px;
  }
`;
