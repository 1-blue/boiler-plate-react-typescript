import React from "react";
import styled from "styled-components";

// navbar, sidebar
import NavBar from "@src/components/NavBar";
import SideBar from "@src/components/SideBar";

const Wrapper = styled.main``;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <NavBar />
      <SideBar />
      {children}
    </Wrapper>
  );
};

export default Layout;
