import styled from "styled-components";

export const CardListContainer = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  align-items: center;
  align-self: center;
  @media (max-width: 768px) {
    flex-direction: column;
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
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
