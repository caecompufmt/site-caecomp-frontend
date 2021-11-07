import React from "react";

import { CardProps } from "./Card";

import { Container, Title } from "./styles";
import CardList from "./CardList";

interface Props {
  data: CardProps[];
}

const News = ({ data }: Props) => {
  return (
    <Container id="noticias">
      <Title>Mais notícias</Title>
      <CardList data={data} />
    </Container>
  );
};

export default News;
