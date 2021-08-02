import React from "react";
import Header from "../../../components/Header";
import { Wrapper } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WithHeader = ({ children }: { children: any }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default WithHeader;
