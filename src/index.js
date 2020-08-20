import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import middleware from "./middleware/index";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import GlobalStyles from "./GlobalStyles";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
