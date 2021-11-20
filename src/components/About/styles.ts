import styled from "styled-components";
import { Container as ContainerBs } from "react-bootstrap";

const bgFromUrl = "https://www.transparenttextures.com/patterns/cubes.png";
const borderColor = "#dbbc50";
const imgSize = "450px";

export const Container = styled(ContainerBs)`
  background-image: url(${bgFromUrl});
  background-color: #fff;
  display: flex;
  padding: 125px 344px 109px 344px;
  margin-bottom: 100px;
  place-content: center;
  place-items: center;
  height: 769px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: ${imgSize};
  width: ${imgSize};
  box-shadow: -20px -20px 0px -6px #fff, -20px -19px 0px 1px ${borderColor};
  @media (max-width: 768px) {
    transform: scale(80%);
    margin: 0px;
  }
  @media (max-width: 425px) {
    transform: scale(60%);
    margin: 0px;
  }
`;

export const Image = styled.img`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 5px;
  right: -5px;
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size: 42px;
  margin-bottom: 47px;
  &:after {
    content: "";
    display: block;
    width: 70px;
    margin-left: 20.46px;
    margin-top: 5px;
    height: 4px;
    background-color: rgba(18, 18, 18, 1);
    border-radius: 10px;
    @media (max-width: 768px) {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  color: rgba(18, 18, 18, 0.5);
  width: 70%;
  font-size: 20px;
`;

export const Wrapper = styled(ContainerBs)`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  place-items: center;
  place-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperItem = styled.div`
  display: inline-block;
  width: 560px;
  @media (max-width: 768px) {
    place-content: center;
    place-items: center;
    display: flex;
    flex-direction: column;
  }
`;
