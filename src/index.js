import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./state/store";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

if (window.Cypress) {
  window.store = store;
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
