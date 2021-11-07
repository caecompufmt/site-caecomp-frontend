import styled from "styled-components";
import { Container as ContainerBs } from "react-bootstrap";

export const CardListContainer = styled(ContainerBs)`
  background-color: red;
  flex-direction: column;
  display: flex;
  margin-block: 25px;
`;

export const DotList = styled.div`
  flex-direction: row;
  flex: 1;
`;
export const Dot = styled.button<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? `rgba(18, 18, 18, 0.9)` : `rgba(18, 18, 18, 0.4)`};
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border-color: transparent;
  border-width: 0px;
  margin: 0px 10px;
  transition: all 0.5s;
  &:hover {
    border-color: red;
    transform: scale(120%);
  }
  &:active {
    transform: scale(120%);
  }
`;
