import "@babel/polyfill";

import React, { lazy, Suspense } from "react";
import * as ReactDOM from "react-dom";

const App = lazy(() => import(/* webpackChunkName: 'App' */ "./App"));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
