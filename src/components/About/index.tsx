import React from "react";
import {
  Container,
  Wrapper,
  WrapperItem,
  ImageContainer,
  Image,
  Title,
  Description,
} from "./styles";

import imageSection from "../../assets/images/section/display.jpg";

export default function About() {
  return (
    <Container fluid id="sobre-nos">
      <Wrapper>
        <WrapperItem>
          <ImageContainer>
            <Image src={imageSection} />
          </ImageContainer>
        </WrapperItem>
        <WrapperItem>
          <Title>Sobre o C.A.</Title>
          <Description>
            Aqui podemos colocar algumas informações e curiosidades sobre o CA e
            suas gestões desde a fundação. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.or incididunt ut labore et dolore magna aliqua
          </Description>
        </WrapperItem>
      </Wrapper>
    </Container>
  );
}
