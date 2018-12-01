import * as React from "react";
import { hot } from "react-hot-loader";
import { Hello } from "./components/Hello";

const App: React.SFC<{}> = (props: {}) => {
  return <Hello compiler="TypeScript" framework="React" />;
};

export default hot(module)(App);
