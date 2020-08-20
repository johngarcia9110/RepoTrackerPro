import React from "react";
import logo from "../../logo.svg";
import StyledNavbar from "./Styles";

const Nav = () => {
  return (
    <StyledNavbar>
      <img src={logo} className="App-logo" alt="logo" />
    </StyledNavbar>
  );
};

export default Nav;
