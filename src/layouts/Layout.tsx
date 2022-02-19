import React from "react";
import styled from "styled-components";

// nav-component
import Navigation from "@src/components/Navigation";

const Wrapper = styled.main`
  background-color: #ededed;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default Layout;
