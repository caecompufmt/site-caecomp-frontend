import styled from "styled-components";

export const StyledSpan = styled.div`
  width: 30px;
  height: 2px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  margin-top: 1px;
`;
