import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.white};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;
