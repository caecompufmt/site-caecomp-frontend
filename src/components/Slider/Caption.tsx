import React from "react";
import { SlideItem } from "./types";
import {
  Caption as CaptionBootstrap,
  Container,
  CategoryLabel,
  TitleLabel,
  DescriptionLabel,
} from "./caption.styles";

const Caption = ({ category, title, description }: SlideItem) => {
  return (
    <CaptionBootstrap>
      <Container>
        <CategoryLabel>{category}</CategoryLabel>
        <TitleLabel href="/">{title.toUpperCase()}</TitleLabel>
        <DescriptionLabel>{description}</DescriptionLabel>
      </Container>
    </CaptionBootstrap>
  );
};

export default Caption;
