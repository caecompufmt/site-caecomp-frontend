import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const Caption = styled(Carousel.Caption)`
  @media (max-width: 768px) {
    margin-top: 200px;
    flex: 1;
    display: flex;
  }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding-inline: 45px;
  padding-top: 36px;
  padding-bottom: 38px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  display: flex;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const CategoryLabel = styled.i`
  color: #979797,
  font-size: 18px,
`;

export const TitleLabel = styled.a`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  line-height: 50px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 20px;
    margin-block: 5px;
  }
`;

export const DescriptionLabel = styled.span`
  color: #979797;
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    white-space: nowrap;
    margin-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
