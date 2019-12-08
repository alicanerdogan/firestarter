import * as React from "react";
import { Hello } from "./components/Hello";
import { GlobalStyles } from "./utils/styles";

const App: React.SFC<{}> = () => {
  return (
    <GlobalStyles>
      <Hello compiler="TypeScript" framework="React" />
    </GlobalStyles>
  );
};

export default App;
