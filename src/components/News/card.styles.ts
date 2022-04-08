import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin: 91.5px 15px;
  margin-bottom: 41px;
  flex-direction: column;
  border-radius: 15px;
  flex: 0;
  width: 320px;
  height: 555px;
  display: flex;
  transition: all 0.5ms;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 30px #fff;
    transform: scale(102%);
  }
  @media (max-width: 768px) {
    margin: 5px 5px;
    transform: scale(0.8);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 50%;
`;

export const Content = styled.div`
  padding: 15px;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  margin-top: 20.1px;
`;

export const Description = styled.p`
  color: rgba(107, 107, 107, 1);
  display: block;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainerDescription = styled.div`
  width: 286.17px;
  height: 161px;
  flex: 1;
  display: flex;
`;
