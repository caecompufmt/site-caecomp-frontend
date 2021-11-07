import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  width: 62.79px;
  height: 62.79px;
  display: flex;
  transition: background-color 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #000;
  }
  @media (max-width: 768px) {
    margin-inline: 10px;
  }
`;
