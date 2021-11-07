import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  width: 320px;
  margin-inline: 10px;
  flex-wrap: nowrap;
  display: inline-block;
  flex-direction: row;
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
