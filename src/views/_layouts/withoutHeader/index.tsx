import React from "react";

import { Wrapper, Content } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithoutHeader = ({ children }: { children: any }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default WithoutHeader;
