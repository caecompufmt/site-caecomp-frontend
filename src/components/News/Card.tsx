import React from "react";
import {
  Container,
  Thumbnail,
  Content,
  Title,
  Description,
  ContainerDescription,
} from "./card.styles";

export interface CardProps {
  id?: number;
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <Container>
      <Thumbnail src={image} />
      <Content>
        <Title>{title}</Title>
        <ContainerDescription>
          <Description>{description}</Description>
        </ContainerDescription>
      </Content>
    </Container>
  );
};

export default Card;
