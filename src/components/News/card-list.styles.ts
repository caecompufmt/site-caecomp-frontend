import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: row;
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }
`;
