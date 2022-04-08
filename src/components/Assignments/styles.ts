import styled from "styled-components";
import { Container as ContainerBs } from "react-bootstrap";

export const Container = styled(ContainerBs)`
  background-color: #f0f0f0;
  display: flex;
  height: 769px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 47px;
  margin-top: 62px;
  &:after {
    content: "";
    display: block;
    width: 70px;
    margin-left: 20.46px;
    margin-top: 5px;
    height: 4px;
    background-color: rgba(18, 18, 18, 1);
    border-radius: 10px;
    @media (max-width: 768px) {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const Resume = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin-bottom: 47px;
  margin-top: 62px;
`;

export const Assignment = styled.span`
  font-size: 24px;
  color: #333333;
  line-height: 32px;
  font-weight: bold;
`;
