import * as React from "react";
import { Hello } from "components/Hello";

const App: React.FC<{}> = () => {
  return <Hello compiler="TypeScript" framework="React" />;
};

App.displayName = "App";

export default App;
