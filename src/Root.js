import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";

const Root = () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
};

export default Root;