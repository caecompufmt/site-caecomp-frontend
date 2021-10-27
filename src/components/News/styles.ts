import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  width: 100vw;
  padding: 108px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 42px;
  &:after {
    content: "";
    display: block;
    width: 70px;
    margin-left: 28.46px;
    margin-top: 5px;
    height: 4px;
    background-color: rgba(18, 18, 18, 0.4);
    border-radius: 10px;
    @media (max-width: 768px) {
      margin: 0px;
      margin-left: 0px;
      display: flex;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;
