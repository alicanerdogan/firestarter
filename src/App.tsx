import * as React from "react";
import { Hello } from "./components/Hello";

const App: React.SFC<{}> = (props: {}) => {
  return <Hello compiler="TypeScript" framework="React" />;
};

export default App;
