import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card, { CardProps } from "./Card";
import { getWindowDimensions } from "./helpers";
import ListIndicator from "./ListIndicator";
import { CardListContainer, Dot, DotList } from "./styles";

interface Props {
  data: CardProps[];
}

const CardList = ({ data }: Props) => {
  const { width } = getWindowDimensions();
  const [cards, setCards] = useState<typeof data>(data);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const itemsPerPage = width <= 768 ? 1 : 3;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayNews = cards
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((card) => <Card {...card} key={card.id} />);

  const pageCounter = Math.ceil(cards.length / itemsPerPage);

  const changePage = (orientation: "left" | "right") => {
    if (orientation === "left") {
      setPageNumber((currentPage) =>
        currentPage - 1 < 0 ? pageCounter - 1 : currentPage - 1
      );
    }

    if (orientation === "right") {
      setPageNumber((currentPage) =>
        currentPage + 1 > pageCounter - 1 ? 0 : currentPage + 1
      );
    }
  };

  return (
    <CardListContainer className="align-items-md-center justify-content-md-center">
      <Row className="align-items-md-center">
        <ListIndicator orientation="left" onClick={() => changePage("left")} />
        {displayNews}
        <ListIndicator
          orientation="right"
          onClick={() => changePage("right")}
        />
      </Row>
      <Row>
        <DotList>
          {Array(pageCounter)
            .fill(1)
            .map((item, index) => (
              <Dot
                key={Number(index + 1)}
                isActive={index === pageNumber}
                onClick={() => setPageNumber(index)}
              />
            ))}
        </DotList>
      </Row>
    </CardListContainer>
  );
};

export default CardList;
