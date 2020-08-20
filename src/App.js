import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Home from "./containers/Home/Home";
import { loadInitialData } from "./actions/repoActions";
import "antd/dist/antd.css";

const App = ({ handleLoadInitialData }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleLoadInitialData().then(() => {
      setLoading(false);
    });
  }, []);
  return <Home loading={loading} />;
};

const mapDispatchToProps = (dispatch) => ({
  handleLoadInitialData: () => dispatch(loadInitialData()),
});

export default connect(null, mapDispatchToProps)(App);
