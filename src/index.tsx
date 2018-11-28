import "@babel/polyfill";

import * as React from "react";
import * as ReactDOM from "react-dom";
const lazy = (React as any).lazy;
const Suspense = (React as any).Suspense;
const App = lazy(() => import(/* webpackChunkName: 'App' */ "./App"));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
