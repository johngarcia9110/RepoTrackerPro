import React from "react";
import Spin from "antd/es/spin";
import logo from "../../logo.svg";
import LoaderWrapper from "./Styles";

const Loader = () => (
  <LoaderWrapper>
    <div className="main-loader-content">
      <Spin size="large" className="main-loader" />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  </LoaderWrapper>
);

export default Loader;
