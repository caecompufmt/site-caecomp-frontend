import React, { useState } from "react";
import Card, { CardProps } from "./Card";

import { Container, Title } from "./styles";
import CardList from "./CardList";
import ListIndicator from "./ListIndicator";

interface Props {
  data: CardProps[];
}

const News = ({ data }: Props) => {
  const [news, setNews] = useState(data);
  const [paginate, setPaginate] = useState<{ limit: number; offset: number }>({
    limit: 3,
    offset: 0,
  });

  function handlePaginate(orientation: "left" | "right"): void {
    console.log("Dispatched");
    if (orientation === "left") {
      setNews(data.slice(paginate.limit, paginate.limit + 3));
    } else if (orientation === "right") {
      setNews(data.slice(paginate.limit - 3, paginate.limit));
    }
  }

  return (
    <Container id="noticias">
      <Title>Mais notícias</Title>
      <CardList>
        <>
          <ListIndicator
            orientation="left"
            onClick={() => handlePaginate("left")}
          />
          {news?.map((card) => (
            <Card {...card} key={card.id} />
          ))}
          <ListIndicator
            orientation="right"
            onClick={() => handlePaginate("right")}
          />
        </>
      </CardList>
    </Container>
  );
};

export default News;
