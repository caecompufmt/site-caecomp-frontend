import React from "react";
import { Container } from "./list-indicator.styles";

interface Props {
  orientation: "left" | "right";
  onClick: () => void;
}

const ListIndicator = ({ orientation, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {orientation === "left" ? <PrevIcon /> : <NextIcon />}
    </Container>
  );
};

const NextIcon = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.82019 13L15.4431 13L10.1044 18.59L11.4605 20L19.1009 12L11.4605 4L10.1139 5.41L15.4431 11L3.82019 11V13Z"
      fill="white"
    />
  </svg>
);

const PrevIcon = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1009 11H7.47801L12.8167 5.41L11.4605 4L3.82019 12L11.4605 20L12.8072 18.59L7.47801 13H19.1009V11Z"
      fill="white"
    />
  </svg>
);

export default ListIndicator;
