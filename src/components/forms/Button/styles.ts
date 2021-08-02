import { Button } from "react-bootstrap";
import styled from "styled-components";

export const FormButton = styled(Button)`
  background-color: ${(props) =>
    props.variant === "default"
      ? props.theme.colors.white
      : props.theme.colors.info};
  border: none;
  width: 100px;
  font-size: 12px;
  padding: 5px;
  border-radius: ${(props) => props.theme.borderRadius.xsmall};
  outline: none;
  :focus {
    outline: 0 !important;
  }
  :hover,
  :active,
  :visited {
    background-color: ${(props) =>
      props.variant === "default"
        ? props.theme.colors.light
        : props.theme.colors.hoverLight};
  }

  span {
    color: ${(props) =>
      props.variant === "default"
        ? props.theme.colors.dark
        : props.theme.colors.white};
  }
`;
