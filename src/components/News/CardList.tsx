import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "./helpers";
import Card, { CardProps } from "./Card";
import ListIndicator from "./ListIndicator";
import { CardListContainer, Content, DotList, Dot } from "./card-list.styles";

interface Props {
  data: CardProps[];
}

const CardList: React.FC<Props> = ({ data }: Props) => {
  const { height, width } = useWindowDimensions();

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
    <>
      <CardListContainer>
        <Content>
          <ListIndicator
            orientation="left"
            onClick={() => changePage("left")}
          />
          {displayNews}
          <ListIndicator
            orientation="right"
            onClick={() => changePage("right")}
          />
        </Content>
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
      </CardListContainer>
    </>
  );
};

export default CardList;
