import React from "react";
import { hot } from "react-hot-loader";
import { Hello } from "./components/Hello";
import { GlobalStyles } from "./utils/styles";

const App = props => {
  return (
    <GlobalStyles>
      <Hello compiler="Babel" framework="React" />
    </GlobalStyles>
  );
};

export default hot(module)(App);
