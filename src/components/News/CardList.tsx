import React from "react";
import { Container } from "./card-list.styles";

const CardList = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default CardList;
