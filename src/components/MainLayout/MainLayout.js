import React from "react";
import Nav from "../Nav/Nav";
import StyledMainLayout from "./Styles";

const { Header, Content, Footer } = StyledMainLayout;

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Header>
        <div className="container">
          <Nav />
        </div>
      </Header>
      <Content>
        <div className="container">{children}</div>
      </Content>
      <Footer>
        <p>Created by John Garcia | 2020</p>
      </Footer>
    </StyledMainLayout>
  );
};

export default MainLayout;
